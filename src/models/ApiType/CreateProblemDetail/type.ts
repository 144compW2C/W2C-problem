import { OptionsVO } from '@/models/entity/client/Options'
import { ProblemVO } from '@/models/entity/client/Problem'
import { TagsVO } from '@/models/entity/client/Tags'

export namespace CreateProblemDetailApi {
    export namespace GET {
        export type Request = {
            id: string
        }

        export type BackendResponse = {
            data: ProblemVO.Type
        }
        export type Response = {
            item: ProblemVO.Type
            tags: TagsVO.Type[]
            option: OptionsVO.Type
        }
    }
}
