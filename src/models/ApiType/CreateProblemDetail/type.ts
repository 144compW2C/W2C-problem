import { ProblemVO } from '@/models/entity/Problem'

export namespace CreateProblemDetailApi {
    export namespace GET {
        export type Request = {
            id: string
        }

        export type Response = {
            item: ProblemVO.Type
        }
    }
}
