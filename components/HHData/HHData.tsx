import { HHDataProps } from './HHData.props';
import styles from './HHData.module.css';
import { Card } from '../Card/Card';
import RateIcon from './rate.svg';
import { formatPriceRu } from '@/utils';

export const HHData = ({
	count,
	juniorSalary,
	middleSalary,
	seniorSalary,
}: Partial<HHDataProps>) => {
	return (
		<div className={styles.hh}>
			<Card className={styles.count}>
				<div className={styles.title}>Всего вакансий</div>
				<div className={styles.countValue}>{count}</div>
			</Card>
			<Card className={styles.salary}>
				<div>
					<div className={styles.title}>Начальный</div>
					<div className={styles.salaryValue}>
						{juniorSalary && formatPriceRu(juniorSalary)}
					</div>
					<div className={styles.rate}>
						<RateIcon className={styles.filled} />
						<RateIcon />
						<RateIcon />
					</div>
				</div>

				<div>
					<div className={styles.title}>Средний</div>
					<div className={styles.salaryValue}>
						{middleSalary && formatPriceRu(middleSalary)}
					</div>
					<div className={styles.rate}>
						<RateIcon className={styles.filled} />
						<RateIcon className={styles.filled} />
						<RateIcon />
					</div>
				</div>

				<div>
					<div className={styles.title}>Профессионал</div>
					<div className={styles.salaryValue}>
						{seniorSalary && formatPriceRu(seniorSalary)}
					</div>
					<div className={styles.rate}>
						<RateIcon className={styles.filled} />
						<RateIcon className={styles.filled} />
						<RateIcon className={styles.filled} />
					</div>
				</div>
			</Card>
		</div>
	);
};
