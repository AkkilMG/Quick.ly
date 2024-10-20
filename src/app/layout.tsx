import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Quick.ly",
  description: "A application which shortens your long URLs",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`antialiased flex flex-col min-h-screen bg-no-repeat bg-cover bg-fixed`} 
        id="journal-scroll" style={{backgroundImage: `url('/assets/home.jpg')`}}> {/** backdrop-blur-sm */}
        <section className="flex-grow">
          <div>
              <Header />
          </div>
          {children}
          <footer className="text-blue-600 body-font flex flex-col items-center justify-center">
            <Footer />
          </footer>
        </section>
      </body>
    </html>
  );
}
