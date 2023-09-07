import { FC, useEffect, useState } from 'react';
import styles from './selectorUI.module.scss';
import { useDispatch } from 'react-redux';

interface ISelector {
    type: 'sort' | 'category'
}

const SelectorUI: FC<ISelector> = ({ type }) => {

    const [sort, setSort] = useState('relevance')
    const [category, setCategory] = useState('all')
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({ type: "changeCategory", payload: category  })
    }, [category, dispatch])
    useEffect(() => {
        dispatch({ type: "changeSort", payload: sort })
    }, [sort, dispatch])
    switch (type) {
        case 'sort':
            return (
                <select name="sort" id="sort" defaultValue={sort} onChange={e => setSort(e.target.value)} className={styles.selector}>
                    <option value="relevance">по релевантности </option>
                    <option value="newest">по новизне</option>
                </select>
            )
        case 'category':
            return (
                <select name="category" id="category" defaultValue={category} onChange={e => setCategory(e.target.value)} className={styles.selector}>
                    <option value="all"> Всё </option>
                    <option value="Art"> Арт</option>
                    <option value="Biography">Биография </option>
                    <option value="Computers">Компьютеры</option>
                    <option value="History"> История </option>
                    <option value="Medical"> Медицина </option>
                    <option value="Poetry"> Поэзия</option>
                </select>
            )
        default:
            return (<></>)
    }

};

export default SelectorUI;