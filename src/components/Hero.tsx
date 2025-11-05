import { useTranslations } from "next-intl";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
const ProfileCard = () => {
  const t = useTranslations("HomePage");

  return (
    <Card className="w-full grid  mx-auto backdrop-blur-[3px]   shadow-none rounded-[20px] z-[10]">
      <CardContent className="px-5 py-2">
        {/* Avatar floated left */}
        <div className="float-left mr-4 mb-2">
          <Avatar className="w-24 h-24 border">
            <Image
              src={
                "https://res.cloudinary.com/dobs3jkdj/image/upload/v1759943576/final_xpe8el.gif"
              }
              height={120}
              width={120}
              alt="Ajith Kumar P M"
            />

            <AvatarFallback>AK</AvatarFallback>
          </Avatar>
        </div>

        {/* Text content wraps around */}
        <div className="text-sm leading-relaxed">
          <h1
            style={{ fontFamily: "var(--font-vt323)" }}
            data-pronoun={t("pronoun")}
            className="font-bold text-5xl after:content-[attr(data-pronoun)] after:ml-2 after:text-xs after:font-light"
          >
            {t("name")}
          </h1>
          <p className="text-sm mb-3 font-monosans">{t("desig")}</p>
          <p>
            Welcome to my little retro corner of the web 🌐✨. This is my{" "}
            <span className="font-monosans dark:text-yellow-400 text-yellow-600 text-xl ">
              website
            </span>{" "}
            and{" "}
            <span className="font-monosans text-xl dark:text-green-400 text-green-8600">
              blog
            </span>
            , where I share thoughts, projects, and things I geek out on. Built
            with{" "}
            <span className="font-monosans text-xl dark:text-purple-400 text-purple-600">
              love
            </span>{" "}
            using Next.js and a dash of nostalgia.
          </p>

          {/* Quick Facts */}
          <div className="mt-4">
            <h2 className="text-xl text-red-500 font-monosans">
              Some quick facts:
            </h2>
            <ul className="list-disc list-inside mt-2 space-y-0 text-slate-800 dark:text-slate-100">
              <li>
                I kinda come alive at{" "}
                <span className="font-monosans text-xl">night</span>.
              </li>
              <li>
                Big fan of{" "}
                <span className="font-monosans text-xl">Bukowski’s poems</span>{" "}
                — messy, raw, real.
              </li>
              <li>
                The memories of{" "}
                <span className="font-monosans text-xl">
                  starry nights in Wayanad
                </span>{" "}
                keep me going.
              </li>
              <li>
                I mostly code in{" "}
                <span className="font-monosans text-xl">JavaScript</span> &{" "}
                <span className="font-monosans text-xl">Python</span>.
              </li>
              <li>
                Got my{" "}
                <span className="font-monosans text-xl">
                  B.Tech from TKM College of Engineering
                </span>
                .
              </li>
              <li>
                Honestly,{" "}
                <span className="font-monosans text-xl">
                  I like being alone
                </span>
                .
              </li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
