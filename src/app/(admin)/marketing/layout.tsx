import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";

export const metadata: Metadata = {
	title: "My App",
	description: "Google signin implementation",
};

const JakartaSans = Plus_Jakarta_Sans({
	subsets: ["latin"],
	style: "normal",
	weight: ["300", "400", "500", "600", "700", "800"],
	preload: true,
	display: "swap",
	variable: "--font-jakarta-sans",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
				<div className="w-full h-screen flex flex-col  ">
					{children}
				</div>
	);
}
