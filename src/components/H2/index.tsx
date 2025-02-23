import { type PropsWithChildren } from "react";

const H2 = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <h2 className="font-bold text-xl underline decoration-4 decoration-brand py-2 ">
      {children}
    </h2>
  );
};
export default H2;
