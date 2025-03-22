import { getCldOgImageUrl } from "next-cloudinary";
import { useTranslations } from "next-intl";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";

const Hero = () => {
  const t = useTranslations("HomePage");

  return (
    <div className="flex md:flex-row flex-col-reverse gap-4 py-10 justify-between items-center">
      <div className="text-center md:text-left">
        <h1
          data-pronoun={t("pronoun")}
          className="font-bold text-3xl after:content-[attr(data-pronoun)] after:text-xs after:p-2"
        >
          {t("name")}
        </h1>
        <span className="font-light">{t("desig")}</span>
      </div>
      <Avatar className="w-25 h-25 border-2 border-brand-bg">
        <AvatarImage
          src={getCldOgImageUrl({
            src: "avatar-_ProfilePictureMaker.com_1_v06kmj",
            width: 200,
            height: 200,
          })}
          alt="profile picture of Ajith kumar P M"
        />
        <AvatarFallback>AK</AvatarFallback>
      </Avatar>
    </div>
  );
};
export default Hero;
