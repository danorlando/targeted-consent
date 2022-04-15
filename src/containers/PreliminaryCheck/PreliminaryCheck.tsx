import React, { useState, useEffect } from "react";
import {
  TargetedConsent,
  LoadingSpinner,
  PageContainer,
} from "../../components";
import { TConsents } from "../../types";
import Axios from "axios";

type TPreliminaryCheckProps = {
  children: React.ReactNode;
};

export default function PreliminaryCheck({ children }: TPreliminaryCheckProps) {
  const [consentComplete, setConsentComplete] = useState<boolean>(false);
  const [consentsData, setConsentsData] = useState<TConsents>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getConsentsData();
  }, []);

  async function getConsentsData() {
    await Axios("/user/consents/GetUserConsents")
      .then((response) => {
        setConsentsData(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => setIsLoading(false));
  }

  const handleConsentComplete = () => {
    if (!consentComplete) {
      setConsentComplete(true);
    }
  };

  if (isLoading) {
    return (
      <PageContainer>
        <LoadingSpinner />
      </PageContainer>
    );
  }

  if (consentsData && consentsData.count > 0 && !consentComplete) {
    return (
      <TargetedConsent
        // onConsentComplete={handleConsentComplete}
        // consents={consentsQuery.data!.consents}
      />
    );
  }
  return <>{children}</>;
}
