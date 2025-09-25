import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { BLOGS } from "@/constants/routes";
import { cx } from "class-variance-authority";

const AllBlogsLink = () => {
  const t = useTranslations("HomePage");
  return (
    <Link
      className={cx(buttonVariants({ variant: "default" }), "flex justify-end")}
      href={BLOGS}
    >
      {t("blogs.link")}
      <ArrowRight />
    </Link>
  );
};
export default AllBlogsLink;
