import { OptionsVO } from '@/models/entity/Options'
import { ProblemVO } from '@/models/entity/Problem'
import { TagsVO } from '@/models/entity/Tags'
import { stat } from 'fs'

export type ActionType =
    //===============================================
    | {
          type: 'EDIT_FORM'
          payload: {
              targetName: string
              value: any
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
              modelAnswer: string[]
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
    modelAnswer: string[]
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
                case 'newCreate.problem.model_answer':
                    return {
                        ...state,
                        createProblemDetail: {
                            ...state.createProblemDetail,
                            model_answer: action.payload.value,
                        },
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
