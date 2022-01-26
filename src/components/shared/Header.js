import styles from './Header.module.css';
import youtube_logo from '../../data/youtube_logo.png';
import { FiMenu } from 'react-icons/fi';
import { IoSearchOutline } from 'react-icons/io5';
import { BsGrid3X3Gap } from 'react-icons/bs';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import {useState} from "react";

function Header({clickfn}) {

    const [searchKey, setSearchKey] = useState('');
    function search(){
        console.log(searchKey);
        setSearchKey('');
    }

    return (
        <div className={styles.header}>
            <div className={styles.tab}>
                <FiMenu className={styles.icon} onClick={clickfn} />
                <img src={youtube_logo} alt="로고" className={styles.logo} />
            </div>
            <div className={styles['center-tab']}>
                <input
                    className={styles.input}
                    onChange={(event) => {
                        setSearchKey(event.target.value);
                    }}
                    value={searchKey}
                    onKeyUp={(e) => {
                        if(e.keyCode == 13){
                            search();
                        }
                    }}
                />
                <IoSearchOutline className={styles['search-icon']}
                    onClick={search}
                />
            </div>
            <div className={styles.tab}>
                <BsGrid3X3Gap className={styles.icon} />
                <HiOutlineDotsVertical className={styles.icon} />
            </div>
        </div>
    )
}

export default Header;