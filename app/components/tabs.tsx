"use client";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PropsWithChildren, useEffect, useState } from "react";
import { css } from "styled-system/css";

const STORAGE_KEY = "blog:last-tab";

const tabTriggerStyle = css({
  textStyle: "body.xs",
  cursor: "pointer",
  letterSpacing: "0.05em",
  '&[data-state="active"]': {
    backgroundColor: { base: "surface.light.hover", _dark: "surface.dark.hover" },
    color: { base: "neutral.800", _dark: "neutral.400" },
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
          backgroundColor: "surface.glass",
          border: "1px solid",
          borderColor: "surface.glass.border",
          padding: "0.25rem",
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
