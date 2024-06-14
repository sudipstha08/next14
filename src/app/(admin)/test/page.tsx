"use client";

import { useState } from "react";

export default function Test() {
	const [loading, setLoading] = useState(false);
	const fetchDataFromAPI = async () => {
		try {
			setLoading(true);
			const response = await fetch("/api/users", {
				headers: {
					Accept: "application/json",
					method: "GET",
				},
			});

      if(response) {
        const data = await response.json()
        console.log(data)
      }
		} catch (err) {
      console.error(err)
		} finally {
			setLoading(false);
		}
	};
	return (
		<div>
			<button onClick={fetchDataFromAPI} disabled={loading}>Fetch My API</button>
		</div>
	);
}
