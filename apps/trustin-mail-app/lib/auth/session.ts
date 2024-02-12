import { NextRequest } from "next/server";

export function getSession(request: NextRequest) {
    const cookieSession = request.cookies.get('session');
}