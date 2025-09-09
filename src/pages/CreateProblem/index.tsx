import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import styles from './style.module.css'
import { useEffect, useReducer } from 'react'
import { Button } from '@/stories/Button'
import { useGenre } from '@/hooks/useGenre'
import { Action } from './action'
import { defaultState, reducer } from './reducer'
import { NumberUtils } from '@/utils/number_utils'
import Genre from '@/components/Genre/Genre'

export default function CreateProblem() {
    const [state, dispatch] = useReducer(reducer, undefined, defaultState)
    const [searchParams] = useSearchParams()
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        const id = NumberUtils.parseNumber(searchParams.get('id'), 0)
        const offset = NumberUtils.parseNumber(searchParams.get('offset'), 0)
        const limit = NumberUtils.parseNumber(searchParams.get('limit'), 10)

        // この下にaction.tsを経由してAPIをたたく処理の関数を書く
        Action.findCreateProblem(dispatch, {
            offset,
            limit,
            id,
        })
    }, [location.search])

    console.log(state)

    return (
        <>
            <div className={styles.title}>
                <h2 className={styles.h2}>問題作成</h2>
                <div className={styles.newCreateProblem}>
                    <Button
                        label="新規作成"
                        onClick={() => navigate(`/createProblem/new`)}
                    />
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
                        {state.createProblemTotal !== 0 &&
                            state.createProblemList.map((item) => (
                                <tr
                                    key={item.id}
                                    onClick={() => {
                                        navigate(
                                            `/createProblem/detail?id=${item.id}`,
                                        )
                                    }}
                                >
                                    <td>
                                        <p>{item.title}</p>
                                    </td>
                                    <td>
                                        {state.tags.map((tag) =>
                                            tag.id === item.tags ? (
                                                <Genre
                                                    genreName={tag.tag_name}
                                                />
                                            ) : (
                                                ''
                                            ),
                                        )}
                                    </td>
                                    <td>
                                        <p>
                                            {item.level}-{item.difficulty}
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            {state.status.map((sta) =>
                                                sta.id === item.status
                                                    ? sta.status_name
                                                    : '',
                                            )}
                                        </p>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
