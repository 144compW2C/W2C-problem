import { OptionsVO } from '@/models/entity/Options'
import { ProblemVO } from '@/models/entity/Problem'
import { TagsVO } from '@/models/entity/Tags'
import styles from './styles.module.css'

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
            <div className={styles.problemWrap}></div>
        </>
    )
}
