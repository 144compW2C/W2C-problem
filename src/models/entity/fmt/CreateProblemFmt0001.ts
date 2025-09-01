export namespace CreateProblemFmt001VO {
    export type Type = {
        id?: number
        title: string
        tags?: number
        status?: number
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
        tags: 1,
        status: 2,
        level: 1,
        difficulty: 1,
        creator_id: 13,
    },
    {
        id: 2,
        title: '線と説明文',
        tags: 1,
        status: 3,
        level: 1,
        difficulty: 2,
        creator_id: 13,
    },
    {
        id: 3,
        title: 'CSSセレクタの基礎',
        tags: 2,
        status: 3,
        level: 1,
        difficulty: 2,
        creator_id: 13,
    },
    {
        id: 4,
        title: 'JavaScriptの変数と関数',
        tags: 3,
        status: 3,
        level: 2,
        difficulty: 3,
        creator_id: 15,
    },
    {
        id: 5,
        title: 'Reactコンポーネントの作成',
        tags: 3,
        status: 3,
        level: 3,
        difficulty: 4,
        creator_id: 15,
    },
    {
        id: 6,
        title: '配列の操作メソッド',
        tags: 3,
        status: 3,
        level: 2,
        difficulty: 3,
        creator_id: 20,
    },
    {
        id: 7,
        title: '非同期処理とPromise',
        tags: 3,
        status: 3,
        level: 4,
        difficulty: 5,
        creator_id: 20,
    },
]
