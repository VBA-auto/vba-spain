import "./globals.css";
import Head from "next/head";
import { Poppins } from "next/font/google"; // Importing Poppins

export const metadata = {
  title: "VBA Calculateur Renault - ES",
  description: "Vente de calculateur Renault",
  icon: "/favicon.ico",
};
// Load Poppins using `next/font/google`
const poppins = Poppins({
  weight: ["400", "500", "600", "700"], // Specify the weights you need
  subsets: ["latin"], // Specify subsets; use 'latin' or others as needed
  variable: "--font-poppins",
});

const RootLayout = ({ children }) => {
  return (
    <html lang="es">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href={metadata.icon} sizes="any" />
      </Head>

      <body className={`${poppins.variable} antialiased`}>
        {children}

        <script
          type="text/javascript"
          src="//cdn.cookie-script.com/s/b44654ce8adaebd84447bda0400a34b2.js"
          defer
        ></script>
      </body>
    </html>
  );
};

export default RootLayout;
