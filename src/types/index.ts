export type WithLocale<T extends object = object> = { locale: string } & T;
export type PageProps = {
  params: Promise<{ locale: "ml" | "en"; slug?: string }>;
};
