import db from "app/libs/firebase";
import { collection, getDocs } from "firebase/firestore";
import { redirect } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const querySnapshot = await getDocs(collection(db, "tinyurls"));

  const value = querySnapshot.docs
    .find((doc) => doc.data().id === slug)
    ?.data().value;
  redirect(value);
}
