import React from "react";
import styles from "./page-title.module.sass";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useRouter } from "next/router";
export default function PageTitle() {
  const { theme } = useTheme();
  const { asPath } = useRouter();
  return (
    <div className={styles.page_title_wrapper}>
      <div className={styles.bg_img_wrapper}>
        {theme && (
          <Image
            alt="background_image"
            layout="fill"
            objectFit="cover"
            objectPosition={"center"}
            quality={100}
            src={`/static/assets/images/bg/${theme}_hero_bg.jpg`}
            loading="eager"
          />
        )}
      </div>
      {theme === "light" && <div className={styles.overlay}></div>}
      <div className={styles.content}>
        <h1 className={styles.current_page_title}>
          {asPath.slice(1).replace("-", " ")}
        </h1>
      </div>
    </div>
  );
}