export namespace StatusVO {
    export type Type = {
        id?: number
        status_name: string
        created_at: string
        updated_at: string
        delete_flag: boolean
    }

    export function create(): StatusVO.Type {
        return {
            status_name: '',
            created_at: '',
            updated_at: '',
            delete_flag: false,
        }
    }
}

export const statusTestDate = [
    {
        id: 1,
        status_name: '下書き',
        created_at: '2025-07-01T10:00:00Z',
        updated_at: '2025-07-01T10:00:00Z',
        delete_flag: false,
    },
    {
        id: 2,
        status_name: '申請中',
        created_at: '2025-07-01T10:00:00Z',
        updated_at: '2025-07-01T10:00:00Z',
        delete_flag: false,
    },
    {
        id: 3,
        status_name: '公開中',
        created_at: '2025-07-01T10:00:00Z',
        updated_at: '2025-07-01T10:00:00Z',
        delete_flag: false,
    },
    {
        id: 4,
        status_name: '却下',
        created_at: '2025-07-01T10:00:00Z',
        updated_at: '2025-07-01T10:00:00Z',
        delete_flag: false,
    },
    {
        id: 5,
        status_name: '差し戻し',
        created_at: '2025-07-01T10:00:00Z',
        updated_at: '2025-07-01T10:00:00Z',
        delete_flag: false,
    },
]
