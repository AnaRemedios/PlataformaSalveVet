// src/types/next-auth.d.ts
import "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string; // Adicione o campo id
      name: string;
      email: string;
      image?: string;
    };
  }
}
