export namespace ProblemVO {
    export type Type = {
        id?: number
        title: string
        body: string
        tags: string
        status: string
        level?: number
        difficulty?: number
        creator: string
        is_multiple_choice: boolean
        options?: null
        created_at: string
        updated_at: string
        reviewed_at: string
        delete_flag: boolean
    }

    export function create(): ProblemVO.Type {
        return {
            title: '',
            body: '',
            tags: '',
            status: '',
            creator: '',
            is_multiple_choice: false,
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
        tags: 'HTML',
        status: '公開中',
        level: 1,
        difficulty: 1,
        creator: '上森 拓翔',
        is_multiple_choice: true,
        options: null,
        created_at: '2025-07-01T10:00:00Z',
        updated_at: '2025-07-02T08:00:00Z',
        reviewed_at: '2025-07-02T10:00:00Z',
        delete_flag: false,
    },
    {
        id: 2,
        title: '線と説明文',
        body: 'hrタグとpタグで線と説明文を表示',
        tags: 'HTML',
        status: '公開中',
        level: 1,
        difficulty: 2,
        creator: '平田 晃大',
        is_multiple_choice: true,
        options: null,
        created_at: '2025-07-01T10:00:00Z',
        updated_at: '2025-07-02T08:00:00Z',
        reviewed_at: '2025-07-02T10:00:00Z',
        delete_flag: false,
    },
    {
        id: 3,
        title: 'CSSセレクタの基礎',
        body: 'idセレクタとclassセレクタの違いを説明',
        tags: 'CSS',
        status: '公開中',
        level: 1,
        difficulty: 2,
        creator: '上森 拓翔',
        is_multiple_choice: true,
        options: null,
        created_at: '2025-07-01T10:00:00Z',
        updated_at: '2025-07-02T08:00:00Z',
        reviewed_at: '2025-07-02T10:00:00Z',
        delete_flag: false,
    },
]
