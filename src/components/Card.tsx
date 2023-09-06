import styles from './Card/Card.module.scss'


const Card = () => {
    return (
        <>
            <div className={styles.card}>
                <img src="../assets/imgs/withoutPhoto.jpg" alt="" className={styles.photo} />
                <div className={styles.text}>
                    <h3 className={styles.title}>
                        No-name
                    </h3>
                </div>

            </div>
        </>

    );
};

export default Card;