import { Sora } from "next/font/google";
import Head from "next/head";

import Header from "../components/Header";
import Nav from "../components/Nav";
import TopLeftImg from "../components/TopLeftImg";

// setup font
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  return (
    <main
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      {/* metadata */}
      <Head>
        <title>Сидиков Содирхон | Front-end разработчик</title>
        <meta
          name="description"
          content="Сидиков Содирхон (Sid) — front-end разработчик. React, Next.js, TypeScript, Tailwind, Framer Motion. Реальные проекты и осознанный подход к разработке."
        />
        <meta
          name="keywords"
          content="frontend, react, nextjs, typescript, javascript, tailwind, framer-motion, портфолио, веб-разработчик, Sidikov213"
        />
        <meta name="author" content="Сидиков Содирхон Бахтиерович" />
        <meta name="theme-color" content="#f13024" />
      </Head>

      <TopLeftImg />
      <Nav />
      <Header />

      {/* main content */}
      {children}
    </main>
  );
};

export default Layout;
