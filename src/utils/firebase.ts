import { auth } from "@/lib";

export async function signOut() {
	try {
		return auth.signOut();
	} catch (error) {
		console.error("Error signing out with Google", error);
	}
}
