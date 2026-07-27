import "./globals.css";

import {
  Playfair_Display,
  Inter,
} from "next/font/google";

import { AuthProvider } from "@/contexts/AuthContext";
import { Navbar } from "@/components/hermony/navbar";



const playfair = Playfair_Display({

  subsets: ["latin"],

  variable: "--font-heading",

});



const inter = Inter({

  subsets: ["latin"],

  variable: "--font-body",

});




export const metadata = {

  title: "HERmony",

  description:
    "Find your rhythm. Live in HERmony.",

};





export default function RootLayout({

  children,

}: {

  children: React.ReactNode;

}) {


  return (

    <html lang="en">


      <body

        className={`
          ${playfair.variable}
          ${inter.variable}
        `}

      >


        <AuthProvider>


          {children}


          <Navbar />


        </AuthProvider>



      </body>


    </html>

  );

}