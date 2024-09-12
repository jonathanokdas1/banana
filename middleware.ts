import { NextResponse } from 'next/server'; 
import type { NextRequest } from 'next/server'; 
import { auth } from '@/auth'; 

export default async function middleware(req: NextRequest) {
  const session = await auth();

  // Se não estiver autenticado e tentando acessar uma rota que não seja de login
  if (!session?.user && !req.nextUrl.pathname.startsWith("/sign-in")) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  return NextResponse.next();
}

// Protege todas as rotas, exceto _next (arquivos estáticos), API, e rotas como /sign-in
export const config = {
  matcher: [
    '/((?!_next|api|sign-in|public).*)', // Protege todas as rotas exceto sign-in, api, etc.
  ],
};
