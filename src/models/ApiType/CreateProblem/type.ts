import { CreateProblemFmt001VO } from '@/models/entity/fmt/CreateProblemFmt0001'
import { StatusVO } from '@/models/entity/Status'
import { TagsVO } from '@/models/entity/Tags'

export namespace CreateProblemApi {
    export namespace GET {
        export type Request = {
            offset: string
            limit: string
        }

        // バックエンドから送られてくる型
        export type BackendResponse = {
            total: number
            list: CreateProblemSummary[]
        }

        export type CreateProblemSummary = {
            id: number
            title: string
            fk_tags: number | null
            fk_status: number | null
            level: number | null
            difficulty: number | null
            creator_id: number | null
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
