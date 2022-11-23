import { Button } from "antd";
import { Image } from "antd";
import medon from "./image/MedOn.jpg";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navBarparent">
      <div className="divImg">
        <Image width={200} height={60} src={medon} />
      </div>
      <div className="divBtn">
        <Button type="text">English</Button>
        <Button danger type="text">
          Log out
        </Button>
      </div>
    </div>
  );
};
export default Navbar;
