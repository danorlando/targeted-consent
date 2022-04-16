import * as React from "react";
import { PageContainer } from "../../components";
import styles from "./styles.module.css";

const Discover = () => {
  return (
    <PageContainer>
      <div className={styles.discoverPageWrapper}>
        <div className={styles.discoverContainer}>
          <h1>Discover Things</h1>
          <p>This is the Discover page.</p>
        </div>
      </div>
    </PageContainer>
  );
};

export default Discover;
