import "next-auth";
import { UserType } from "@/generated/prisma";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      userType: "ADMIN" | "VOLUNTEER" | "BENEFICIARY";
    };
  }

  interface User {
    id: string;
    userType: UserType;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    userType: UserType;
  }
}