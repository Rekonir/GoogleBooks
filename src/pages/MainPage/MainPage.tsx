import { useState } from 'react';
import Card from '../../components/Card';
import styles from './MainPage.module.scss'
import axios from 'axios';
import { API_KEY } from '../../constants.ts'
import { IBook } from '../../types/types.ts';

const MainPage = () => {
    const [search, setSearch] = useState("")
    const [booksData, setBooksData] = useState([])
    const searchBook = (e: React.KeyboardEvent) => {
        const url = `https://www.googleapis.com/books/v1/volumes?q=${search}&key=${API_KEY}`
        if (e.key === "Enter") {
            axios.get(url)
                .then(res => setBooksData(res.data.items))
                // .then(res=>console.log(res.data.items))
                .catch(err => console.log(err))
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
                        <img src="../../src/assets/imgs/search-svgrepo-com.svg" alt="" className={styles.searchIcon} />
                    </button>
                </div>
            </div>
            <div className={styles.catalog}>
                {booksData.map((book:IBook) => {
                    return (
                        <Card book={book} key={book.id}/>
                    )
                })
                }
            </div>
        </>

    );
};

export default MainPage;