import styles from './style.module.css'
import filterImg from '@/assets/filter.svg'
import sortImg from '@/assets/sort.svg'
import arrow from '@/assets/arrow.svg'
import { useState } from 'react'

export default function Problems() {
    const [state, setState] = useState({
        front: false,
        HTML: false,
        CSS: false,
        JS: false,
        design: false,
        Figma: false,
        Illustrator: false,
        Photoshop: false,
    })
    return (
        <>
            <div className={styles.title}>
                <h2 className={styles.h2}>問題集</h2>
            </div>
            <div className={styles.problemsWrap}>
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
                <div className={styles.problemsTableWrap}>
                    <div className={styles.problemHeader}>
                        <div>
                            <p>正誤</p>
                        </div>
                        <div>
                            <p>タイトル</p>
                        </div>
                        <div>
                            <p>ジャンル</p>
                        </div>
                        <div>
                            <p>レベル</p>
                        </div>
                        <div>
                            <p>作成者</p>
                        </div>
                    </div>
                    <div className={styles.problemsTable}>
                        <div className={styles.problemsGenreWrap}>
                            <div
                                className={styles.problemsCategory}
                                onClick={() =>
                                    setState((prev) => ({
                                        ...prev,
                                        front: !prev.front,
                                    }))
                                }
                            >
                                <img
                                    src={arrow}
                                    alt="矢印のアイコン"
                                    style={{
                                        transform: !state.front
                                            ? 'rotate(-90deg)'
                                            : 'rotate(0deg)',
                                    }}
                                />
                                <p>フロントエンド</p>
                            </div>
                            {state.front && (
                                <div className={styles.problemsGenre}>
                                    <div
                                        onClick={() =>
                                            setState((prev) => ({
                                                ...prev,
                                                HTML: !prev.HTML,
                                            }))
                                        }
                                    >
                                        <img
                                            src={arrow}
                                            alt="矢印のアイコン"
                                            style={{
                                                transform: !state.HTML
                                                    ? 'rotate(-90deg)'
                                                    : 'rotate(0deg)',
                                            }}
                                        />
                                        <p>HTML</p>
                                    </div>
                                    {state.HTML && (
                                        <>
                                            <div
                                                className={
                                                    styles.problemsTableRow
                                                }
                                            >
                                                <div>
                                                    <p>正誤</p>
                                                </div>
                                                <div>
                                                    <p>タイトル</p>
                                                </div>
                                                <div>
                                                    <p>ジャンル</p>
                                                </div>
                                                <div>
                                                    <p>レベル</p>
                                                </div>
                                                <div>
                                                    <p>作成者</p>
                                                </div>
                                            </div>
                                            <div
                                                className={
                                                    styles.problemsTableRow
                                                }
                                            >
                                                <div>
                                                    <p>正誤</p>
                                                </div>
                                                <div>
                                                    <p>タイトル</p>
                                                </div>
                                                <div>
                                                    <p>ジャンル</p>
                                                </div>
                                                <div>
                                                    <p>レベル</p>
                                                </div>
                                                <div>
                                                    <p>作成者</p>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                    <div>
                                        <img src={arrow} alt="矢印のアイコン" />
                                        <p>CSS</p>
                                    </div>
                                    <div>
                                        <img src={arrow} alt="矢印のアイコン" />
                                        <p>JavaScript</p>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className={styles.problemsGenreWrap}>
                            <div
                                className={styles.problemsCategory}
                                onClick={() =>
                                    setState((prev) => ({
                                        ...prev,
                                        design: !prev.design,
                                    }))
                                }
                            >
                                <img
                                    src={arrow}
                                    alt="矢印のアイコン"
                                    style={{
                                        transform: !state.design
                                            ? 'rotate(-90deg)'
                                            : 'rotate(0deg)',
                                    }}
                                />
                                <p>デザイン</p>
                            </div>
                            {state.design && (
                                <div className={styles.problemsGenre}>
                                    <div>
                                        <img src={arrow} alt="矢印のアイコン" />
                                        <p>Figma</p>
                                    </div>
                                    <div>
                                        <img src={arrow} alt="矢印のアイコン" />
                                        <p>Illustrator</p>
                                    </div>
                                    <div>
                                        <img src={arrow} alt="矢印のアイコン" />
                                        <p>Photoshop</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
