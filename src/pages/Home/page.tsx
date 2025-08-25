import { GenreColor } from '@/utils/Color/_genre'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <p style={{ color: GenreColor.HTML }}>ホームのページ</p>
      <Link to={'/createProblem'}>問題作成</Link>
    </>
  )
}
