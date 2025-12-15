export namespace UsersVO {
    export type Type = {
        id?: number
        name: string
        email: string
        password_digest: string
        role?: number
        class_name?: number
        created_at: string
        updated_at: string
        delete_flag: boolean
        version: number
    }

    export function create(): UsersVO.Type {
        return {
            name: '',
            email: '',
            password_digest: '',
            created_at: '',
            updated_at: '',
            delete_flag: false,
            version: 0,
        }
    }
}
