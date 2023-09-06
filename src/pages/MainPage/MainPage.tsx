import { useEffect, useState } from 'react';
import Card from '../../components/Card/Card.tsx';
import styles from './MainPage.module.scss'
import axios from 'axios';
import { API_KEY, cardPerPage } from '../../constants.ts'
import { IBook } from '../../types/types.ts';

const MainPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [search, setSearch] = useState("")
    const [booksData, setBooksData] = useState<Array<IBook>>([])
    const [curentBook, setCurentBook] = useState(0)
    const [category, setCategory] = useState('all')
    const [totalBook, setTotalBook] = useState(0)
    const [sort, setSort] = useState('relevance')



    useEffect(() => {
        setCurentBook(booksData.length)
    }, [booksData])

    const sortFetch = (sort: string) => {
        setSort(sort)
        fetchData()
    }
    const nextBook = () => {
        setIsLoading(true); // Устанавливаем состояние загрузки в true
        const url = `https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=${cardPerPage}&startIndex=${curentBook}&orderBy=${sort}&key=${API_KEY}`;
        axios
            .get(url)
            .then(res => {
                setBooksData(booksData.concat(res.data.items));
                setIsLoading(false); // Устанавливаем состояние загрузки в false после получения данных
            })
            .catch(err => {
                console.log(err);
                setIsLoading(false); // Устанавливаем состояние загрузки в false в случае ошибки
            });
    };

    const fetchData = () => {
        setBooksData([])
        setIsLoading(true);
        const url = `https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=${cardPerPage}&startIndex=0&orderBy=${sort}&key=${API_KEY}`
        axios.get(url)
            .then(res => {
                setTotalBook(res.data.totalItems),
                    setBooksData(res.data.items),
                    setIsLoading(false)
            })
            // .then(res => console.log(booksData.concat(res.data)))
            .catch(err => {
                console.log(err),
                    setIsLoading(false)
            })

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
                <select name="sort" id="sort" defaultValue={sort} onChange={e => sortFetch(e.target.value)}>
                    <option value="relevance">по релевантности </option>
                    <option value="newest">по новизне</option>
                </select>
            </div>
            {isLoading && (
                <div className={styles.loading}>
                    <span>Loading...</span>
                </div>
            )}
            {!isLoading && (
                <h2>
                    Найдено: {totalBook}
                </h2>
            )}

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
            {!isLoading && (
                <button className={styles.more} onClick={nextBook}>
                    <h3> Найти еще</h3>
                </button>
            )}

        </>

    );
};

export default MainPage;