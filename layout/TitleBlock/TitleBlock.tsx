'use client';
import { Htag } from '@/components/Htag/Htag';
import { Sort } from '@/components/Sort/Sort';
import { Tag } from '@/components/Tag/Tag';
import styles from '../../app/(site)/courses/[alias]/page.module.css';
import { useState } from 'react';
import { SortEnum } from '@/components/Sort/Sort.props';
import { ProductModel } from '@/interfaces/product.interface';

export const TitleBlock = ({
	title,
	productsCount,
	products,
}: {
	title: string;
	productsCount: number;
	products: ProductModel[];
}) => {
	const [sort, setSort] = useState<SortEnum>(SortEnum.Rating);

	const sortProducts = (sort: SortEnum) => {
		return products.sort((a, b) => {
			if (sort === SortEnum.Rating) {
				return a.initialRating - b.initialRating;
			} else {
				return a.price - b.price;
			}
		});
	};

	const sortedProducts = sortProducts(sort);

	return (
		<>
			<div className={styles.title}>
				<Htag tag="h1">{title}</Htag>
				<Tag color="gray" size="m">
					{productsCount}
				</Tag>
				<Sort sort={sort} setSort={setSort} />
			</div>

			<div>
				{sortedProducts && sortedProducts.map((p) => <div key={p._id}>{p.title}</div>)}
			</div>
		</>
	);
};
