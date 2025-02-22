import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { buttonVariants } from "~/components/ui/button";
import { BLOGS } from "~/constants/routes";
import { cn } from "~/lib/utils";

const AllBlogsLink = () => {
  const t = useTranslations("HomePage");
  return (
    <Link
      className={cn(buttonVariants({ variant: "link" }), "flex justify-end")}
      href={BLOGS}
    >
      {t("blogs.link")}
      <ArrowRight />
    </Link>
  );
};
export default AllBlogsLink;
