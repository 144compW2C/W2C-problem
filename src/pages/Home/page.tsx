import styles from './style.module.css'
import { useState } from 'react'

export default function Home() {
    const [filter, setFilter] = useState('stillAns')

    const tasks = [
        {
            id: 1,
            title: '見出し表示',
            category: 'HTML',
            level: '1-1',
            author: '上森拓翔',
            status: 'stillAns',
        },
        {
            id: 2,
            title: 'レイヤー弄り',
            category: 'Illustrator',
            level: '1-1',
            author: '平田晃大',
            status: 'alreadyAns',
        },
        {
            id: 3,
            title: 'モーダルウィンドウ',
            category: 'JavaScript',
            level: '1-1',
            author: '高木湊二郎',
            status: 'recommendTask',
        },
    ]

    // 選択中フィルターで絞り込み
    const filteredTasks = tasks.filter((task) =>
        filter === 'all' ? true : task.status === filter,
    )

    return (
        <>
            <div className={styles.content}>
                <h1>平田晃大</h1>
                <div className={styles.filterNav}>
                    <div className={styles.filterWrap}>
                        <select name="genre" id="genreFilter">
                            <option value="all">all</option>
                            <option value="HTML">HTML</option>
                            <option value="CSS">CSS</option>
                            <option value="JavaScript">JavaScript</option>
                            <option value="Illustrator">Illustrator</option>
                            <option value="Photoshop">Photoshop</option>
                            <option value="Figma">Figma</option>
                            <option value="色彩検定">色彩検定</option>
                        </select>
                        <h2>
                            0<span>問正解</span>
                        </h2>
                    </div>
                </div>
                <div className={styles.taskTable}>
                    <div className={styles.taskFilter}>
                        <input
                            type="radio"
                            name="taskFilter"
                            id="stillAns"
                            value="stillAns"
                            checked={filter === 'stillAns'}
                            onChange={(e) => setFilter(e.target.value)}
                        />
                        <label htmlFor="stillAns">解答途中</label>
                        <input
                            type="radio"
                            name="taskFilter"
                            id="alreadyAns"
                            value="alreadyAns"
                            checked={filter === 'alreadyAns'}
                            onChange={(e) => setFilter(e.target.value)}
                        />
                        <label htmlFor="alreadyAns">解答済み</label>
                        <input
                            type="radio"
                            name="taskFilter"
                            id="recommendTask"
                            value="recommendTask"
                            checked={filter === 'recommendTask'}
                            onChange={(e) => setFilter(e.target.value)}
                        />
                        <label htmlFor="recommendTask">推奨課題</label>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <td>タイトル</td>
                                <td>カテゴリー</td>
                                <td>レベル</td>
                                <td>作成者</td>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredTasks.map((task) => (
                                <tr key={task.id}>
                                    <td>{task.title}</td>
                                    <td>{task.category}</td>
                                    <td>{task.level}</td>
                                    <td>{task.author}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
