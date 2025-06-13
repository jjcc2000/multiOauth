"use client";
import { useSession } from "next-auth/react";
import { handleSignOutGoogle } from "../../lib/authGoogle";
import { useSearchParams } from "next/navigation";
import { signIn, signOut } from "next-auth/react";

export default function user() {
  const { data: session, status } = useSession();
  const searchParams = useSearchParams();
  const provider = searchParams.get("provider");

  
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">User Page</h1>
      {session ? (
        <div className="text-center">
          <p className="mb-2">Welcome, {session.user?.name}!</p>
          <p className="text-gray-500">{session.user?.email}</p>
          <button
            className="px-6 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            onClick={() => handleSignOutGoogle()}
          >
            Sign Out
          </button>
        </div>
      ) : (
        <p className="text-red-500">You are not logged in.</p>
      )}
    </div>
  );
}
