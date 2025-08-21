import { GenreColor } from '@/utils/Color/_genre'

export const useGenre = (props: string) => {
  let genreColor = ''

  switch (props) {
    case 'HTML':
      genreColor = GenreColor.HTML
      break
    case 'CSS':
      genreColor = GenreColor.CSS
      break
    case 'JS':
      genreColor = GenreColor.JS
      break

    default:
      break
  }

  return genreColor
}
