import { ProblemVO } from '@/models/entity/Problem'
import { TagsVO } from '@/models/entity/Tags'

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
          }
      }
    | {
          type: 'FIND_CREATE_PROBLEM_DETAIL_FAILURE'
      }
// ==============================================

export type State = {
    isWaiting: boolean
    offset: number
    limit: number
    createProblemDetail: ProblemVO.Type
    tags: TagsVO.Type[]
}

export function defaultState(): State {
    return {
        isWaiting: false,
        offset: 0,
        limit: 10,
        createProblemDetail: ProblemVO.create(),
        tags: [],
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
                            tags: action.payload.value,
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
            }
        case 'FIND_CREATE_PROBLEM_DETAIL_FAILURE':
            return {
                ...state,
                isWaiting: false,
            }
        // ==============================================
    }

    // デットロジック(絶対にここまでこないけど念の為にstateをそのまま返却)
    return state
}
