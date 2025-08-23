import { Button } from '@/stories/Button'
import styles from './style.module.css'
import { useNavigate } from 'react-router-dom'

export default function CreateProblemDetail() {
  const navigate = useNavigate()

  return (
    <>
      <div className={styles.title}>
        <h2 className={styles.h2}>問題作成</h2>
        <div className={styles.newCreateProblem}>
          <Button
            label="下書き保存"
            onClick={() => navigate(`/createProblem/new`)}
          />
        </div>
      </div>
    </>
  )
}
