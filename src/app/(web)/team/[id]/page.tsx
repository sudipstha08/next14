/* eslint-disable @next/next/no-img-element */
import { redirect } from "next/navigation";

async function fetchTeam(id: string) {
	const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
	if (!res.ok) return undefined;
	return res.json();
}

export default async function Profile({ params }: { params: { id: string } }) {
	const team = await fetchTeam(params.id);
	if (!team) {
		redirect("/login");
	}

	return (
		<div className="max-w-sm rounded overflow-hidden shadow-lg">
			<img
				className=""
				src="https://picsum.photos/200/300"
				alt="Sunset in the mountains"
				height={200}
			/>
			<div className="px-6 py-4">
				<div className="font-bold text-xl mb-2">ID: {team.id}</div>
				<p className="text-gray-700 text-base">{team.title}</p>
			</div>
			<div className="px-6 pt-4 pb-2">
				<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
					#photography
				</span>
				<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
					#travel
				</span>
				<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
					#winter
				</span>
			</div>
		</div>
	);
}
