import { useState } from 'react';
import Card from '../../components/Card';
import styles from './MainPage.module.scss'
import axios from 'axios';

const MainPage = () => {
    const [search, setSearch] = useState("")
    const searchBook = (e)=>{
        if (e.key==="Enter"){
            console.log(search)
        }

    }

    return (
        <>
            <div className={styles.header}>
                <h1> Найди свою книгу </h1>
                <div className={styles.search}>
                    <input 
                    type="text" 
                    className={styles.searchInputs}
                        placeholder='Название книги' 
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        onKeyDown={searchBook}
                    />
                    <button>
                        <img src="../../../assets/imgs/search-svgrepo-com.svg" alt="" className={styles.searchIcon} />
                    </button>
                </div>
            </div>
            <div className={styles.catalog}>
                <Card />
            </div>
        </>

    );
};

export default MainPage;