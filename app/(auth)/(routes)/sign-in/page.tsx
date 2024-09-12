"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn, getCsrfToken } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [csrfToken, setCsrfToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchCsrfToken = async () => {
      const token = await getCsrfToken();
      setCsrfToken(token);
    };

    fetchCsrfToken();

    const errorParam = searchParams.get("error");
    if (errorParam) {
      handleError(errorParam);
    }
  }, [searchParams]);

  const handleError = (errorParam: string) => {
    switch (errorParam) {
      case "CredentialsSignin":
        setError("Credenciais inválidas. Verifique seus dados e tente novamente.");
        break;
      default:
        setError("Ocorreu um erro. Tente novamente.");
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); 

    try {
      const result = await signIn("credentials", {
        redirect: false, // Evita o redirecionamento automático
        email,
        password,
        csrfToken,
      });

      if (result?.error) {
        setError("Login falhou. Verifique suas credenciais.");
      } else {
        router.push("/dashboard");
      }
    } catch (err) {
      setError("Erro no servidor. Tente novamente mais tarde.");
    }
  };

  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-muted-foreground">
              Insira seu e-mail abaixo para acessar sua conta
            </p>
          </div>
          {csrfToken ? (
            <form onSubmit={handleLogin} className="grid gap-4" key={csrfToken}>
              <input type="hidden" name="csrfToken" value={csrfToken ?? ""} />
              <div className="grid gap-2">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="exemplo@dominio.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Senha</Label>
                  <Link
                    href="/forgot-password"
                    className="ml-auto inline-block text-sm underline"
                  >
                    Esqueceu sua senha?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {error && <p className="text-red-500">{error}</p>}
              <Button type="submit" className="w-full">
                Entrar
              </Button>
            </form>
          ) : (
            <p>Carregando...</p>
          )}
          <Button variant="outline" className="w-full">
            Entrar com Google
          </Button>
          <div className="mt-4 text-center text-sm">
            Não tem uma conta?{" "}
            <Link href="/sign-up" className="underline">
              Cadastre-se
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="/placeholder.svg"
          alt="Imagem"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
