import { getMenu } from '@/api/menu';
import { getPage } from '@/api/page';
import { getProducts } from '@/api/products';
import { Advantages, HHData, Htag, Tag } from '@/components';
import { notFound } from 'next/navigation';
import { TopLevelCategory } from '@/interfaces/page.interface';
import { TitleBlock } from '@/layout';
import styles from './page.module.css';

export async function generateStaticParams() {
	const menu = await getMenu(0);
	return menu.flatMap((item) => item.pages.map((page) => ({ alias: page.alias })));
}

export default async function PageProducts({ params }: { params: { alias: string } }) {
	const page = await getPage(params.alias);
	if (!page) {
		notFound();
	}
	const products = await getProducts(page.category, 10);

	return (
		<div className={styles.wrapper}>
			<TitleBlock
				title={page.title}
				productsCount={products?.length || 0}
				products={products || []}
			/>

			<div className={styles.hhTitle}>
				<Htag tag="h2">Вакансии - {page.category}</Htag>
				<Tag color="red" size="m">
					hh.ru
				</Tag>
			</div>

			{page.firstCategory == TopLevelCategory.Courses && <HHData {...page.hh} />}

			{page.advantages && page.advantages.length > 0 && (
				<>
					<Htag tag="h2">Преимущества</Htag>
					<Advantages advantages={page.advantages} />
				</>
			)}

			{page.seoText && (
				<div
					className={styles.seo}
					dangerouslySetInnerHTML={{ __html: page.seoText }}
				/>
			)}

			<Htag tag="h2">Получаемые навыки</Htag>
			{page.tags.map((t) => (
				<Tag key={t} color="primary">
					{t}
				</Tag>
			))}
		</div>
	);
}
