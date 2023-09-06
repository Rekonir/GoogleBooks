import { useEffect, useState } from 'react';
import Card from '../../components/Card/Card.tsx';
import styles from './MainPage.module.scss'
import axios from 'axios';
import { API_KEY, cardPerPage } from '../../constants.ts'
import { IBook } from '../../types/types.ts';

const MainPage = () => {
    const [search, setSearch] = useState("")
    const [booksData, setBooksData] = useState<Array<IBook>>([])
    const [curentBook, setCurentBook] = useState(0)
    const [category, setCategory] = useState('all')
    const [sort, setSort] = useState('relevance')



    useEffect(() => {
        setCurentBook(booksData.length)
    }, [booksData])


    const nextBook = () => {
        const url = `https://www.googleapis.com/books/v1/volumes?q=${search}&key=${API_KEY}&maxResults=${cardPerPage}&startIndex=${curentBook}&orderBy${sort}`;
        axios
            .get(url)
            .then(res => setBooksData(booksData.concat(res.data.items)))
            // .then(res => console.log(booksData.concat(res.data)))

            .catch(err => console.log(err));
    };

    const fetchData = () => {
        setBooksData([])
        const url = `https://www.googleapis.com/books/v1/volumes?q=${search}&key=${API_KEY}&maxResults=${cardPerPage}&startIndex=0&orderBy${sort}`
        axios.get(url)
            .then(res => setBooksData(res.data.items))
            // .then(res => console.log(booksData.concat(res.data)))
            .catch(err => console.log(err))

    }
    const searchBook = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            fetchData()
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
                    <button className={styles.searchBtn} onClick={fetchData}>
                        <img src="../../src/assets/imgs/search-svgrepo-com.svg" alt="" className={styles.searchIcon} />
                    </button>
                </div>
                <select name="category" id="category" defaultValue={category} onChange={e => setCategory(e.target.value)}>
                    <option value="all"> Всё </option>
                    <option value="Art"> Арт</option>
                    <option value="Biography">Биография </option>
                    <option value="Computers">Компьютеры</option>
                    <option value="History"> История </option>
                    <option value="Medical"> Медицина </option>
                    <option value="Poetry"> Поэзия</option>
                </select>
                <select name="sort" id="sort" defaultValue={sort} onChange={e => setSort(e.target.value)}>
                    <option value="relevance">по релевантности </option>
                    <option value="newest">по новизне</option>
                </select>
            </div>
            <div className={styles.catalog}>
                {category !== 'all' ?
                    booksData.filter((book) => book?.volumeInfo?.categories?.includes(category)).map((book: IBook) => {
                        return (
                            <Card book={book} key={book.id} />
                        )
                    })
                    :
                    booksData.map((book: IBook) => {
                        return (
                            <Card book={book} key={book.id} />
                        )
                    })
                }
            </div>
            <button className={styles.more} onClick={nextBook}>
                <h3> Найти еще</h3>
            </button>
        </>

    );
};

export default MainPage;