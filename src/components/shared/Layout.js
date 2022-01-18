import styles from './Layout.module.css';
import Header from './Header';
import Menu from './Menu';
import {useState} from "react";

function Layout({ children }) {
    const [showHideFl, setShowHideFl] = useState(true);
    function toggleMenu(){
        setShowHideFl(!showHideFl);
    }

    return(
        <div className={styles.container}>
            <Header/>
            <div className={styles.layout}>
                {showHideFl && <Menu/>}
                <div className={styles.contents}>{children}
                    <button onClick={toggleMenu}>메뉴 보이기</button>
                </div>
            </div>
        </div>
    )
}

export default Layout;