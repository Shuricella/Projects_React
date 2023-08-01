import './Anna.css';
import styles from './Anna.module.css';

function Anna() {
    return (
        <div className={styles.info}>
            <h1>Hello from the Anna component</h1>
            <h2>Heading in Anna component</h2>
            <button className="my-button">Click me in the Anna component!</button>
            <button className={styles.myOtherButton}>Button with local CSS styles</button>
        </div>
    );
};

export default Anna;