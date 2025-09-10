import { useGenre } from '@/hooks/useGenre'
import styles from './style.module.css'

type Type = {
    genreName: string
}

export default function Genre(props: Type) {
    return (
        <>
            <p
                style={{ background: useGenre(props.genreName) }}
                className={styles.tags}
            >
                {props.genreName}
            </p>
        </>
    )
}
