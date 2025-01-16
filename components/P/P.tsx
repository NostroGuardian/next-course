import { PProps } from './P.props';
import cn from 'classnames';
import styles from './P.module.css';

export const P = ({ size = 'm', children }: PProps) => {
	return (
		<p
			className={cn(styles.p, {
				[styles.s]: size == 's',
				[styles.m]: size == 'm',
				[styles.l]: size == 'l',
			})}
		>
			{/* <p
			className={cn(styles.p, styles.[size]})}
		> */}
			{children}
		</p>
	);
};
