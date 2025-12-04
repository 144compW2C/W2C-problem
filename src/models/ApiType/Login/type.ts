export namespace LoginApi {
    export namespace POST {
        export type Request = {
            email: string
            password: string
        }
        export type Response = {
            token: string
            id: number
            email: string
            name: string
            role: string
            class_name: string
        }
    }
}
