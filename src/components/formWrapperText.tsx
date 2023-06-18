import { ReactNode } from "react";

type formWrapperProps = {
  tittle: string;
  children: ReactNode;
};

export function FormWrapperText({ tittle, children }: formWrapperProps) {
  return (
    <>
      <h1 className="tittle">{tittle}</h1>
      <div className="children">{children}</div>
    </>
  );
}
