import React from "react";
async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Helloooo")
      resolve({ data: { message: "Hello" }})
    }, 3000)
  })
}


export default async function TeamsPage() {
	const teams = await getData()
	return (
		<section className="overflow-auto">
			<h1>Teams Page</h1>
		</section>
	);
}