import * as React from "react";
import { PageContainer } from "../../components";
import styles from "./styles.module.css";

const Home = () => {
  return (
    <PageContainer>
      <div className={styles.homeWrapper}>
        <div className={styles.homeContainer}>
          <h1>Welcome</h1>
          <p>This is the home page.</p>
        </div>
      </div>
    </PageContainer>
  );
};

export default Home;
