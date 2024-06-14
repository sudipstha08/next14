import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

// Limit the middleware to paths starting with `/api/`
export const config = {
	matcher: "/parallel",
};

const isAuthenticated = () => {
	return false;
};

export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
 
  // GET /_next/data/build-id/hello.json
 
  console.log("pathname ===========> ",pathname)
	// Call our authentication function to check the request
	if (isAuthenticated()) {
		// Respond with JSON indicating an error message
    return NextResponse.redirect(request.nextUrl)
		// return Response.json(
		// 	{ success: false, message: "authentication failed" },
		// 	{ status: 401 }
		// );
	}
}
