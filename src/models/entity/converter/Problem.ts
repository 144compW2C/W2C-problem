import { StringUtils } from '@/utils/string_utils'
import { ProblemVO } from '../client/Problem'
import { Problem } from '../server/Problem'
import { NumberUtils } from '@/utils/number_utils'
import { BooleanUtils } from '@/utils/boolean_utils'

export namespace ProblemConverter {
    export function toVo(src: Problem.Type): ProblemVO.Type {
        return {
            id: src.id,
            title: src.title,
            body: StringUtils.nvl(src.body),
            fk_tags: NumberUtils.ensureNumber(src.fk_tags),
            fk_status: NumberUtils.ensureNumber(src.fk_status),
            creator_id: NumberUtils.ensureNumber(src.creator_id),
            reviewer_id: NumberUtils.ensureNumber(src.reviewer_id),
            level: NumberUtils.ensureNumber(src.level),
            difficulty: NumberUtils.ensureNumber(src.difficulty),
            is_multiple_choice: BooleanUtils.ensureBool(src.is_multiple_choice),
            model_answer: StringUtils.nvl(src.model_answer),
            created_at: StringUtils.nvl(src.created_at),
            updated_at: StringUtils.nvl(src.updated_at),
            reviewed_at: StringUtils.nvl(src.reviewed_at),
            delete_flag: BooleanUtils.ensureBool(src.delete_flag),
            version: NumberUtils.ensureNumber(src.version),
        }
    }

    // バックエンドのデータを直接ProblemVOに変換する関数
    export function fromBackendToVo(
        backendData: ProblemVO.Type | undefined,
    ): ProblemVO.Type {
        // データが存在しない場合はデフォルト値を返す
        if (!backendData) {
            return ProblemVO.create()
        }

        // バックエンドデータをサーバー型に変換してから、クライアント型に変換
        const serverData: Problem.Type = {
            id: backendData.id || 0,
            title: backendData.title || '',
            body: backendData.body || '',
            fk_tags: backendData.fk_tags ?? null,
            fk_status: backendData.fk_status ?? null,
            creator_id: backendData.creator_id ?? null,
            reviewer_id: backendData.reviewer_id ?? null,
            level: backendData.level ?? null,
            difficulty: backendData.difficulty ?? null,
            is_multiple_choice: backendData.is_multiple_choice ?? false,
            model_answer: backendData.model_answer || '',
            created_at: backendData.created_at || '',
            updated_at: backendData.updated_at || '',
            reviewed_at: backendData.reviewed_at || '',
            delete_flag: backendData.delete_flag ?? false,
            version: backendData.version ?? null,
        }

        const result = toVo(serverData)
        return result
    }
}
