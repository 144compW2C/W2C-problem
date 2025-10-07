export namespace AnswersVO {
    export type Type = {
        id?: number
        fk_users?: number
        fk_problem?: number
        answer_text: string
        is_correct?: boolean
        created_at: string
        updated_at: string
        delete_flag: boolean
        version: number
    }

    export function create(): AnswersVO.Type {
        return {
            answer_text: '',
            created_at: '',
            updated_at: '',
            delete_flag: false,
            version: 0,
        }
    }
}
