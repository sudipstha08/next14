/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuthState } from "@/hooks";
import { signOut } from "@/utils";

export default function Home() {
	const { user } = useAuthState();
	const router = useRouter();

	return (
		<main className="flex  flex-col items-center justify-center p-24 h-[100vh]">
			<h2 className="text-2xl my-2">This is Home page</h2>
			<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 justify-center">
				<div className="flex justify-end px-4 pt-4">
					<button
						id="dropdownButton"
						data-dropdown-toggle="dropdown"
						className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
						type="button"
					>
						<span className="sr-only">Open dropdown</span>
						<svg
							className="w-5 h-5"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 16 3"
						>
							<path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
						</svg>
					</button>
				</div>
				<div className="flex flex-col items-center pb-10">
					<img
						className="w-24 h-24 mb-3 rounded-full shadow-lg"
						src={user?.photoURL as string}
						alt="Bonnie image"
					/>
					<h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
						{user?.displayName}
					</h5>
					<span className="text-sm text-gray-500 dark:text-gray-400">
						{user?.email}
					</span>
					<div className="flex mt-4 md:mt-6">
						<button
							onClick={() => {
								signOut();
								router.push("/login");
							}}
							className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						>
							Logout
						</button>
					</div>
					<Link className="underline" href={"/marketing"}>Go to Marketing</Link>
					<Link className="underline" href={"/team"}>Go to Team</Link>
				</div>
			</div>
		</main>
	);
}
