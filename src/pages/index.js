import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles["main-page"]}>
        <h1>
          Welcome to Lady Vengeance's Treasure Chest !💎 This is Hook Zone🎣
        </h1>
        <div className={styles["row-container"]}>
          <div className={styles["item-container"]}>
            <Link href={"/hookexamples/effect/effect-and-layouteffect"}>
              useEffect & useLayoutEffect
            </Link>
          </div>
          <div className={styles["item-container"]}>haha</div>
          <div className={styles["item-container"]}>
            <Link href={"/hookexamples/memo/memo"}>useMemo</Link>
          </div>
        </div>
      </main>
    </>
  );
}
