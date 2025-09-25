import { useTranslations } from "next-intl";

const InfoBanner = () => {
  const t = useTranslations("HomePage");
  return (
    <p className=" max-w-3xl mx-auto border-border border-1 my-2 [&>strong]:font-bold text-xs sm:text-sm bg-card font-light  text-center  w-full p-2 rounded-sm">
      {t.rich("banner", {
        strong: (chunks) => <strong>{chunks}</strong>,
      })}
    </p>
  );
};
export default InfoBanner;
