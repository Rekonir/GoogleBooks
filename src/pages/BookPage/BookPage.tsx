import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { IBook } from '../../types/types';
import { API_KEY } from '../../constants';
import styles from './BookPage.module.scss'
import BtnUI from '../../components/UI/btn/btnUI';

const BookPage = () => {
    const { id } = useParams()
    const [book, setBook] = useState<IBook | null>(null)
    useEffect(() => {
        if (id) {
            const url = `https://www.googleapis.com/books/v1/volumes/${id}?key=${API_KEY}`
            axios
                .get(url)
                .then(res => setBook(res.data))
                .catch(err => {
                    console.log(err);
                });
        }
    }, [])
    return (
        <div className={styles.page}>
            <div className={styles.bookInfo}>
                <img src={book?.volumeInfo?.imageLinks?.smallThumbnail ? book.volumeInfo.imageLinks.smallThumbnail : "../public/assets/imgs/withoutPhoto.jpg"}
                    alt="" className={styles.photo} />
                <div className={styles.content}>
                    <h2 className={styles.title}>
                        {book?.volumeInfo?.title}
                    </h2>
                    {book?.volumeInfo?.authors?.map((author: string) => {
                        return (
                            <h3 className={styles.subtitle} key={author}>
                                {author}
                            </h3>
                        )
                    })}
                    {book?.volumeInfo?.categories ? book.volumeInfo.categories.map((categories: string) => {
                        return (
                            <h3 className={styles.subtitle} key={categories}>
                                {categories}
                            </h3>
                        )
                    }) : <br />}
                    <p>
                        {book?.volumeInfo?.description}
                    </p>
                </div>
            </div>
            <Link to="/">
                <BtnUI>
                    <h3>На главную</h3>
                </BtnUI>
            </Link>
        </div>

    );
};

export default BookPage;