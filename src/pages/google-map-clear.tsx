import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function GoogleMapClear() {
  const navigate = useNavigate();

  useEffect(() => {
    const id = setTimeout(() => {
      console.log(123);
      navigate("/google-maps");
    }, 500);

    return () => {
      clearTimeout(id);
    };
  }, []);

  return <></>;
}

export default GoogleMapClear;
