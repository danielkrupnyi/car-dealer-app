import { FC, ReactNode } from "react";

export const Container: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="container mx-auto relative">{children}</div>;
};
