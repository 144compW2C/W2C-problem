import { CreateProblemFmt001VO } from '@/models/fmt/CreateProblemFmt0001'

export namespace CreateProblemApi {
  export namespace GET {
    export type Request = {
      offset: string
      limit: string
    }

    export type Response = {
      list: CreateProblemFmt001VO.Type[]
      total: number
    }
  }
}
