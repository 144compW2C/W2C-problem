export namespace SignupApi {
    export namespace POST {
        export type Request = {
            name: string
            email: string
            password: string
            role: string
            class_name: string
        }

        export type Response = {
            name: string
            email: string
        }
    }
}
