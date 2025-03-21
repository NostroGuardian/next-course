'use client';
import { SortEnum, SortProps } from './Sort.props';
import SortIcon from './sort.svg';
import styles from './Sort.module.css';
import cn from 'classnames';

export const Sort = ({ sort, setSort }: SortProps) => {
	return (
		<div className={styles.sort}>
			<span
				onClick={() => setSort(SortEnum.Rating)}
				className={cn({
					[styles.active]: sort == SortEnum.Rating,
				})}
			>
				<SortIcon className={styles.sortIcon} />
				По&nbsp;рейтингу
			</span>

			<span
				onClick={() => setSort(SortEnum.Price)}
				className={cn({
					[styles.active]: sort == SortEnum.Price,
				})}
			>
				<SortIcon className={styles.sortIcon} />
				По&nbsp;цене
			</span>
		</div>
	);
};
