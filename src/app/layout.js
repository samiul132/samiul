import "./globals.css";

export const metadata = {
  title: "Md Samiul Hasan — Full Stack Developer",
  description:
    "Portfolio of Md Samiul Hasan, Full Stack Developer specializing in Laravel, Vue.js, React, and Next.js.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}