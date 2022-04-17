import React, { useState } from "react";
import styles from "./styles.module.css";

type TTargetedConsentFormProps = {
  consentName: string;
  consentHtml: string;
  onContinue: () => void;
};

export const TargetedConsentForm: React.FC<TTargetedConsentFormProps> = ({
  consentName,
  consentHtml,
  onContinue,
}) => {
  const [isTermsAccepted, setIsTermsAccepted] = useState<boolean>(false);

  const handleClick = () => {
    onContinue();
    setIsTermsAccepted(false);
  };

  const handleCheckboxChange = () => {
    setIsTermsAccepted(!isTermsAccepted);
  };

  return (
    <div>
      <header>
        <div className={styles.consentHeader}>
          {consentName ? <h1>{consentName}</h1> : null}
          <p>
            Please review the information below. If you consent to participate
            in the program, please indicate by checking the box below to
            proceed.
          </p>
        </div>
      </header>
      <div className={styles.contentWrapper}>
        <div
          data-testid="consentContent"
          className={styles.consentContent}
          dangerouslySetInnerHTML={{
            __html: consentHtml,
          }}
        />
      </div>
      <footer>
        <div className={styles.targetedConsentFooter}>
          <div className={styles.checkboxContainer}>
            <input
              type="checkbox"
              id="consentCheck"
              name="consentCheck"
              checked={isTermsAccepted}
              onChange={handleCheckboxChange}
            />
            <label className={styles.checkboxLabel} htmlFor="consentCheck">
              {consentName
                ? `I agree to the terms and conditions of ${consentName}`
                : "I agree to the terms and conditions"}
            </label>
          </div>
          <button
            className={styles.consentButton}
            onClick={handleClick}
            disabled={!isTermsAccepted}
          >
            Continue
          </button>
        </div>
      </footer>
    </div>
  );
};

export default TargetedConsentForm;
