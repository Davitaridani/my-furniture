import React from "react";
import HeaderCompt from "../Header/HeaderCompt";
import FooterCompt from "../Footer/FooterCompt";
import Routers from "../../routers/Routers";

const LayoutCompt = () => {
  return (
    <div>
      <HeaderCompt />
      <div>
        <Routers />
      </div>
      <FooterCompt />
    </div>
  );
};

export default LayoutCompt;
