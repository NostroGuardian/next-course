import { JSX } from 'react';
import { TopLevelCategory } from './page.interface';

export interface PageItem {
	alias: string;
	title: string;
	_id: string;
	category: string;
}

export interface MenuItem {
	_id: {
		secondCategory: string;
	};
	isOpened?: boolean;
	pages: PageItem[];
}

export interface FirstLevelMenuItem {
	route: string;
	name: string;
	icon: JSX.Element;
	id: TopLevelCategory;
}

export interface ClientMenuProps {
	menu: {
		_id: { secondCategory: string };
		pages: PageItem[];
		isOpened?: boolean;
	}[];
	firstCategory: TopLevelCategory;
	firstLevelMenu: FirstLevelMenuItem[];
}
