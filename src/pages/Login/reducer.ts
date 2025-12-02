import { LoginFmt0001VO } from '@/models/entity/client/fmt/LoginFmt0001VO'

export type ActionType =
    //===============================================
    | {
          type: 'EDIT_FORM'
          payload: {
              targetName: string
              value: any
          }
      }
    //===============================================
    | {
          type: 'LOGIN_REQUEST'
      }
    | {
          type: 'LOGIN_SUCCESS'
          payload: {
              token: string
          }
      }
    | {
          type: 'LOGIN_FAILURE'
      }
    //===============================================
    | {
          type: 'SHOW_PASS'
      }
//===============================================

export type State = {
    isWaiting: boolean
    user: LoginFmt0001VO.Type
    token: string
    showPassword: boolean
}

export function defaultState(): State {
    return {
        isWaiting: false,
        user: LoginFmt0001VO.create(),
        token: '',
        showPassword: false,
    }
}

export function reducer(state: State, action: ActionType): State {
    switch (action.type) {
        //===============================================
        case 'EDIT_FORM': {
            switch (action.payload.targetName) {
                case 'login.email':
                    return {
                        ...state,
                        user: {
                            ...state.user,
                            email: action.payload.value,
                        },
                    }
                case 'login.password':
                    return {
                        ...state,
                        user: {
                            ...state.user,
                            password: action.payload.value,
                        },
                    }
            }
            throw new (class SystemException {})()
        }
        //===============================================
        case 'LOGIN_REQUEST': {
            return {
                ...state,
                isWaiting: true,
            }
        }
        case 'LOGIN_SUCCESS': {
            return {
                ...state,
                isWaiting: false,
                token: action.payload.token,
            }
        }
        case 'LOGIN_FAILURE': {
            return {
                ...state,
                isWaiting: false,
            }
        }
        //===============================================
        case 'SHOW_PASS': {
            return {
                ...state,
                showPassword: state.showPassword ? false : true,
            }
        }
        //===============================================
    }

    return state
}
