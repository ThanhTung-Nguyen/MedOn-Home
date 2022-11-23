import { useState } from "react";
import { Button, Layout, Typography } from "antd";
import Navbar from "./Navbar/Navbar";
import Bottom from "./Footer/Footer";
import Sidebar from "./Sidebar/Sidebar";
import Container from "./Content/Container";
import Arrow from "./Header/Arrow";

import "./Layoutparent.css";

const { Header } = Layout;
const { Title } = Typography;

const DoctorListLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="detailLayoutparent">
      <Navbar />
      <Layout>
        <Sidebar conlao={collapsed} />
        <Layout>
          <Header style={{ backgroundColor: "#FAFAFA", padding: 0 }}>
            <div style={{display: "flex", justifyContent: "space-between"}}>
              <div className="arrow">
                <Arrow conlai={setCollapsed} conlao={collapsed} />
                <Title className="titl" level={4}>
                  Danh sách bác sĩ
                </Title>
              </div>
              <div>
                <Button
                  style={{
                    marginRight: "25px",
                    width: "139px",
                    height: "36px",
                  }}
                  type="primary"
                >
                  Xuất Excel
                </Button>
              </div>
            </div>
          </Header>
          <Container />
          <Bottom />
        </Layout>
      </Layout>
    </div>
  );
};
export default DoctorListLayout;
