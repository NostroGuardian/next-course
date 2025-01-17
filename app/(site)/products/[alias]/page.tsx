import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Products',
};

export default function PageProducts({ params }: { params: { alias: string } }) {
	return <div>{params.alias}</div>;
}
