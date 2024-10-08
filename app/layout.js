import "../app/globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { CountriesProvider } from "./CountriesContext";

//Ordnar HEAD delen
export const metadata = {
  title: "Lära Länder",
  description: "Generated by create next app",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <body suppressHydrationWarning>
        <CountriesProvider>
          <NavBar />
          <main> {children} </main>
          <Footer />
        </CountriesProvider>
      </body>
    </html>
  );
}
