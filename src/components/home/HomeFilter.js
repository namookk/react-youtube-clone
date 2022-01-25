import styles from './HomeFilter.module.css';
import ExploreCard from "../explore/ExploreCard";
const filterArr = ['', 'BTS', 'LISA', '아이폰'];

function HomeFilter({clickfn}){
    return (
        <div className={styles.container}>
            <ul className={styles.filterul}>
                {filterArr.map((value, idx) => {
                    return (
                        <li
                        key={`home-filter-${idx}`}
                        className={styles.filterli}
                        onClick={clickfn(value)}
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

