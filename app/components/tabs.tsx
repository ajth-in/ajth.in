"use client";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PropsWithChildren, useEffect, useState } from "react";
import { css } from "styled-system/css";

const STORAGE_KEY = "blog:last-tab";

const tabTriggerStyle = css({
  fontSize: "0.75rem",
  cursor: "pointer",
  letterSpacing: "0.05em",
  '&[data-state="active"]': {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    color: "rgb(38 38 38)",
  },
  _dark: {
    '&[data-state="active"]': {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      color: "rgb(163 163 163)",
    },
  },
});

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
    <Tabs
      value={tab}
      onValueChange={handleTabChange}
      className={css({ width: "100%" })}
    >
      <TabsList
        className={css({
          height: "2.25rem",
          backgroundColor: "rgba(0, 0, 0, 0.05)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          padding: "0.25rem",
          _dark: { backgroundColor: "rgba(255, 255, 255, 0.05)" },
        })}
      >
        <TabsTrigger value="tech" className={tabTriggerStyle}>
          Technical
        </TabsTrigger>
        <TabsTrigger value="personal" className={tabTriggerStyle}>
          Everything Else
        </TabsTrigger>
      </TabsList>
      {props.children}
    </Tabs>
  );
};

export default BlogTabs;
