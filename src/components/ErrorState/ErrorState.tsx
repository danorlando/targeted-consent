import React from "react";
import styles from "./styles.module.css";

type TErrorStateProps = {
  errorMessage: React.ReactNode;
  onContinue: () => void;
};

const ErrorState = (props: TErrorStateProps) => {
  return (
    <div className={styles.errorWrapper}>
      <div className={styles.errorContainer} data-testid="errorContainer">
        <div role="alert" className={styles.errorText}>
          {props.errorMessage}
        </div>
        <button className={styles.errorButton} onClick={props.onContinue}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default ErrorState;
