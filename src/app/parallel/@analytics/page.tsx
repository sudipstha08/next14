import React from "react";

async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: { message: "Hello" }})
    }, 3000)
  })
}

export default async function AnalyticsPage() {
  const data = await getData()
	return (
		<section className="overflow-auto">
			<h1>Analytics Page</h1>
		</section>
	);
}