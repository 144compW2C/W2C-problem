export namespace LoginFmt0001VO {
    export type Type = {
        email: string
        password: string
    }

    export function create(): LoginFmt0001VO.Type {
        return {
            email: '',
            password: '',
        }
    }
}
