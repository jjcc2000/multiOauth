"use client";
import { useState } from "react";

export default function PasswordInput() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="relative w-full">
      <input
        type={visible ? "text" : "password"}
        placeholder="Password"
        className="w-full px-4 py-2 border rounded-lg"
      />
      <span
        onClick={() => setVisible(!visible)}
        className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
      >
        {visible ? "🙈" : "👁️"}
      </span>
    </div>
  );
}
