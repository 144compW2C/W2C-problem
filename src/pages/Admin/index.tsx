import styles from './style.module.css'
import filterImg from '@/assets/filter.svg'
import sortImg from '@/assets/sort.svg'
import RoundedBtn from '@/components/Button/RoundedBtn/RoundedBtn'

export default function Admin() {
    return (
        <>
            <div className={styles.title}>
                <h2 className={styles.h2}>問題管理</h2>
            </div>
            <div className={styles.AdminWrap}>
                <div className={styles.filterContainerWrap}>
                    <div className={styles.AdminProblemBtnWrap}>
                        <RoundedBtn
                            label="問題一覧"
                            void={() => {}}
                            action={true}
                        />
                        <RoundedBtn
                            label="問題申請"
                            void={() => {}}
                            action={false}
                        />
                    </div>
                    <div className={styles.filterContainer}>
                        <div>
                            <img src={filterImg} alt="フィルターアイコン" />
                            <p>フィルター</p>
                        </div>
                        <div>
                            <img src={sortImg} alt="ソートアイコン" />
                            <p>並び替え</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
