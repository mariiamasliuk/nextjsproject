import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      <title>Test Page</title>
      </head>
      <body className={`${inter.className} antialiased`} role="main">{children}</body>
    </html>
  );
}
