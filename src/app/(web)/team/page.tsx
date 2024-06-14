import React, { useState } from "react";

async function getData() {
	const res = await fetch("https://jsonplaceholder.typicode.com/todos");

	// The return value is *not* serialized
	// You can return Date, Map, Set, etc.

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

	return (
		<section className="overflow-auto">
			{todos?.map((data: any) => {
				return (
					<div key={data.id} className="bg-slate-800 p-2">
						<span className="pr-3">{data.id}</span>
						<span>{data.title}</span>
					</div>
				);
			})}
		</section>
	);
}
