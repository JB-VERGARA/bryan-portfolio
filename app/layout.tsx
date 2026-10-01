import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "John Bryan Vergara",
  description: "Personal portfolio of John Bryan Vergara",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <Link href="/">Home</Link>{" "}
            <Link href="/about">About</Link>{" "}
            <Link href="/experience">Experience</Link>{" "}
            <Link href="/skills">Skills</Link>{" "}
            <Link href="/projects">Projects</Link>{" "}
            <Link href="/certifications">Certifications</Link>{" "}
            <Link href="/designs">Designs</Link>{" "}
            <Link href="/contact">Contact</Link>
          </nav>
        </header>

        <main>{children}</main>

        <footer>
          <p>© {new Date().getFullYear()} John Bryan Vergara</p>
        </footer>
      </body>
    </html>
  );
}