import { TodoCard } from "@/components/TodoCard";
import React from "react";

async function getData() {
	const res = await fetch("https://jsonplaceholder.typicode.com/todos");

	// The return value is *not* serialized
	// You can return Date, Map, Set, etc.
	if (!res.ok) return undefined

	if (!res) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error("Failed to fetch data");
	}

	return res.json();
}

export default async function TeamsPage({
	params,
}: {
	params: { id: string };
}) {
	const todos = await getData();

	const handleClick = () => {

	}

	return (
		<section className="overflow-auto">
			{todos?.map((data: any) => {
				return (
					<TodoCard key={data.id} id={data.id} title={data.title}/>
				);
			})}
		</section>
	);
}
