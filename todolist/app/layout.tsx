import "./globals.css";
import { TodoProvider } from "@/src/contexts/TodoContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TodoProvider>{children}</TodoProvider>
      </body>
    </html>
  );
}
