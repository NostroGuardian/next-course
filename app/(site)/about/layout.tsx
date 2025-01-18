export default async function AboutLayout({
	children,
	one,
	two,
}: Readonly<{
	children: React.ReactNode;
	one: React.ReactNode;
	two: React.ReactNode;
}>) {
	return (
		<div>
			<h1>ABOUT LAYOUT</h1>
			<hr />
			{children}
			{one}
			{two}
		</div>
	);
}
