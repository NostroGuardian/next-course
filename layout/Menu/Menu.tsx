import { getMenu } from '@/api/menu';
import { FirstLevelMenuItem } from '@/interfaces/menu.interface';
import CoursesIcon from './icons/courses.svg';
import ServicesIcon from './icons/services.svg';
import BooksIcon from './icons/books.svg';
import ProductsIcon from './icons/products.svg';
import { TopLevelCategory } from '@/interfaces/page.interface';
import ClientMenu from './ClientMenu';

const firstLevelMenu: FirstLevelMenuItem[] = [
	{ route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses },
	{
		route: 'services',
		name: 'Сервисы',
		icon: <ServicesIcon />,
		id: TopLevelCategory.Services,
	},
	{ route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books },
	{
		route: 'products',
		name: 'Продукты',
		icon: <ProductsIcon />,
		id: TopLevelCategory.Products,
	},
];

export default async function Menu() {
	const firstCategory = TopLevelCategory.Courses;
	const menu = await getMenu(firstCategory);

	return (
		<ClientMenu
			menu={menu}
			firstCategory={firstCategory}
			firstLevelMenu={firstLevelMenu}
		/>
	);
}
