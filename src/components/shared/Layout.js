import styles from './Layout.module.css';
import Header from './Header';
import Menu from './Menu';
import {useState} from "react";

function Layout({ children, activeMenu }) {
    const [showHideFl, setShowHideFl] = useState(true);
    function toggleMenu(){
        setShowHideFl(!showHideFl);
    }

    return(
        <div className={styles.container}>
            <Header clickfn={toggleMenu}/>
            <div className={styles.layout}>
                {showHideFl && <Menu activeMenu={activeMenu}/>}
                <div className={styles.contents}>{children}</div>
            </div>
        </div>
    )
}

export default Layout;