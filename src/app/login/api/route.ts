import { auth, authProvider } from "@/lib";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export async function GET() {
	const data = await signInWithPopup(auth, authProvider).then((result) => {
		const credential = GoogleAuthProvider.credentialFromResult(result);
		const token = credential?.accessToken;
		const user = result.user;
	});
  console.log(":data",)
  return Response.json({ data })
}
