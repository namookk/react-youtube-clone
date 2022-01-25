import styles from './HomeFilter.module.css';

const filterArr = ['', 'BTS', 'LISA', '아이폰'];

function HomeFilter({clickfn, filter}){
    return (
        <div className={styles.container}>
            <ul className={styles.filterul}>
                {filterArr.map((value, idx) => {
                    return (
                        <li
                        key={`home-filter-${idx}`}
                        className={[styles.filterli, filter === value ? styles.focus : ''].join(' ')}
                        onClick={() => clickfn(value)}
                        >
                         {value == '' ? '전체' : value}
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default HomeFilter;

