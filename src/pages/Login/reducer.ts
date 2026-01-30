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
              id: number
              email: string
              name: string
              role: string
              class_name: string
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
    | {
          type: 'ERROR_MES'
          payload: {
              error: string
          }
      }
//===============================================

export type State = {
    isWaiting: boolean
    token: string
    showPassword: boolean
    id?: number
    email: string
    password: string
    name: string
    role: string
    class_name: string
    error: string
}

export function defaultState(): State {
    return {
        isWaiting: false,
        token: '',
        showPassword: false,
        email: '',
        password: '',
        name: '',
        role: '',
        class_name: '',
        error: '',
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
                        email: action.payload.value,
                    }
                case 'login.password':
                    return {
                        ...state,
                        password: action.payload.value,
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
                id: action.payload.id,
                name: action.payload.name,
                email: action.payload.email,
                role: action.payload.role,
                class_name: action.payload.class_name,
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
        case 'ERROR_MES': {
            return {
                ...state,
                error: action.payload.error,
            }
        }
        //===============================================
    }

    return state
}
