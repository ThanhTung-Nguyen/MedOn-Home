import { MedicineBoxOutlined } from "@ant-design/icons";

const Medical = () => {
  return (
    <div
      style={{
        width: "155px",
        height: "88px",
        border: "1px solid #D9D9D9",
        borderStyle: "dashed",
        marginTop: 30
      }}
    >
      <div style={{padding: 23}}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <MedicineBoxOutlined />
          <b>500</b>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <b>Bệnh nhân</b>
        </div>
      </div>
    </div>
  );
};
export default Medical;
