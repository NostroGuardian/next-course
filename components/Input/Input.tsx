import { InputProps } from './Input.props';
import styles from './Input.module.css';

export const Input = ({ placeholder }: InputProps) => {
	return <input className={styles.input} placeholder={placeholder} />;
};
