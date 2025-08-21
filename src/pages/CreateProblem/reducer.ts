import { CreateProblemFmt001VO } from '@/models/CreateProblemFmt0001'

export type ActionType =
  // ==============================================
  | {
      type: 'FIND_CREATE_PROBLEM_REQUEST'
      payload: {
        offset: number
        limit: number
      }
    }
  | {
      type: 'FIND_CREATE_PROBLEM_SUCCESS'
      payload: {
        createProblemList: CreateProblemFmt001VO.Type[]
        createProblemTotal: number
      }
    }
  | {
      type: 'FIND_CREATE_PROBLEM_FAILURE'
    }
// ==============================================

export type State = {
  isWaiting: boolean
  offset: number
  limit: number
  createProblemList: CreateProblemFmt001VO.Type[]
  createProblemTotal: number
}

export function defaultState(): State {
  return {
    isWaiting: false,
    offset: 0,
    limit: 5,
    createProblemList: [],
    createProblemTotal: 0,
  }
}

export function reducer(state: State, action: ActionType): State {
  switch (action.type) {
    // ==============================================
    case 'FIND_CREATE_PROBLEM_REQUEST':
      return {
        ...state,
        isWaiting: true,
        offset: action.payload.offset,
        limit: action.payload.limit,
      }
    case 'FIND_CREATE_PROBLEM_SUCCESS':
      return {
        ...state,
        isWaiting: false,
        createProblemList: action.payload.createProblemList,
        createProblemTotal: action.payload.createProblemTotal,
      }
    case 'FIND_CREATE_PROBLEM_FAILURE':
      return {
        ...state,
        isWaiting: false,
      }
    // ==============================================
  }

  // デットロジック(絶対にここまでこないけど念の為にstateをそのまま返却)
  return state
}
