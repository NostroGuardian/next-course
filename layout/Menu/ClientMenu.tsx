'use client';
import { ClientMenuProps, PageItem } from '@/interfaces/menu.interface';
import { TopLevelCategory } from '@/interfaces/page.interface';
import styles from './Menu.module.css';
import cn from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function ClientMenu({
	menu: InitialMenu,
	firstCategory,
	firstLevelMenu,
}: ClientMenuProps) {
	const pathname = usePathname();
	const [menu, setMenu] = useState(InitialMenu);

	const openSecondLevel = (secondCategory: string) => {
		setMenu(
			menu.map((m) => {
				if (m._id.secondCategory == secondCategory) {
					m.isOpened = !m.isOpened;
				}
				return m;
			})
		);
	};

	const buildFirstLevel = (firstCategory: TopLevelCategory) => {
		return (
			<>
				{firstLevelMenu.map((menuItem) => (
					<div key={menuItem.route}>
						<Link href={`/${menuItem.route}`}>
							<div
								className={cn(styles.firstLevel, {
									[styles.firstLevelActive]: menuItem.id === firstCategory,
								})}
							>
								{menuItem.icon}
								<span>{menuItem.name}</span>
							</div>
						</Link>
						{menuItem.id == firstCategory && buildSecondLevel(menuItem.route)}
					</div>
				))}
			</>
		);
	};

	const buildSecondLevel = (menuItemRoute: string) => {
		return (
			<div className={styles.secondBlock}>
				{menu.map((menuItem) => {
					if (menuItem.pages.map((p) => p.alias).includes(pathname.split('/')[2])) {
						menuItem.isOpened = true;
					}
					return (
						<div key={menuItem._id.secondCategory}>
							<div
								className={styles.secondLevel}
								onClick={() => openSecondLevel(menuItem._id.secondCategory)}
							>
								{menuItem._id.secondCategory}
							</div>
							<div
								className={cn(styles.secondLevelBlock, {
									[styles.secondLevelBlockOpen]: menuItem.isOpened,
								})}
							>
								{buildThirdLevel(menuItem.pages, menuItemRoute)}
							</div>
						</div>
					);
				})}
			</div>
		);
	};

	const buildThirdLevel = (pages: PageItem[], route: string) => {
		return (
			<>
				{pages.map((page) => (
					<Link
						key={page._id}
						href={`/${route}/${page.alias}`}
						className={cn(styles.thirdLevel, {
							[styles.thirdLevelActive]: `/${route}/${page.alias}` == pathname,
						})}
					>
						{page.category}
					</Link>
				))}
			</>
		);
	};

	return <div className={styles.menu}>{buildFirstLevel(firstCategory)}</div>;
}
