import { FC } from 'react';
import { IBook, IDefaultState } from '../../types/types';
import Card from '../Card/Card';
import styles from './Catalog.module.scss';
import { useSelector } from 'react-redux';
interface ICatalog {
    booksData: Array<IBook>
}

const Catalog: FC<ICatalog> = ({ booksData }) => {

    const storeState = useSelector(state => state) as IDefaultState
    return (
        <div className={styles.catalog}>
                {storeState.category !== 'all' ?
                    booksData.filter((book) => book?.volumeInfo?.categories?.includes(storeState.category)).map((book: IBook) => {
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
    );
};

export default Catalog;