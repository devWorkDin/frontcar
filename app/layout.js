import { Inter } from "next/font/google";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Footer from "@components/Footer";
import Nav from "@components/Nav";

const inter = Inter({ subsets: ["latin"] });
const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={urbanist.className}  style={{
        backgroundColor: "black",
      }}>
        <Nav/>
        {children}
        <Footer/>

        
        </body>
    </html>
  );
}
