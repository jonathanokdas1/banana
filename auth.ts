import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "E-mail", type: "text", placeholder: "exemplo@dominio.com" },
        password: { label: "Senha", type: "password" },
      },
      async authorize(credentials) {
        // Verificar se as credenciais estão presentes e são strings válidas
        if (
          typeof credentials?.email === "string" &&
          typeof credentials?.password === "string"
        ) {
          // Simulação de verificação de credenciais
          if (
            credentials.email === process.env.USER_EMAIL && // Verifica as credenciais do .env
            credentials.password === process.env.USER_PASSWORD // Verifica a senha do .env
          ) {
            return {
              id: "1",
              name: "Jonathan",
              email: credentials.email, // Email agora garantido como string
            };
          }
        }

        // Se as credenciais forem inválidas, retorna null
        return null;
      },
    }),
  ],
  secret: process.env.AUTH_SECRET, // Use a variável AUTH_SECRET corretamente definida no .env
});
