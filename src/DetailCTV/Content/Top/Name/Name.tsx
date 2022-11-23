import { Typography } from "antd";
import "./Name.css";
const { Title } = Typography;
const Name = () => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Title className="name" level={4}>
        Nguyễn Thanh Tùng
      </Title>
      <div className="waitCTV">Chờ duyệt CTV</div>
    </div>
  );
};
export default Name;
