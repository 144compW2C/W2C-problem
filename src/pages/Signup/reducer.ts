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
          type: 'SIGNUP_REQUEST'
      }
    | {
          type: 'SIGNUP_SUCCESS'
          payload: {
              name: string
              email: string
          }
      }
    | {
          type: 'SIGNUP_FAILURE'
      }
    //===============================================
    | {
          type: 'SHOW_PASS'
      }
//===============================================

export type State = {
    isWaiting: boolean
    showPassword: boolean
    name: string
    email: string
    password: string
    conPassword: string
    role: string
    class_name: string
}

export function defaultState(): State {
    return {
        isWaiting: false,
        showPassword: false,
        name: '',
        email: '',
        password: '',
        conPassword: '',
        role: 'general',
        class_name: '',
    }
}

export function reducer(state: State, action: ActionType): State {
    switch (action.type) {
        //===============================================
        case 'EDIT_FORM': {
            switch (action.payload.targetName) {
                case 'signup.email':
                    return {
                        ...state,
                        email: action.payload.value,
                    }
                case 'signup.password':
                    return {
                        ...state,
                        password: action.payload.value,
                    }
                case 'signup.conPassword':
                    return {
                        ...state,
                        conPassword: action.payload.value,
                    }
                case 'signup.name':
                    return {
                        ...state,
                        name: action.payload.value,
                    }
                case 'signup.class_name':
                    return {
                        ...state,
                        class_name: action.payload.value,
                    }
            }
            throw new (class SystemException {})()
        }
        //===============================================
        case 'SIGNUP_REQUEST': {
            return {
                ...state,
                isWaiting: true,
            }
        }
        case 'SIGNUP_SUCCESS': {
            return {
                ...state,
                isWaiting: false,
                name: action.payload.name,
                email: action.payload.email,
            }
        }
        case 'SIGNUP_FAILURE': {
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
