import type { Metadata } from "next";
import "./../globals.css";

export const metadata: Metadata = {
	title: "My App",
	description: "Google signin implementation",
};

export default function RootLayout({
	children,
	team,
  analytics,
}: Readonly<{
	children: React.ReactNode;
	analytics: React.ReactNode
  team: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body>
				<main className="w-full h-screen flex flex-col  ">
					{children}
					{team}
					{analytics}
				</main>
			</body>
		</html>
	);
}
