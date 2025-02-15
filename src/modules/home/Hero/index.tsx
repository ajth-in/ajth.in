import { getCldOgImageUrl } from "next-cloudinary";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";

const Hero = () => {
  return (
    <div className="flex py-10 justify-between items-center">
      <div>
        <h1 className="font-bold text-3xl after:content-['(he/him)'] after:text-xs after:p-2">
          Ajith Kumar P M
        </h1>
        <span className="font-light">
          Digital Craftsman ( Artist / Developer / Writer )
        </span>
      </div>
      <Avatar className="w-25 h-25 border-2 border-brand-bg">
        <AvatarImage
          src={getCldOgImageUrl({
            src: "ajith-dp_qlwgip",
            width: 200,
            height: 200,
          })}
          alt="@shadcn"
        />
        <AvatarFallback>AK</AvatarFallback>
      </Avatar>
    </div>
  );
};
export default Hero;
