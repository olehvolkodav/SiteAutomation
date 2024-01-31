import ContactUS from "./contactUS";
import Menu from "./menu";
import TopHeader from "./topHeader";

const Header = () => {
  return (
    <div className="em40_header_area_main">
      <TopHeader />
      <div className="tx_top2_relative">
        <div className="">
          <ContactUS />
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Header;
