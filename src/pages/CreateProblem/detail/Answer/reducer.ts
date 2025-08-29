import { OptionsVO } from '@/models/entity/Options'
import { State } from '../reducer'

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
          type: 'CREATE_PROBLEM_ANSWER'
          payload: {
              answer: State
          }
      }
    // ==============================================
    | {
          type: 'BACK_PAGE'
      }
// ==============================================

export function reducer(state: State, action: ActionType): State {
    switch (action.type) {
        // ==============================================
        case 'EDIT_FORM': {
            switch (action.payload.targetName) {
                case 'newCreate.problem.codeAnswer':
                    return {
                        ...state,
                        option: {
                            ...state.option,
                            content: action.payload.value,
                        },
                    }
            }
            throw new (class SystemException {})()
        }
        // ==============================================
        case 'CREATE_PROBLEM_ANSWER': {
            return {
                ...state,
                option: action.payload.answer.option,
                pageNum: action.payload.answer.pageNum,
                createProblemDetail: action.payload.answer.createProblemDetail,
            }
        }
        // ==============================================
        case 'BACK_PAGE':
            return {
                ...state,
                pageNum: state.pageNum === 0 ? state.pageNum-- : state.pageNum,
            }
        // ==============================================
    }

    // デットロジック(絶対にここまでこないけど念の為にstateをそのまま返却)
    return state
}
