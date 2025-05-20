"use client";
// NextJS

import { createContext } from "react";

interface AppInfo {
  userInfo: {
    name: string;
    age: number;
  };
}

export const AppInfoContext = createContext<AppInfo | null>(null);
