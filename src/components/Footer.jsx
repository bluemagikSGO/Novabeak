import React from "react";
import { Copyright } from "lucide-react";

const Footer = () => {
  return (
    <div>
      <hr />

      <p className="flex gap-3 justify-center p-3">
        {" "}
        <Copyright /> 2025 NovaBeak Investment{" "}
      </p>
    </div>
  );
};

export default Footer;
