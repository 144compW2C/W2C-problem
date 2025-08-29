import { Dropdown } from 'primereact/dropdown'
import styles from './style.module.css'
import { useEffect, useReducer } from 'react'
import { defaultState, State } from '../reducer'
import { reducer } from './reducer'
import { Action } from './action'
import { Button } from '@/stories/Button'

type AnswerProps = {
    state: State
    back: () => void
}

export default function Answer(props: AnswerProps) {
    const [localState, dispatch] = useReducer(reducer, undefined, defaultState)

    useEffect(() => {
        Action.CreateProblemAnswer(dispatch, { answer: props.state })
        if (
            props.state.createProblemDetail.is_multiple_choice !==
            props.state.option.input_type
        ) {
            /* 保存されている出題形式と編集中の出題形式が一緒じゃない時option.content(模範解答)を削除 */
        }
    }, [props.state])

    console.log(localState)

    return (
        <>
            {props.state.createProblemDetail.is_multiple_choice ? (
                <>
                    <div className={styles.newCreateProblemMainText}>
                        <p>模範解答</p>
                        <textarea
                            value={props.state.option.content}
                            onChange={(e) => {
                                Action.editForm(
                                    dispatch,
                                    'newCreate.problem.codeAnswer',
                                    e.target.value,
                                )
                            }}
                        ></textarea>
                    </div>
                    <div className={styles.newCreateProblemZip}>
                        <p>初期zip</p>
                        <input
                            type="text"
                            id="zipText"
                            placeholder="ファイルの名前"
                            onChange={(e) => {
                                /* 初期zip取得のAPIを叩くアクションを指定 */
                                // Action.editForm(dispatch, 'newCreate.problem.title', e.target.value)
                            }}
                        />
                        <input type="file" id="zipFile" />
                    </div>
                </>
            ) : (
                <>
                    <div className={styles.selectProblemBox}>
                        <p>選択問題</p>
                        <div>
                            <div className={styles.selectProblem}>
                                <input type="text" />
                                <div>
                                    <div>
                                        <label htmlFor="">1. </label>
                                        <input type="text" />
                                    </div>
                                    <div>
                                        <label htmlFor="">2. </label>
                                        <input type="text" />
                                    </div>
                                    <div>
                                        <button>-</button>
                                        <label htmlFor="">3. </label>
                                        <input type="text" />
                                    </div>
                                    <button>+</button>
                                </div>
                            </div>
                            <button>問題追加 +</button>
                        </div>
                    </div>
                    <div className={styles.selectAnswer}>
                        <p>模範解答</p>
                        <div className={styles.answerWrap}>
                            <div>
                                <label htmlFor="selectAnswer">問1</label>
                                <Dropdown
                                    // value={state.createProblemDetail.tags}
                                    placeholder="答えを選択"
                                    id="selectAnswer"
                                    className={styles.dropdown}
                                    options={props.state.tags}
                                    optionLabel="tag_name"
                                    optionValue="id"
                                    onChange={(e) => {
                                        /* 模範解答取得のAPIを叩くアクションを指定 */
                                        // Action.editForm()
                                    }}
                                />
                            </div>
                            <div>
                                <label htmlFor="selectAnswer">問1</label>
                                <Dropdown
                                    // value={state.createProblemDetail.tags}
                                    placeholder="答えを選択"
                                    id="selectAnswer"
                                    className={styles.dropdown}
                                    options={props.state.tags}
                                    optionLabel="tag_name"
                                    optionValue="id"
                                    onChange={(e) => {
                                        /* 模範解答取得のAPIを叩くアクションを指定 */
                                        // Action.editForm()
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </>
            )}
            <div className={styles.appendWrap}>
                <Button label="問題を修正する" onClick={props.back} />
                <Button label="申請する" backgroundColor="#99F3FD" />
            </div>
        </>
    )
}
