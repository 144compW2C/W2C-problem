import { GenreColor } from '@/utils/Color/_genre'

export const useGenre = (props: number | undefined) => {
    let genreColor = ''

    switch (props) {
        case 1:
            genreColor = GenreColor.HTML
            break
        case 2:
            genreColor = GenreColor.CSS
            break
        case 3:
            genreColor = GenreColor.JS
            break

        default:
            break
    }

    return genreColor
}
