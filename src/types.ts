export type TConsents = {
  count: number;
  consents: Array<TConsent>;
};

export type TConsent = {
  consentId: string;
  name: string;
  consentHtml: string;
  global: boolean;
  language: string;
};
