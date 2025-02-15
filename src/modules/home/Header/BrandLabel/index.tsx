import { Shell } from "lucide-react";
import Link from "next/link";

const BrandLabel = () => {
  return (
    <Link
      href={"/"}
      className="flex gap-2 text-xl text-primary font-bold items-center"
    >
      <Shell className="text-brand" />
      Ajith-k
    </Link>
  );
};
export default BrandLabel;
