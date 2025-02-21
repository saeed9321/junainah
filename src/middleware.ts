import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
	const token = request.cookies.get("authToken");
	const { pathname } = request.nextUrl;

	// Redirect to login if trying to access protected routes
	const protectedRoutes = ["/dashboard", "/cart/checkout"];
	if (protectedRoutes.some((route) => pathname.startsWith(route)) && !token) {
		return NextResponse.redirect(new URL("/login", request.url));
	}

	return NextResponse.next();
}
