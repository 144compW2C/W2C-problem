import { Button } from '@/stories/Button'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
  const navigator = useNavigate()

  return (
    <>
      <div>
        <p>お探しのページは見つかりませんでした</p>
        <div>
          <Button label="Homeに戻る" onClick={() => navigator('/')} />
        </div>
      </div>
    </>
  )
}
