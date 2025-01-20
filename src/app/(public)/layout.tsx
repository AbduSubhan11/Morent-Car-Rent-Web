import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { WishProvider } from "@/Context/wishlistContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <WishProvider>
          <Header />
          {children}
          <Footer />
        </WishProvider>
      </body>
    </html>
  );
}
