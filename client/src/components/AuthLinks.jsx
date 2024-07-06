import { Link } from "react-router-dom";
import React from "react";

const AuthLinks = () => {
  const status = "unauthenticated";
  return (
    <div className="setcol text-[18px] font-normal text-center py-2  hover:bg-lightcriBlue w-full max-[1024px]:border-b">
      {status === "unauthenticated" ? (
        <Link to="/login">Login</Link>
      ) : (
        <div className="cursor-pointer">
          {" "}
          <Link to="/logout">Logout</Link>
        </div>
      )}
    </div>
  );
};

export default AuthLinks;
