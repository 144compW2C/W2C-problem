import { LoginFmt0001VO } from '@/models/entity/client/fmt/LoginFmt0001VO'

export namespace LoginApi {
    export namespace POST {
        export type Request = {
            user: LoginFmt0001VO.Type
        }
        export type Response = {
            token: string
        }
    }
}
