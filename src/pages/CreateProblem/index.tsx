import { useLocation, useSearchParams } from 'react-router-dom'
import styles from './style.module.css'
import { useEffect } from 'react'
import { Button } from '@/stories/Button'
import { useGenre } from '@/hooks/useGenre'

export default function CreateProblem() {
  const [searchParams] = useSearchParams()
  const location = useLocation()

  useEffect(() => {
    const id = searchParams.get('id') ?? ''

    console.log(id)
    // この下にaction.tsを経由してAPIをたたく処理の関数を書く
  }, [location.search])

  console.log(location.search)

  return (
    <>
      <div className={styles.title}>
        <h2 className={styles.h2}>問題作成</h2>
        <div className={styles.newCreateProblem}>
          <Button label="新規作成" />
        </div>
      </div>
      <div className={styles.createProblemWrap}>
        <table>
          <thead>
            <tr>
              <th>
                <p>タイトル</p>
              </th>
              <th>
                <p>ジャンル</p>
              </th>
              <th>
                <p>レベル</p>
              </th>
              <th>
                <p>ステータス</p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p>見出し表示</p>
              </td>
              <td>
                <p style={{ background: useGenre('HTML') }}>HTML</p>
              </td>
              <td>
                <p>1-1</p>
              </td>
              <td>
                <p>申請中</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
