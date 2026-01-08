"use client";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PropsWithChildren, useEffect, useState } from "react";

const STORAGE_KEY = "blog:last-tab";

const BlogTabs = (props: PropsWithChildren) => {
  const [tab, setTab] = useState<"tech" | "personal">("tech");

  useEffect(() => {
    const savedTab = localStorage.getItem(STORAGE_KEY);
    if (savedTab === "tech" || savedTab === "personal") {
      setTab(savedTab);
    }
  }, []);

  const handleTabChange = (value: string) => {
    if (value === "tech" || value === "personal") {
      setTab(value);
      localStorage.setItem(STORAGE_KEY, value);
    }
  };
  return (
    <Tabs value={tab} onValueChange={handleTabChange} className="w-full">
      <TabsList className="h-9 dark:bg-white/5 bg-black/5 border border-white/10 p-1">
        <TabsTrigger
          value="tech"
          className="text-xs cursor-pointer tracking-wider dark:data-[state=active]:bg-white/10 data-[state=active]:bg-black/10 dark:data-[state=active]:text-neutral-400 data-[state=active]:text-neutral-800 "
        >
          Technical
        </TabsTrigger>
        <TabsTrigger
          value="personal"
          className="text-xs cursor-pointer tracking-wider dark:data-[state=active]:bg-white/10 data-[state=active]:bg-black/10 dark:data-[state=active]:text-neutral-400 data-[state=active]:text-neutral-800 "
        >
          Everything Else
        </TabsTrigger>
      </TabsList>
      {props.children}
    </Tabs>
  );
};

export default BlogTabs;
