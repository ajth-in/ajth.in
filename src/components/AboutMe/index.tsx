import { Fragment } from "react";
import H2 from "../H2";
import { COMPANY } from "~/constants/routes";
import { useTranslations } from "next-intl";

const AboutMe = () => {
  const t = useTranslations("HomePage");

  return (
    <Fragment>
      <H2>{t("about.title")}</H2>
      <p className="text-justify [&>a]:bg-highlight [&>a]:text-highlight-color [&>a]:p-[1px] [&>a]:px-[2px] [&>a]:rounded-sm">
        {t.rich("about.description", {
          strong: (chunk) => (
            <a href={COMPANY} target="_blank" className="bg-highlight px-[2px]">
              {chunk}
            </a>
          ),
        })}
      </p>
    </Fragment>
  );
};
export default AboutMe;
