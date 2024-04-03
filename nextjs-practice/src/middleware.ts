// 2ways of middleware direction

import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    if(request.nextUrl.pathname === '/profile'){
        // return NextResponse.redirect(new URL("/Routing", request.url))
        return NextResponse.rewrite(new URL("/Routing", request.url))
    }

}

// export const config = {
//     matcher: '/profile'
// }

