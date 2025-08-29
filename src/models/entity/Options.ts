export namespace OptionsVO {
    export type Type = {
        id?: number
        fk_problem?: number
        option_name: string
        content: string
        input_type?: boolean
        created_at: string
        updated_at: string
        delete_flag: boolean
    }

    export function create(): OptionsVO.Type {
        return {
            option_name: '',
            content: '',
            created_at: '',
            updated_at: '',
            delete_flag: false,
        }
    }
}

export const optionTestDate = [
    {
        id: 1,
        fk_problem: 1,
        option_name: '',
        content: '',
        input_type: true,
        created_at: '2025-07-01T10:00:00Z',
        updated_at: '2025-07-02T10:00:00Z',
        delete_flag: false,
    },
    {
        id: 2,
        fk_problem: 2,
        option_name: '',
        content: '',
        input_type: true,
        created_at: '2025-07-01T10:00:00Z',
        updated_at: '2025-07-02T10:00:00Z',
        delete_flag: false,
    },
    {
        id: 3,
        fk_problem: 3,
        option_name: '["問1","問2"]',
        content:
            '[["idはプロジェクト内に同じ名前は1つだけ","idはプロジェクト内に同じ名前は複数つけれる","idはプロジェクト内に同じ名前は3つまでならつけれる"],["classはプロジェクト内に同じ名前は1つだけ","classはプロジェクト内に同じ名前は複数つけれる"]]',
        input_type: false,
        created_at: '2025-07-01T10:00:00Z',
        updated_at: '2025-07-02T10:00:00Z',
        delete_flag: false,
    },
]
