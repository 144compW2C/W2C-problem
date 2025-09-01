export namespace TagsVO {
    export type Type = {
        id?: number
        tag_name: string
        created_at: string
        updated_at: string
        delete_flag: boolean
    }

    export function create(): TagsVO.Type {
        return {
            tag_name: '',
            created_at: '',
            updated_at: '',
            delete_flag: false,
        }
    }
}

export const tagsTestDate = [
    {
        id: 1,
        tag_name: 'HTML',
        created_at: '2025-07-01T10:00:00Z',
        updated_at: '2025-07-01T10:00:00Z',
        delete_flag: false,
    },
    {
        id: 2,
        tag_name: 'CSS',
        created_at: '2025-07-01T10:00:00Z',
        updated_at: '2025-07-01T10:00:00Z',
        delete_flag: false,
    },
    {
        id: 3,
        tag_name: 'JS',
        created_at: '2025-07-01T10:00:00Z',
        updated_at: '2025-07-01T10:00:00Z',
        delete_flag: false,
    },
    {
        id: 4,
        tag_name: 'Illustrator',
        created_at: '2025-07-01T10:00:00Z',
        updated_at: '2025-07-01T10:00:00Z',
        delete_flag: false,
    },
    {
        id: 5,
        tag_name: 'Photoshop',
        created_at: '2025-07-01T10:00:00Z',
        updated_at: '2025-07-01T10:00:00Z',
        delete_flag: false,
    },
    {
        id: 6,
        tag_name: 'Figma',
        created_at: '2025-07-01T10:00:00Z',
        updated_at: '2025-07-01T10:00:00Z',
        delete_flag: false,
    },
    {
        id: 7,
        tag_name: '色彩',
        created_at: '2025-07-01T10:00:00Z',
        updated_at: '2025-07-01T10:00:00Z',
        delete_flag: false,
    },
]
