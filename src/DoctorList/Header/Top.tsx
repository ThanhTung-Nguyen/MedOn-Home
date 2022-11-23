import { Button, Layout, Typography } from "antd";
import Arrow from "./Arrow";
// import "./Top.css";

const { Header } = Layout;
const { Title } = Typography;

const Top = () => {
  return (
    <Header style={{ padding: 0 }}>
      <div className="arrow">
        <Arrow/>
        <Title className="titl" level={4}>
          Danh sách bác sĩ
        </Title>
      </div>
      <div>
        <Button
          style={{ marginRight: "25px", width: "139px", height: "36px" }}
          type="primary"
        >
          Xuất Excel
        </Button>
      </div>
    </Header>
  );
};
export default Top;
