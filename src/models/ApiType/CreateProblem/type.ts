import { CreateProblemFmt001VO } from '@/models/entity/fmt/CreateProblemFmt0001'
import { StatusVO } from '@/models/entity/Status'
import { TagsVO } from '@/models/entity/Tags'

export namespace CreateProblemApi {
    export namespace GET {
        export type Request = {
            offset: string
            limit: string
        }

        export type Response = {
            list: CreateProblemFmt001VO.Type[]
            total: number
            tags: TagsVO.Type[]
            status: StatusVO.Type[]
        }
    }
}
