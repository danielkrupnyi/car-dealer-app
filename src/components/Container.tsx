import { FC, ReactNode } from "react";

export const Container: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="max-w-7xl px-4 mx-auto relative">{children}</div>;
};
