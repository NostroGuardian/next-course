import { TextareaProps } from './Textarea.props';
import styles from './Textarea.module.css';

export const Textarea = ({ placeholder }: TextareaProps) => {
	return <textarea className={styles.input} placeholder={placeholder} />;
};
