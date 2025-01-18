'use client';
export default function Error({ error, reset }: { error: Error; reset: () => void }) {
	return (
		<>
			<div>что-то пошло не так</div>
			<div>{JSON.stringify(error)}</div>
			<button onClick={() => reset()}>попробовать еще раз</button>
		</>
	);
}
