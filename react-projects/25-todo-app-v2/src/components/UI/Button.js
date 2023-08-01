import styles from './Button.module.css';

function Button(props) {
    const { children, disabled = false } = props;
    // здесь зписью {...props} мы переносим сюла все оатрибуты кроме тех что мы указывали заранее (а именно children, disabled)
    // это сделано для универсальности компонента Button
    return (
        <button className={styles.button}
            {...props}
            disabled={disabled}
        >{children}</button>
    );
};

export default Button;