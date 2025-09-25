import { HOME } from "@/constants/routes";
import { Origami } from "lucide-react";
import Link from "next/link";

const BrandLabel = () => {
  return (
    <Link
      // @ts-expect-error / is not a valid href
      href={HOME}
      className=" gap-2 text-xl  font-bold items-center sm:flex hidden  font-monosans"
    >
      <Origami className="text-brand" />
      Ajith-k
    </Link>
  );
};
export default BrandLabel;
