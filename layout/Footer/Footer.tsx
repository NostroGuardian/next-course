import { FooterProps } from './Footer.props';
import cn from 'classnames';
import styles from './Footer.module.css';

export const Footer = ({ className, ...props }: FooterProps) => {
	return (
		<footer className={cn(className, styles.footer)} {...props}>
			<div>OwlTop &copy; 2020 – {new Date().getFullYear()} Все права защищены</div>
			<a href="#" target="_blank">
				Пользовательское соглашение
			</a>
			<a href="#" target="_blank">
				Политика конфиденциальности
			</a>
		</footer>
	);
};
