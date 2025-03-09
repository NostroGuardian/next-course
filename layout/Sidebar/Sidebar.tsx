import Menu from '../Menu/Menu';
import { SidebarProps } from './Sidebar.props';
import cn from 'classnames';
import styles from './Sidebar.module.css';
import Logo from '../logo.svg';

export const Sidebar = ({ className, ...props }: SidebarProps) => {
	return (
		<div className={cn(className, styles.sidebar)} {...props}>
			<Logo className={styles.logo} />
			<div>search</div>
			<Menu />
		</div>
	);
};
