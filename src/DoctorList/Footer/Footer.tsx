import { Layout } from 'antd';

const {Footer } = Layout;

const Bottom = () => (
  <Footer
    style={{
      backgroundColor: "#FFFFFF",
      minWidth: "1199px",
      height: "50px",
      border: "1px solid #EFEFEF",
      display: "flex",
      alignItems: "center",
    }}
  >
    My Medlatec Admin ©2022 Design By MEDON JSC
  </Footer>
);
export default Bottom;