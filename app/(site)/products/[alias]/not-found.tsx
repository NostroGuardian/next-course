'use client';
export default function NotFoundError({ error }: { error: Error }) {
	return (
		<>
			<div>страница не найдена</div>
			<div>{JSON.stringify(error)}</div>
		</>
	);
}
