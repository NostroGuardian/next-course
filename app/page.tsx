import { Button } from '@/components';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
	//... logic for computing
	return {
		title: 'CpmputedMeta',
	};
}

export default function Home() {
	return (
		<>
			<Button appearance={'primary'} arrow="down">
				btn
			</Button>
		</>
	);
}
