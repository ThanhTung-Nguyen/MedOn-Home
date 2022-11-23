import { Select, Badge } from "antd";

const { Option } = Select;
const handleChange = (value: string) => {
  console.log(value);
};
const Selectall = () => {
  return (
    <div>
      <Select
        size="large"
        defaultValue="Tất cả"
        style={{ width: 160, textAlign: "left" }}
        onChange={handleChange}
      >
        <Option value="Tạo mới">
          Tạo mới <Badge status="warning" />
        </Option>
        <Option value="Chờ duyệt CTV">
          Chờ duyệt CTV <Badge status="success" />
        </Option>
        <Option value="Đã duyệt CTV">
          Đã duyệt CTV <Badge status="processing" />
        </Option>
        <Option value="Spam">
          Spam <Badge status="error" />
        </Option>
        <Option value="Đã khoá">
          Đã khoá <Badge color="black" />
        </Option>
      </Select>
    </div>
  );
};
export default Selectall;
