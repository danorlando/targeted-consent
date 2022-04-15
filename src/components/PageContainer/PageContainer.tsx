import React from "react";
import styles from "./styles.module.css";

export type TPageContainerProps = {
  children: React.ReactNode;
};

const PageContainer: React.FC<TPageContainerProps> = ({ children }) => {
  return (
    <main role="main" className={styles.layoutContainer}>
      <div className={styles["content-container"]}>{children}</div>
    </main>
  );
};

export default PageContainer;
