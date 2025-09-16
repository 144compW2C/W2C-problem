export namespace Problem {
    export type Type = {
        id: number
        title: string
        body: string | null
        fk_tags: number | null
        created_at: string | null
        updated_at: string | null
        delete_flag: boolean | null
        fk_status: number | null
        creator_id: number | null
        reviewer_id: number | null
        level: number | null
        difficulty: number | null
        is_multiple_choice: boolean | null
        model_answer: string | null
        reviewed_at: string | null
    }
}
