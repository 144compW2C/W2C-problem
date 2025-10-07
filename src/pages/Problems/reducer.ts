import { ProblemFmt0001VO } from '@/models/entity/client/fmt/ProblemFmt0001VO'
import { TagsVO } from '@/models/entity/client/Tags'

export type ActionType =
    //===============================================
    | {
          type: 'OPEN_FORM'
          payload: {
              tagName: string
          }
      }
    //===============================================
    | {
          type: 'FIND_GENRE_PROBLEM_REQUEST'
          payload: {
              offset: number
              limit: number
          }
      }
    | {
          type: 'FIND_GENRE_PROBLEM_SUCCESS'
          payload: {
              problemList: ProblemFmt0001VO.Type[]
              tags: TagsVO.Type[]
          }
      }
    | {
          type: 'FIND_GENRE_PROBLEM_FAILURE'
      }
//===============================================

export type State = {
    isWaiting: boolean
    offset: number
    limit: number
    problemList: ProblemFmt0001VO.Type[]
    tags: TagsVO.Type[]
    genreFlag: {
        front: boolean
        HTML: boolean
        CSS: boolean
        JS: boolean
        design: boolean
        Figma: boolean
        Illustrator: boolean
        Photoshop: boolean
        ColorTheoryTest: boolean
    }
}

export function defaultState(): State {
    return {
        isWaiting: false,
        offset: 0,
        limit: 10,
        problemList: [],
        tags: [],
        genreFlag: {
            front: false,
            HTML: false,
            CSS: false,
            JS: false,
            design: false,
            Figma: false,
            Illustrator: false,
            Photoshop: false,
            ColorTheoryTest: false,
        },
    }
}

export function reducer(state: State, action: ActionType): State {
    switch (action.type) {
        // ==============================================
        case 'OPEN_FORM': {
            switch (action.payload.tagName) {
                case 'genre.front':
                    return {
                        ...state,
                        genreFlag: {
                            ...state.genreFlag,
                            front: state.genreFlag.front ? false : true,
                        },
                    }
                case 'genre.HTML':
                    return {
                        ...state,
                        genreFlag: {
                            ...state.genreFlag,
                            HTML: state.genreFlag.HTML ? false : true,
                        },
                    }
                case 'genre.CSS':
                    return {
                        ...state,
                        genreFlag: {
                            ...state.genreFlag,
                            CSS: state.genreFlag.CSS ? false : true,
                        },
                    }
                case 'genre.JS':
                    return {
                        ...state,
                        genreFlag: {
                            ...state.genreFlag,
                            JS: state.genreFlag.JS ? false : true,
                        },
                    }
                case 'genre.design':
                    return {
                        ...state,
                        genreFlag: {
                            ...state.genreFlag,
                            design: state.genreFlag.design ? false : true,
                        },
                    }
                case 'genre.Figma':
                    return {
                        ...state,
                        genreFlag: {
                            ...state.genreFlag,
                            Figma: state.genreFlag.Figma ? false : true,
                        },
                    }
                case 'genre.Illustrator':
                    return {
                        ...state,
                        genreFlag: {
                            ...state.genreFlag,
                            Illustrator: state.genreFlag.Illustrator
                                ? false
                                : true,
                        },
                    }
                case 'genre.Photoshop':
                    return {
                        ...state,
                        genreFlag: {
                            ...state.genreFlag,
                            Photoshop: state.genreFlag.Photoshop ? false : true,
                        },
                    }
                case 'genre.ColorTheoryTest':
                    return {
                        ...state,
                        genreFlag: {
                            ...state.genreFlag,
                            ColorTheoryTest: state.genreFlag.ColorTheoryTest
                                ? false
                                : true,
                        },
                    }
            }
            throw new (class SystemException {})()
        }
        // ==============================================
        case 'FIND_GENRE_PROBLEM_REQUEST':
            return {
                ...state,
                isWaiting: true,
                offset: action.payload.offset,
                limit: action.payload.limit,
            }
        case 'FIND_GENRE_PROBLEM_SUCCESS':
            return {
                ...state,
                isWaiting: false,
                problemList: action.payload.problemList,
                tags: action.payload.tags,
            }
        case 'FIND_GENRE_PROBLEM_FAILURE':
            return {
                ...state,
                isWaiting: false,
            }
        // ==============================================
    }

    return state
}
