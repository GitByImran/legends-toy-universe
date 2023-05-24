import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ChangeTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;
    const routeName = pathname.slice(1);

    if (location.pathname == "/") {
      document.title = `Legend Toy Universe`;
    } else {
      document.title = `${routeName} - Legend Toy Universe`;
    }
  }, [location]);

  return null;
};

export default ChangeTitle;
