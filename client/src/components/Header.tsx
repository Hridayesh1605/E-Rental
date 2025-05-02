import React from "react";

const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <div className="mb-5">
      <h1 className="text-xl font-semibold text-gray-100">{title}</h1>
      <p className="text-sm mt-1 text-gray-400">{subtitle}</p>
    </div>
  );
};

export default Header;
