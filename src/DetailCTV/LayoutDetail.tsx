import { useState } from "react";
import Navbar from "../DoctorList/Navbar/Navbar";
import Sidebar from "../DoctorList/Sidebar/Sidebar";
import Arrow from "../DoctorList/Header/Arrow";
import Bottom from "../DoctorList/Footer/Footer";
import { Layout } from "antd";
import { Typography } from "antd";
import Container from "./Content/Content";
import "../DoctorList/Layoutparent.css";
import "./LayoutDetail.css";

const { Title } = Typography;
const { Header} = Layout;
const LayoutDetail = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="layoutDetailCTV">
      <Navbar />
      <Layout>
        <Sidebar conlao={collapsed} />
        <Layout>
          <Header style={{backgroundColor: "#FAFAFA" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                marginLeft: "0px",
              }}
            >
              <Arrow conlai={setCollapsed} conlao={collapsed} />
              <Title level={3}>Tổng quan</Title>
            </div>
          </Header>
          <Container></Container>
          <Bottom></Bottom>
        </Layout>
      </Layout>
    </div>
  );
};
export default LayoutDetail;
