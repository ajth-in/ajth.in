import { Shell } from "lucide-react";
import Link from "next/link";
import { HOME } from "~/constants/routes";

const BrandLabel = () => {
  return (
    <Link
      href={HOME}
      className=" gap-2 text-xl text-primary font-bold items-center sm:flex hidden"
    >
      <Shell className="text-brand" />
      Ajith-k
    </Link>
  );
};
export default BrandLabel;
