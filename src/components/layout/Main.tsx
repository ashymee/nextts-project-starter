import { BareComponent } from "index";
import type { FC } from "react";

const Main: FC<BareComponent> = ({ children }) => {
  return (
    <div className="flex-1 p-4 w-full">
      <div className="w-full h-full flex items-center justify-center border rounded-xl">
        {children}
      </div>
    </div>
  );
};

export default Main;
