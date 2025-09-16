import { CreateProblemFmt001VO } from '@/models/entity/client/fmt/CreateProblemFmt0001'
import { StatusVO } from '@/models/entity/client/Status'
import { TagsVO } from '@/models/entity/client/Tags'
import { CreateProblemFmt001 } from '@/models/entity/server/fmt/CreateProblemFmt0001'

export namespace CreateProblemApi {
    export namespace GET {
        export type Request = {
            offset: string
            limit: string
        }

        // バックエンドから送られてくる型
        export type BackendResponse = {
            total: number
            list: CreateProblemFmt001.Type[]
        }

        // フロントエンド用の変換後の型
        export type Response = {
            list: CreateProblemFmt001VO.Type[]
            total: number
            tags: TagsVO.Type[]
            status: StatusVO.Type[]
        }
    }
}
