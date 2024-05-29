import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest) {

  const __Ssn_stt = request.cookies.get("__Ssn_stt")?.value === "loggedIn";

  const signInUrl = new URL("/", request.url);
  const home = new URL("/home", request.url);

  if (!__Ssn_stt) {
    if (request.nextUrl.pathname === "/") {
      return NextResponse.next();
    }

    return NextResponse.redirect(signInUrl);
  }

  if (request.nextUrl.pathname === "/") {
    return NextResponse.redirect(home);
  }

  return NextResponse.next();
}

//Protect the routes
export const config = {
  matcher: [
    "/",
    "/home/:path*"
  ],
};
