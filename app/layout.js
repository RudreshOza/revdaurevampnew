import Header from "./components/Header/Header";
import { TopHeader } from "./components/TopHeader/TopHeader";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "./components/Footer/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RevDau Industries",
  description: "RevDau Industries",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={inter.className + "bg-lightblue"}
        suppressHydrationWarning={true}
      >
        {/* <TopHeader /> */}
        <Header />
        {children}
      </body>
    </html>
  );
}
