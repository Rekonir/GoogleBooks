import { FC, ReactNode } from 'react';
import styles from './btnUI.module.scss'


interface ButtonProps {
    children: ReactNode;
    onClick?: (...args: unknown[]) => void
}

const BtnUI: FC<ButtonProps> = ({ children, onClick }) => {
    return (
        <button className={styles.btn} onClick={onClick}>
            {children}
        </button>
    );
};

export default BtnUI;