export type TConsents = {
  count: number;
  consents: Array<TConsent>;
};

export type TConsent = {
  consent_id: string;
  name: string;
  consent_html: string;
  global: boolean;
  language: string;
};
