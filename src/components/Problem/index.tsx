import { OptionsVO } from '@/models/entity/Options'
import { ProblemVO } from '@/models/entity/Problem'
import { TagsVO } from '@/models/entity/Tags'
import styles from './styles.module.css'
import Genre from '../Genre/Genre'
import { Button } from '@/stories/Button'
import { useState } from 'react'

type Type = {
    Problem: ProblemVO.Type
    tags: TagsVO.Type[]
    option: OptionsVO.Type
    optionContent: string[][]
    optionName: string[]
    modelAnswer: number[]
    pageNum: number
    onClickNextPage: () => void
    onClickBackPage: () => void
}

export default function Problem(props: Type) {
    const [state, setState] = useState<number[]>([])

    const handleAnswerChange = (
        questionIndex: number,
        selectedValue: number,
    ) => {
        setState((prevState) => {
            const newState = [...prevState]
            newState[questionIndex] = selectedValue
            return newState
        })
    }

    console.log('解答欄:' + state)
    console.log('解答欄:' + props)

    return (
        <>
            <div className={styles.title}>
                <h2 className={styles.h2}>{props.Problem.title}</h2>
            </div>
            <div className={styles.problemWrap}>
                <div className={styles.problemGenre}>
                    {props.tags.map((item) =>
                        item.id === props.Problem.fk_tags ? (
                            <div key={item.id}>
                                <Genre genreName={item.tag_name} />
                            </div>
                        ) : (
                            ''
                        ),
                    )}
                    <p>
                        {props.Problem.level}-{props.Problem.difficulty}
                    </p>
                </div>
                <div className={styles.problem}>
                    <h3>{props.Problem.body}</h3>
                </div>
                {props.pageNum === 1 && (
                    <>
                        {props.Problem.is_multiple_choice ? (
                            <></>
                        ) : (
                            <div className={styles.answerColumnWrap}>
                                <p>解答欄</p>
                                {props.optionName.map((item, idx) => (
                                    <div key={idx}>
                                        <p>{item}</p>
                                        {props.optionContent.map((row, rIdx) =>
                                            rIdx !== idx ? (
                                                ''
                                            ) : (
                                                <div
                                                    className={
                                                        styles.choicesWrap
                                                    }
                                                    key={rIdx}
                                                >
                                                    {row.map((col, cIdx) => (
                                                        <div key={cIdx}>
                                                            <label>
                                                                <input
                                                                    type="radio"
                                                                    name={item}
                                                                    value={cIdx}
                                                                    checked={
                                                                        state[
                                                                            idx
                                                                        ] ===
                                                                        cIdx
                                                                    }
                                                                    onChange={(
                                                                        e,
                                                                    ) =>
                                                                        handleAnswerChange(
                                                                            idx,
                                                                            Number(
                                                                                e
                                                                                    .target
                                                                                    .value,
                                                                            ),
                                                                        )
                                                                    }
                                                                />
                                                                {col}
                                                            </label>
                                                        </div>
                                                    ))}
                                                </div>
                                            ),
                                        )}
                                    </div>
                                ))}
                                <div className={styles.problemBtnWrap}>
                                    <Button
                                        label="解答"
                                        onClick={() => props.onClickNextPage()}
                                    />
                                </div>
                            </div>
                        )}
                    </>
                )}
                {props.pageNum === 2 && (
                    <>
                        <div className={styles.answerColumnWrap}>
                            <p>解答</p>
                            {props.optionName.map((item, idx) => (
                                <div key={idx}>
                                    <p>{item}</p>
                                    {props.optionContent.map((row, rIdx) =>
                                        rIdx !== idx ? (
                                            ''
                                        ) : (
                                            <div key={rIdx}>
                                                {row.map((col, cIdx) =>
                                                    cIdx === state[idx] ? (
                                                        <>
                                                            <div
                                                                key={cIdx}
                                                                className={
                                                                    styles.answer
                                                                }
                                                            >
                                                                {state[idx] ===
                                                                props
                                                                    .modelAnswer[
                                                                    idx
                                                                ] ? (
                                                                    <p>⭕️</p>
                                                                ) : (
                                                                    <p>❌</p>
                                                                )}
                                                                <p>{col}</p>
                                                            </div>
                                                            {state[idx] !==
                                                                props
                                                                    .modelAnswer[
                                                                    idx
                                                                ] && (
                                                                <div>
                                                                    <p>
                                                                        正解：
                                                                        {
                                                                            props
                                                                                .optionContent[
                                                                                idx
                                                                            ][
                                                                                props
                                                                                    .modelAnswer[
                                                                                    idx
                                                                                ]
                                                                            ]
                                                                        }
                                                                    </p>
                                                                </div>
                                                            )}
                                                        </>
                                                    ) : null,
                                                )}
                                            </div>
                                        ),
                                    )}
                                </div>
                            ))}
                            <div className={styles.problemBtnWrap}>
                                <Button
                                    label="問題へ戻る"
                                    onClick={() => props.onClickBackPage()}
                                    backgroundColor="#FF7253"
                                    color="white"
                                />
                                <Button
                                    label="次の問題へ"
                                    // onClick={() => props.onClick()}
                                />
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}
