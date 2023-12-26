"use client";
import styles from "./page.module.css";
import Banner from "@/components/banner";

export default function Home() {
  const handleOnBannerBtnClick = () => {
    console.log("Hi banner button");
  };
  return (
    <div className={styles.container}>
      <head>
        <title>Coffee Connoisseur </title>
        <link rel="icon" href="./favicon.ico" />
      </head>

      <main className={styles.main}>
        <Banner
          buttonText="View stores nearby"
          handleOnClick={handleOnBannerBtnClick}
        />
      </main>
    </div>
  );
}
