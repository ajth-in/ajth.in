import { useTranslations } from "next-intl";

const MyInfo = () => {
  const t = useTranslations("HomePage");
  return (
    <p className="[&>strong]:font-bold text-xs sm:text-sm [&>strong]:text-black font-light bg-brand-bg text-center text-gray-500 w-full p-2 rounded-md">
      {t.rich("banner", {
        strong: (chunks) => <strong>{chunks}</strong>,
      })}
    </p>
  );
};
export default MyInfo;
