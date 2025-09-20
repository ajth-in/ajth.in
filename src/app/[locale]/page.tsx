import Header from "@/components/Header";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <main>
      <Header />
    </main>
  );
}
