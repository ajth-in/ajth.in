import { useTranslations } from "next-intl";
import { Fragment } from "react";
import H2 from "~/components/H2";
import {
  FAV_BOOK,
  FAV_BOOK_2,
  FAV_MOVIE,
  FAV_SINGER,
  FAV_SONG,
} from "~/constants/routes";

const ThingsILove = () => {
  const t = useTranslations("HomePage");
  return (
    <Fragment>
      <H2>{t("personal.title")}</H2>
      <p className="text-left [&>a]:bg-highlight [&>a]:px-[2px]">
        {t.rich("personal.description", {
          lor: (chunk) => (
            <a href={FAV_MOVIE} target="_blank">
              {chunk}
            </a>
          ),
          br: () => <br />,
          passenger: (chunk) => (
            <a href={FAV_SINGER} target="_blank">
              {chunk}
            </a>
          ),
          myyazhi: (chunk) => (
            <a href={FAV_BOOK_2} target="_blank">
              {chunk}
            </a>
          ),
          circle: (chunk) => (
            <a href={FAV_SONG} target="_blank">
              {chunk}
            </a>
          ),
          ohys: (chunk) => (
            <a href={FAV_BOOK} target="_blank">
              {chunk}
            </a>
          ),
        })}
      </p>
    </Fragment>
  );
};
export default ThingsILove;
