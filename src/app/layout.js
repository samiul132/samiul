import "./globals.css";

export const metadata = {
  title: "Md Samiul Arfin — Full Stack Developer",
  description: "Portfolio of Md Samiul Arfin, Full Stack Developer specializing in Laravel, Vue.js, React, and Next.js.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}