"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import db from "app/libs/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

import { useState } from "react";
import { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
export default function UrlShortner() {
  const [shortUrl, setShortUrl] = useState("");
  const [actualUrl, setActualUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const recaptcha = useRef<ReCAPTCHA>(null);
  const router = useRouter();
  const handleSubmit = async () => {
    setLoading(true);
    try {
      const docRef = await addDoc(collection(db, "tinyurls"), {
        id: shortUrl,
        value: actualUrl,
      });
      if (docRef.id) {
        router.push(`/link/${shortUrl}`);
      }
    } catch (e) {
      console.error("Error adding document: ", e);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-[calc(100dvh-300px)] flex justify-center items-center px-10">
      <div className="flex gap-8 flex-col  p-10  ">
        <div className="grid w-full max-w-sm items-center gap-2 justify-center">
          <Label htmlFor="email">Actual url</Label>
          <Input
            value={actualUrl}
            onChange={(e) => {
              setActualUrl(e.target.value);
            }}
            type="text"
            placeholder="http://example.example.com"
            size={50}
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-2">
          <Label>Shorntened url</Label>
          <Input
            value={shortUrl}
            onChange={(e) => {
              setShortUrl(e.target.value.replace(" ", "-").toLocaleLowerCase());
            }}
            type="text"
          />
        </div>
        <Button
          onClick={async () => {
            if (!recaptcha.current?.getValue()) {
              alert("Captcha failed");
              return;
            }
            await handleSubmit();
          }}
          disabled={!actualUrl || !shortUrl || loading}
          variant={"outline"}
          className="flex items-center bg-white text-black"
        >
          {loading ? (
            "Please wait..."
          ) : (
            <span className="underline mx-2 p-1 font-mono  text-green-800">
              ajth.in/link/{shortUrl || "short-url"}
            </span>
          )}
        </Button>
        <ReCAPTCHA
          ref={recaptcha}
          sitekey={process.env.NEXT_PUBLIC_REACT_APP_SITE_KEY}
        />
      </div>
    </div>
  );
}
