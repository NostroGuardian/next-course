import { API } from '@/app/api';
import { TopPageModel } from '@/interfaces/page.interface';

export async function getPage(alias: string): Promise<TopPageModel | null> {
	throw new Error('err');
	await new Promise((res) =>
		setTimeout(() => {
			res('');
		}, 3000)
	);
	const res = await fetch(API.topPage.byAlias + alias + '/123123', {
		next: { revalidate: 10 },
	});
	if (!res.ok) {
		return null;
	}
	console.log('revalidating getPage');
	return res.json();
}
