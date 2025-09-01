import { OptionsVO } from '@/models/entity/Options'
import { ProblemVO } from '@/models/entity/Problem'
import { TagsVO } from '@/models/entity/Tags'

export namespace CreateProblemDetailApi {
    export namespace GET {
        export type Request = {
            id: string
        }

        export type Response = {
            item: ProblemVO.Type
            tags: TagsVO.Type[]
            option: OptionsVO.Type
        }
    }
}
