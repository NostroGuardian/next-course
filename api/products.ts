import { API } from '@/app/api';
import { ProductModel } from '@/interfaces/product.interface';

export async function getProducts(
	category: string,
	limit: number
): Promise<ProductModel[] | null> {
	const res = await fetch(API.product.find, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ category, limit }),
	});
	if (!res.ok) {
		return null;
	}
	return res.json();
}
