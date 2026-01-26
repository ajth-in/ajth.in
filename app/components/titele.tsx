import { PropsWithChildren } from "react";

export default function Title(props: PropsWithChildren) {
  return (
    <h2 className="mb-4 text-base font-medium text-neutral-900 dark:text-neutral-300">
      {props.children}
    </h2>
  );
}
