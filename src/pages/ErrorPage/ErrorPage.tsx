import { Link } from 'react-router-dom';
import BtnUI from '../../components/UI/btn/btnUI';
import styles from './ErrorPage.module.scss';
import { FC } from 'react';

interface IErrorProps{
    err: number
}

const ErrorPage:FC<IErrorProps> = ({err}) => {
    return (
        <div className={styles.page}>
            <h3> Извините, произшла ошибка: {err}</h3>
            <Link to='/'>
                <BtnUI> На главную</BtnUI>
            </Link>
        </div>
    );
};

export default ErrorPage;