import { useEffect, useState } from 'react';
import styles from './MainPage.module.scss'
import axios from 'axios';
import { API_KEY, cardPerPage } from '../../constants.ts'
import { IBook, IDefaultState } from '../../types/types.ts';
import Loading from '../../components/Loading/Loading.tsx';
import Catalog from '../../components/Catalog/Catalog.tsx';
import SelectorUI from '../../components/UI/selector/SelectorUI.tsx';
import { useSelector } from 'react-redux';
import BtnUI from '../../components/UI/btn/btnUI.tsx';

const MainPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [search, setSearch] = useState("")
    const [booksData, setBooksData] = useState<Array<IBook>>([])
    const [curentBook, setCurentBook] = useState(0)
    const [totalBook, setTotalBook] = useState(0)
    const storeState = useSelector(state => state) as IDefaultState

    useEffect(() => {
        setCurentBook(booksData.length)
    }, [booksData])

    const nextBook = () => {
        setIsLoading(true);
        const url = `https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=${cardPerPage}&startIndex=${curentBook}&orderBy=${storeState.sort}&key=${API_KEY}`;
        axios
            .get(url)
            .then(res => {
                setBooksData(booksData.concat(res.data.items));
                setIsLoading(false);
            })
            .catch(err => {
                console.log(err);
                setIsLoading(false);
            });
    };

    const fetchData = () => {
        setBooksData([])
        setIsLoading(true);
        const url = `https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=${cardPerPage}&startIndex=0&orderBy=${storeState.sort}&key=${API_KEY}`
        axios.get(url)
            .then(res => {
                setTotalBook(res.data.totalItems),
                    setBooksData(res.data.items),
                    setIsLoading(false)
            })
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
                <SelectorUI type={'sort'} />
                <SelectorUI type={'category'} />
            </div>
            {isLoading && (
                <Loading />
            )}
            {!isLoading && totalBook > 0 && (
                <div className={styles.container}>
                    <h2>
                        Найдено: {totalBook}
                    </h2>
                    <Catalog booksData={booksData} />

                    <BtnUI onClick={nextBook}>
                        <h3> Найти еще</h3>
                    </BtnUI>

                </div>
            )}


        </>

    );
};

export default MainPage;