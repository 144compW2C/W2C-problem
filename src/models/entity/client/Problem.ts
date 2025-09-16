export namespace ProblemVO {
    export type Type = {
        id?: number
        title: string
        body: string
        fk_tags?: number
        fk_status?: number
        creator_id?: number
        reviewer_id?: number
        level?: number
        difficulty?: number
        is_multiple_choice: boolean
        model_answer: string
        created_at: string
        updated_at: string
        reviewed_at: string
        delete_flag: boolean
    }

    export function create(): ProblemVO.Type {
        return {
            title: '',
            body: '',
            is_multiple_choice: false,
            model_answer: '',
            created_at: '',
            updated_at: '',
            reviewed_at: '',
            delete_flag: false,
        }
    }
}

export const testData = [
    {
        id: 1,
        title: 'HTMLの基本タグ',
        body: '見出しをh1~h6表示',
        fk_tags: 1,
        fk_status: 2,
        creator_id: 3,
        reviewer_id: 0,
        level: 1,
        difficulty: 1,
        is_multiple_choice: true,
        model_answer:
            '<h1>h1</h1>\n<h2>h2</h2>\n<h3>h3</h3>\n<h4>h4</h4>\n<h5>h5</h5>\n<h6>h6</h6>',
        created_at: '2025-07-01T10:00:00Z',
        updated_at: '2025-07-02T08:00:00Z',
        reviewed_at: '2025-07-02T10:00:00Z',
        delete_flag: false,
    },
    {
        id: 2,
        title: '線と説明文',
        body: 'hrタグとpタグで線と説明文を表示',
        fk_tags: 1,
        fk_status: 2,
        creator_id: 3,
        reviewer_id: 0,
        level: 1,
        difficulty: 2,
        is_multiple_choice: true,
        model_answer: '<hr>hr</hr>\n<p>p</p>',
        created_at: '2025-07-01T10:00:00Z',
        updated_at: '2025-07-02T08:00:00Z',
        reviewed_at: '2025-07-02T10:00:00Z',
        delete_flag: false,
    },
    {
        id: 3,
        title: 'CSSセレクタの基礎',
        body: 'idセレクタとclassセレクタの説明で正解のものを選んでください',
        fk_tags: 2,
        fk_status: 2,
        creator_id: 3,
        reviewer_id: 0,
        level: 1,
        difficulty: 2,
        is_multiple_choice: false,
        model_answer: '[0,1]',
        created_at: '2025-07-01T10:00:00Z',
        updated_at: '2025-07-02T08:00:00Z',
        reviewed_at: '2025-07-02T10:00:00Z',
        delete_flag: false,
    },
    {
        id: 4,
        title: 'jsの基本',
        body: 'コンソールの出し方',
        fk_tags: 2,
        fk_status: 2,
        creator_id: 3,
        reviewer_id: 0,
        level: 1,
        difficulty: 1,
        is_multiple_choice: true,
        model_answer: "console.log('test')",
        created_at: '2025-09-12 18:55:58',
        update_at: '2025-09-12 18:55:58',
        reviewed_at: null,
        delete_flag: false,
    },
]
