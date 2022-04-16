import React, { useState, useEffect } from "react";
import {
  TargetedConsent,
  LoadingSpinner,
  PageContainer,
  ErrorState,
} from "../../components";
import { TConsent, TConsents } from "../../types";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

type TPreliminaryCheckProps = {
  children: React.ReactNode;
};

export default function PreliminaryCheck({ children }: TPreliminaryCheckProps) {
  const [consentsComplete, setConsentsComplete] = useState<boolean>(false);
  const [consentsData, setConsentsData] = useState<TConsents>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (!consentsData) {
      Axios("/user/consents/GetUserConsents")
        .then((response) => {
          setConsentsData(response.data);
        })
        .catch((error) => {
          return (
            <ErrorState
              onContinue={() => navigate("/")}
              errorMessage={error.message}
            />
          );
        })
        .finally(() => setIsLoading(false));
    }
  }, [consentsData, navigate]);

  async function signConsents(signedConsents: TConsent[]) {
    setIsLoading(true);
    await Axios.post("/user/consents/SignUserConsents", signedConsents)
      .then((response) => {
        setConsentsData(response.data);
      })
      .catch((error) => {
        return (
          <ErrorState
            onContinue={() => navigate("/")}
            errorMessage={error.message}
          />
        );
      })
      .finally(() => setIsLoading(false));
  }

  const handleConsentsComplete = (signedConsents: TConsent[]) => {
    if (!consentsComplete) {
      setConsentsComplete(true);
      signConsents(signedConsents);
    }
  };

  if (isLoading) {
    return (
      <PageContainer>
        <LoadingSpinner />
      </PageContainer>
    );
  }

  if (consentsData && consentsData.count > 0 && !consentsComplete) {
    return (
      <PageContainer>
        <TargetedConsent
          onConsentComplete={handleConsentsComplete}
          consents={consentsData.consents}
        />
      </PageContainer>
    );
  }
  return <>{children}</>;
}
