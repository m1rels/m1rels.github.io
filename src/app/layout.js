import { Providers } from "./providers";
import { fonts } from './fonts'
import { LanguageProvider } from "@/LanguageContext";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata = {
  title: "m1rels",
  description: "Website of m1rels",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={fonts.nunito.variable}>
        <LanguageProvider>
          <Providers>
            <Nav />
            {children}
          </Providers>
          </LanguageProvider>
        </body>
    </html>
  );
}
