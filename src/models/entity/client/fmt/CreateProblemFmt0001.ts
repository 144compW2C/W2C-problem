export namespace CreateProblemFmt001VO {
    export type Type = {
        id?: number
        title: string
        fk_tags?: number
        fk_status?: number
        level?: number
        difficulty?: number
        creator_id?: number
    }

    export function create(): CreateProblemFmt001VO.Type {
        return {
            title: '',
        }
    }
}

// テストデータ
export const testData: CreateProblemFmt001VO.Type[] = [
    {
        id: 1,
        title: 'HTMLの基本タグ',
        fk_tags: 1,
        fk_status: 2,
        level: 1,
        difficulty: 1,
        creator_id: 13,
    },
    {
        id: 2,
        title: '線と説明文',
        fk_tags: 1,
        fk_status: 3,
        level: 1,
        difficulty: 2,
        creator_id: 13,
    },
    {
        id: 3,
        title: 'CSSセレクタの基礎',
        fk_tags: 2,
        fk_status: 3,
        level: 1,
        difficulty: 2,
        creator_id: 13,
    },
    {
        id: 4,
        title: 'JavaScriptの変数と関数',
        fk_tags: 3,
        fk_status: 3,
        level: 2,
        difficulty: 3,
        creator_id: 15,
    },
    {
        id: 5,
        title: 'Reactコンポーネントの作成',
        fk_tags: 3,
        fk_status: 3,
        level: 3,
        difficulty: 4,
        creator_id: 15,
    },
    {
        id: 6,
        title: '配列の操作メソッド',
        fk_tags: 3,
        fk_status: 3,
        level: 2,
        difficulty: 3,
        creator_id: 20,
    },
    {
        id: 7,
        title: '非同期処理とPromise',
        fk_tags: 3,
        fk_status: 3,
        level: 4,
        difficulty: 5,
        creator_id: 20,
    },
]
