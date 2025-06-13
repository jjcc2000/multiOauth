import { signIn, signOut } from "next-auth/react";

export const handleSignInGoogle = () => signIn("google");
export const handleSignOutGoogle = () => signOut();
