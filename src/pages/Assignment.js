import Layout from "../components/shared/Layout";
import styles from "./Assignment.module.css";

function Assignment({flag, onclickfn}) {
    return (
        <Layout>
            <div>
                <div className={[styles.box, flag ? styles.trueBox : styles.falseBox].join(' ')}>
                    {flag ? 'true' : 'false'}에요.</div>
                <button onClick={onclickfn}>색상 바꾸기!</button>
            </div>
        </Layout>
    )
}

export default Assignment;