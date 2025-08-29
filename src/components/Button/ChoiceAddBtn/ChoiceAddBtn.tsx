import styles from './styles.module.css'

type Type = {
    void: () => void
}

export default function ChoiceAddBtn(props: Type) {
    return (
        <>
            <button className={styles.Btn} onClick={props.void}></button>
        </>
    )
}
