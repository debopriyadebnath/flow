import "./globals.css";


export const metadata = {
  title: "HERmony",
  description: "Find your rhythm. Live in HERmony.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
