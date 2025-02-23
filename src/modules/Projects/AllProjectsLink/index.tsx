import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { buttonVariants } from "~/components/ui/button";
import { WORKS } from "~/constants/routes";
import { cn } from "~/lib/utils";

const AllProjectsLink = () => {
  const t = useTranslations("HomePage");
  return (
    <Link
      className={cn(buttonVariants({ variant: "link" }), "flex justify-end")}
      href={WORKS}
    >
      {t("works.link")}
      <ArrowRight />
    </Link>
  );
};
export default AllProjectsLink;
