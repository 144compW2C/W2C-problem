import { OptionsVO } from '@/models/entity/Options'
import { ProblemVO } from '@/models/entity/Problem'
import { TagsVO } from '@/models/entity/Tags'
import styles from './styles.module.css'
import Genre from '../Genre/Genre'
import { Button } from '@/stories/Button'

type Type = {
    Problem: ProblemVO.Type
    tags: TagsVO.Type[]
    option: OptionsVO.Type
    optionContent: string[][]
    optionName: string[]
    modelAnswer: number[]
}

export default function Problem(props: Type) {
    return (
        <>
            <div className={styles.title}>
                <h2 className={styles.h2}>{props.Problem.title}</h2>
            </div>
            <div className={styles.problemWrap}>
                <div className={styles.problemGenre}>
                    {props.tags.map((item) =>
                        item.id === props.Problem.fk_tags ? (
                            <Genre genreName={item.tag_name} />
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
                                        <div className={styles.choicesWrap}>
                                            {row.map((col, cIdx) => (
                                                <div key={cIdx}>
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            name={item}
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
                                // onClick={() => Action.backPage(dispatch)}
                            />
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
