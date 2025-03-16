import { Button, Input, Rating } from '@/components';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
	//... logic for computing
	return {
		title: 'CpmputedMeta',
	};
}

export default async function Home() {
	return (
		<>
			<Button appearance={'primary'} arrow="down">
				btn
			</Button>
			<Rating rating={3} isEditable />
			<Input placeholder="test" />
		</>
	);
}
