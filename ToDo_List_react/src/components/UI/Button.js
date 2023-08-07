import styles from './Button.module.css';

function Button(props) {
    const { children, disabled = false } = props;
    // {...props} переносится все атрибуты кроме тех что передавались заранее (а именно children, disabled)
    // необходимо для универсальности компонента Button
    return (
        <button className={styles.button}
            {...props}
            disabled={disabled}
        >{children}</button>
    );
};

export default Button;