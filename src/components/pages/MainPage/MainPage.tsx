import React from 'react';
import styles from './MainPage.module.scss'

const MainPage = () => {
    return (
        <div className={styles.header}>
            <div className={styles.row1}>
                <h1></h1>
            </div>
            <div className={styles.row2}>
                <h2> Найди свою книгу </h2>
                <div className={styles.search}>
                    <input type="text" className={styles.searchInputs} placeholder='Название книги' />
                </div>
            </div>
        </div>
    );
};

export default MainPage;