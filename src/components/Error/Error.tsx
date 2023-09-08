import styles from './Error.module.scss';
import { useSelector } from 'react-redux';
import { IDefaultState } from '../../types/types';



const ErrorPage = () => {
    const storeState = useSelector(state => state) as IDefaultState
    if (storeState.errorCode < 400) {
        return (<></>)
    }
    return (
        <div className={styles.page}>
            <h3> Извините, произшла ошибка: {storeState.errorCode}</h3>
        </div>
    );


};

export default ErrorPage;