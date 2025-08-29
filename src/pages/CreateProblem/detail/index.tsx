import { Button } from '@/stories/Button'
import styles from './style.module.css'
import { useEffect, useReducer } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import { NumberUtils } from '@/utils/number_utils'
import { Action } from './action'
import { defaultState, reducer } from './reducer'
import { Dropdown } from 'primereact/dropdown'
import Answer from './Answer'

export default function CreateProblemDetail() {
    const [state, dispatch] = useReducer(reducer, undefined, defaultState)
    const location = useLocation()
    const [searchParams] = useSearchParams()

    useEffect(() => {
        const id = NumberUtils.parseNumber(searchParams.get('id'), 0)

        Action.findCreateProblemDetail(dispatch, { id })
    }, [location.search])

    console.log(state)

    return (
        <>
            <div className={styles.title}>
                <h2 className={styles.h2}>問題作成</h2>
                <div className={styles.save}>
                    <Button label="下書き保存" />
                </div>
            </div>
            {state.pageNum === 0 && (
                <div className={styles.newCreateProblemWrap}>
                    <div className={styles.newCreateProblemTitle}>
                        <p>タイトル</p>
                        <input
                            type="text"
                            id="title"
                            value={state.createProblemDetail.title}
                            onChange={(e) => {
                                Action.editForm(
                                    dispatch,
                                    'newCreate.problem.title',
                                    e.target.value,
                                )
                            }}
                        />
                    </div>
                    <div className={styles.newCreateProblemMainText}>
                        <p>問題本文</p>
                        <textarea
                            name="mainText"
                            id="mainText"
                            value={state.createProblemDetail.body}
                            onChange={(e) => {
                                Action.editForm(
                                    dispatch,
                                    'newCreate.problem.body',
                                    e.target.value,
                                )
                            }}
                        ></textarea>
                    </div>
                    <div className={styles.newCreateProblemAddImg}>
                        <p>画像追加</p>
                        <input type="file" id="addImg" />
                    </div>
                    <div className={styles.newCreateProblemGenre}>
                        <p>ジャンル</p>
                        <Dropdown
                            value={state.createProblemDetail.tags}
                            placeholder="タグを選択"
                            id="tags"
                            className={styles.dropdown}
                            options={state.tags}
                            optionLabel="tag_name"
                            optionValue="id"
                            onChange={(e) => {
                                Action.editForm(
                                    dispatch,
                                    'newCreate.problem.tags',
                                    e.target.value,
                                )
                            }}
                        />
                    </div>
                    <div className={styles.newCreateProblemLevel}>
                        <p>レベル</p>
                        <div className={styles.levelRadioWrap}>
                            <div>
                                <input
                                    type="radio"
                                    id="one"
                                    name="level"
                                    value={1}
                                    checked={
                                        state.createProblemDetail.level === 1
                                    }
                                    onChange={(e) => {
                                        Action.editForm(
                                            dispatch,
                                            'newCreate.problem.level',
                                            Number(e.target.value),
                                        )
                                    }}
                                />
                                <label htmlFor="one">1</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="two"
                                    name="level"
                                    value={2}
                                    checked={
                                        state.createProblemDetail.level === 2
                                    }
                                    onChange={(e) => {
                                        Action.editForm(
                                            dispatch,
                                            'newCreate.problem.level',
                                            Number(e.target.value),
                                        )
                                    }}
                                />
                                <label htmlFor="two">2</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="three"
                                    name="level"
                                    value={3}
                                    checked={
                                        state.createProblemDetail.level === 3
                                    }
                                    onChange={(e) => {
                                        Action.editForm(
                                            dispatch,
                                            'newCreate.problem.level',
                                            Number(e.target.value),
                                        )
                                    }}
                                />
                                <label htmlFor="three">3</label>
                            </div>
                        </div>
                    </div>
                    <div className={styles.newCreateProblemFormat}>
                        <p>出題形式</p>
                        <div className={styles.descriptionRadioWrap}>
                            <div>
                                <input
                                    type="radio"
                                    id="description"
                                    name="format"
                                    value={'true'}
                                    checked={
                                        state.createProblemDetail
                                            .is_multiple_choice === true
                                    }
                                    onChange={(e) => {
                                        Action.editForm(
                                            dispatch,
                                            'newCreate.problem.description',
                                            e.target.value === 'true',
                                        )
                                    }}
                                />
                                <label htmlFor="description">記述式</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="choice"
                                    name="format"
                                    value={'false'}
                                    checked={
                                        state.createProblemDetail
                                            .is_multiple_choice === false
                                    }
                                    onChange={(e) => {
                                        Action.editForm(
                                            dispatch,
                                            'newCreate.problem.description',
                                            e.target.value === 'true',
                                        )
                                    }}
                                />
                                <label htmlFor="choice">選択式</label>
                            </div>
                        </div>
                    </div>
                    <div className={styles.append}>
                        <Button
                            label="答えを入力"
                            onClick={() => Action.nextPage(dispatch)}
                        />
                    </div>
                </div>
            )}
            {state.pageNum === 1 && (
                <div className={styles.newCreateProblemWrap}>
                    <Answer
                        state={state}
                        back={() => {
                            Action.backPage(dispatch)
                        }}
                    />
                </div>
            )}
        </>
    )
}
