import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FinanceFlow AI",
  description: "Your friendly AI-powered money assistant",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* NAVBAR */}
        <nav className="w-full border-b py-4 px-6 flex justify-between items-center">
          <a href="/" className="text-xl font-semibold">
            FinanceFlow AI
          </a>

          <div className="flex items-center gap-6">
            <a href="/dashboard" className="hover:underline">
              Dashboard
            </a>

            <a href="/snapshot/new" className="hover:underline">
              New Snapshot
            </a>

            <a href="/login" className="hover:underline">
              Login
            </a>

            <a
              href="/signup"
              className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
            >
              Sign Up
            </a>
          </div>
        </nav>

        {/* MAIN CONTENT */}
        <main className="max-w-4xl mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
