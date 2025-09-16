import { OptionsVO } from '@/models/entity/client/Options'
import { ProblemVO } from '@/models/entity/client/Problem'
import { TagsVO } from '@/models/entity/client/Tags'

export type ActionType =
    //===============================================
    | {
          type: 'EDIT_FORM'
          payload: {
              targetName: string
              value: any
              index?: number
              choiceIdx?: number
          }
      }
    // ==============================================
    | {
          type: 'FIND_CREATE_PROBLEM_DETAIL_REQUEST'
      }
    | {
          type: 'FIND_CREATE_PROBLEM_DETAIL_SUCCESS'
          payload: {
              createProblemDetail: ProblemVO.Type
              tags: TagsVO.Type[]
              option: OptionsVO.Type
          }
      }
    | {
          type: 'FIND_CREATE_PROBLEM_DETAIL_FAILURE'
      }
    // ==============================================
    | {
          type: 'CONVERT_STRINGS_TO_ARRAY'
          payload: {
              optionContent: string[][]
              optionName: string[]
              modelAnswer: number[]
          }
      }
    // ==============================================
    | {
          type: 'ADD_CHOICES'
          payload: {
              conIdx: number
          }
      }
    | {
          type: 'DELETE_CHOICES'
          payload: {
              conIdx: number
              choIdx: number
          }
      }
    | {
          type: 'ADD_SELECT_PROBLEM'
      }
    | {
          type: 'DELETE_SELECT_PROBLEM'
          payload: {
              conIdx: number
          }
      }
    // ==============================================
    | {
          type: 'NEXT_PAGE'
      }
    | {
          type: 'BACK_PAGE'
      }
// ==============================================

export type State = {
    isWaiting: boolean
    createProblemDetail: ProblemVO.Type
    tags: TagsVO.Type[]
    option: OptionsVO.Type
    pageNum: number
    optionContent: string[][]
    optionName: string[]
    modelAnswer: number[]
}

export function defaultState(): State {
    return {
        isWaiting: false,
        createProblemDetail: ProblemVO.create(),
        tags: [],
        option: OptionsVO.create(),
        pageNum: 0,
        optionContent: [],
        optionName: [],
        modelAnswer: [],
    }
}

export function reducer(state: State, action: ActionType): State {
    switch (action.type) {
        // ==============================================
        case 'EDIT_FORM': {
            switch (action.payload.targetName) {
                case 'newCreate.problem.title':
                    return {
                        ...state,
                        createProblemDetail: {
                            ...state.createProblemDetail,
                            title: action.payload.value,
                        },
                    }
                case 'newCreate.problem.body':
                    return {
                        ...state,
                        createProblemDetail: {
                            ...state.createProblemDetail,
                            body: action.payload.value,
                        },
                    }
                case 'newCreate.problem.level':
                    return {
                        ...state,
                        createProblemDetail: {
                            ...state.createProblemDetail,
                            level: action.payload.value,
                        },
                    }
                case 'newCreate.problem.description':
                    return {
                        ...state,
                        createProblemDetail: {
                            ...state.createProblemDetail,
                            is_multiple_choice: action.payload.value,
                        },
                    }
                case 'newCreate.problem.tags':
                    return {
                        ...state,
                        createProblemDetail: {
                            ...state.createProblemDetail,
                            fk_tags: action.payload.value,
                        },
                    }
                /* 記述式 */
                case 'newCreate.problem.model_answer':
                    return {
                        ...state,
                        createProblemDetail: {
                            ...state.createProblemDetail,
                            model_answer: action.payload.value,
                        },
                    }
                /* 選択式 */
                case 'newCreate.problem.optionName':
                    return {
                        ...state,
                        optionName: state.optionName.map((row, idx) =>
                            idx !== action.payload.index
                                ? row
                                : action.payload.value,
                        ),
                    }
                case 'newCreate.problem.choice':
                    return {
                        ...state,
                        optionContent: state.optionContent.map((row, rIdx) =>
                            row.map((col, cIdx) =>
                                rIdx === action.payload.index &&
                                cIdx === action.payload.choiceIdx
                                    ? action.payload.value
                                    : col,
                            ),
                        ),
                    }
                case 'newCreate.problem.selectAnswer':
                    return {
                        ...state,
                        modelAnswer: state.modelAnswer.map((row, idx) =>
                            idx !== action.payload.index
                                ? row
                                : Number(action.payload.value),
                        ),
                    }
            }
            throw new (class SystemException {})()
        }
        // ==============================================
        case 'FIND_CREATE_PROBLEM_DETAIL_REQUEST':
            return {
                ...state,
                isWaiting: true,
            }
        case 'FIND_CREATE_PROBLEM_DETAIL_SUCCESS':
            return {
                ...state,
                isWaiting: false,
                createProblemDetail: action.payload.createProblemDetail,
                tags: action.payload.tags,
                option: action.payload.option,
            }
        case 'FIND_CREATE_PROBLEM_DETAIL_FAILURE':
            return {
                ...state,
                isWaiting: false,
            }
        // ==============================================
        case 'CONVERT_STRINGS_TO_ARRAY':
            return {
                ...state,
                optionContent: action.payload.optionContent,
                optionName: action.payload.optionName,
                modelAnswer: action.payload.modelAnswer,
            }
        // ==============================================
        case 'ADD_CHOICES':
            return {
                ...state,
                optionContent: state.optionContent.map((row, idx) =>
                    idx !== action.payload.conIdx ? row : [...row, ''],
                ),
            }
        case 'DELETE_CHOICES':
            return {
                ...state,
                optionContent: state.optionContent.map((row, rIdx) =>
                    rIdx !== action.payload.conIdx
                        ? row
                        : row.filter(
                              (_, cIdx) => cIdx !== action.payload.choIdx,
                          ),
                ),
            }
        case 'ADD_SELECT_PROBLEM':
            return {
                ...state,
                optionName: [...state.optionName, ''],
                optionContent: [...state.optionContent, ['', '']],
                modelAnswer: [...state.modelAnswer, 0],
            }
        case 'DELETE_SELECT_PROBLEM':
            return {
                ...state,
                optionName: state.optionName.filter(
                    (_, idx) => idx !== action.payload.conIdx,
                ),
                optionContent: state.optionContent.filter(
                    (_, idx) => idx !== action.payload.conIdx,
                ),
                modelAnswer: state.modelAnswer.filter(
                    (_, idx) => idx !== action.payload.conIdx,
                ),
            }
        // ==============================================
        case 'NEXT_PAGE':
            return {
                ...state,
                pageNum: state.pageNum++,
            }
        case 'BACK_PAGE':
            return {
                ...state,
                pageNum: state.pageNum !== 0 ? state.pageNum-- : state.pageNum,
            }
        // ==============================================
    }

    // デットロジック(絶対にここまでこないけど念の為にstateをそのまま返却)
    return state
}
