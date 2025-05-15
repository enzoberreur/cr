import "next-auth";
import { UserType } from "@/generated/prisma";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      userType: "ADMIN" | "VOLUNTEER" | "BENEFICIARY";
      volunteer?: {
        firstName?: string;
        lastName?: string;
      };
    };
  }

  interface User {
    id: string;
    userType: UserType;
    volunteer?: {
      firstName?: string;
      lastName?: string;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    userType: UserType;
    volunteer?: {
      firstName?: string;
      lastName?: string;
    };
  }
}