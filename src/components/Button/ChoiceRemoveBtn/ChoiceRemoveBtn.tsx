import styles from './style.module.css'

type Type = {
    void: () => void
}

export default function ChoiceRemoveBtn(props: Type) {
    return (
        <>
            <button className={styles.Btn} onClick={props.void}></button>
        </>
    )
}
