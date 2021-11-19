import React from "react";
import { Link } from "react-router-dom";

interface IHeaderItemsProps {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  linkTo: string;
}

export const IconItem = ({ Icon, linkTo = "/" }: IHeaderItemsProps) => {
  return (
    <div className="rounded-sm hover:bg-primary-800 hover:bg-opacity-20 hover:border-transparent">
      <Link to={linkTo}>
        <Icon className="w-10 h-10" />
      </Link>
    </div>
  );
};
