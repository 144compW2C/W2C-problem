import styles from './style.module.css'

type Type = {
    label: string
    void: () => void
    action: boolean
}

export default function RoundedBtn(props: Type) {
    return (
        <>
            <div className={styles.btnWrap}>
                <button
                    onClick={() => props.void()}
                    className={`${styles.btn} ${props.action ? styles.active : styles.inactive}`}
                >
                    {props.label}
                </button>
            </div>
        </>
    )
}
