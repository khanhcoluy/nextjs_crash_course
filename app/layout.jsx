import './globals.css';

export const metadata = {
  title: 'Next app',
  description: 'Web development',
  keyword: 'next app, nextjs, web development, nextapp',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}