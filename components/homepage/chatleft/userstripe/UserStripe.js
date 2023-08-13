import BrandLogo from "@/components/loginpage/BrandLogo";
import Image from "next/image";
import React, { useState } from "react";

const UserStripe = () => {
  return (
    <div className="bg-darkgreen p-2 sticky top-0 max-sm:hidden">
      <BrandLogo />
    </div>
  );
};

export default UserStripe;
