import { FC } from 'react';
import { IBook } from '../../types/types';
import styles from './Card.module.scss'
import { Link } from 'react-router-dom';

interface Book {
    book: IBook
}

const Card: FC<Book> = ({ book }) => {
    return (
        <>
            <Link to={`/book/${book.id}`}>
                <div className={styles.card}>
                    <img src={book?.volumeInfo?.imageLinks?.smallThumbnail ? book.volumeInfo.imageLinks.smallThumbnail : "../../assets/imgs/withoutPhoto.jpg"}
                        alt="" className={styles.photo} />
                    <div className={styles.text}>
                        <h3 className={styles.subtitle}>
                            {book?.volumeInfo?.categories ? book.volumeInfo.categories[0] : <br />}
                        </h3>
                        <h2 className={styles.title}>
                            {book.volumeInfo?.title}
                        </h2>
                        {book?.volumeInfo?.authors?.map((author: string) => {
                            return (
                                <h3 className={styles.subtitle} key={author}>
                                    {author}
                                </h3>
                            )
                        })}
                    </div>
                </div>
            </Link>
        </>

    );
};

export default Card;