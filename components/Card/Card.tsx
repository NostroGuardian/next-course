import { CardProps } from './Card.props';
import cn from 'classnames';
import styles from './Card.module.css';

export const Card = ({ color = 'white', children, className }: CardProps) => {
	return (
		<div
			className={cn(styles.card, className, {
				[styles.blue]: color == 'blue',
			})}
		>
			{children}
		</div>
	);
};
