// @ts-expect-error CSS module declaration is provided by Next.js runtime.
import "./globals.css";

import { AuthProvider } from "@/contexts/AuthContext";

export const metadata = {
  title: "HERmony",
  description: "Find your rhythm. Live in HERmony.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}