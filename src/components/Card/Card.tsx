import { FC } from 'react';
import { IBook } from '../../types/types';
import styles from './Card.module.scss'

interface Book {
    book: IBook
}

const Card: FC<Book> = ({ book }) => {
    return (
        <>
            <div className={styles.card}>

                <img src={book?.volumeInfo?.imageLinks?.smallThumbnail ? book.volumeInfo.imageLinks.smallThumbnail : "../src/assets/imgs/withoutPhoto.jpg"}
                    alt="" className={styles.photo} />

                <div className={styles.text}>
                    {book.volumeInfo?.categories?.map((categories: string) => {
                        return (
                            <h3 className={styles.subtitle} key={categories}>
                                {categories}
                            </h3>
                        )
                    })}

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
        </>

    );
};

export default Card;