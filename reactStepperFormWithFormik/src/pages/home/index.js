import React from 'react'
import styles from 'styles/Home.module.css';

export default function Home() {
    return (
        <div className={styles.main}>
            <div id={styles["move"]}>
            <div id={styles["circle"]}><p>Home</p></div>
            <div id={styles["floatingTextBlock"]}>
                <h1>Home page using css style module</h1>
            </div>
            </div>
        </div>
    )
}
