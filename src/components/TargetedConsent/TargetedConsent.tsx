import React, { useEffect, useState } from "react";
import { TConsent } from "../../types";
import TargetedConsentForm from "./TargetedConsentForm";
import styles from "./styles.module.css";

type TTargetedConsentProps = {
  onConsentComplete: (signedConsents: TConsent[]) => void;
  consents: TConsent[];
};

const TargetedConsent = (props: TTargetedConsentProps) => {
  const { onConsentComplete, consents } = props;
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentConsent, setCurrentConsent] = useState<TConsent>(
    consents[currentIndex]
  );
  const [signedConsents, setSignedConsents] = useState<TConsent[]>([]);

  const handleContinue = () => {
    setSignedConsents([...signedConsents, currentConsent]);
    setCurrentIndex(currentIndex + 1);
    setCurrentConsent(consents[currentIndex + 1]);
  };

  useEffect(() => {
    if (signedConsents.length === consents.length) {
      onConsentComplete(signedConsents);
    }
  }, [signedConsents, consents, onConsentComplete]);

  return (
    <>
      {currentConsent && (
        <div className={styles.consentWrapper}>
          <div className={styles.consentContainer}>
            <TargetedConsentForm
              consentName={currentConsent.name}
              consentHtml={currentConsent.consentHtml}
              onContinue={handleContinue}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default TargetedConsent;
