import { Space, Input, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const { Option } = Select;
const handleChange = (value: string) => {
  console.log(value);
};
const selectBefore = (
  <Select defaultValue="Tìm kiếm theo" className="select-before" onChange={handleChange}>
    <Option value="sđt">Số điện thoại</Option>
    <Option value="name">Tìm theo tên</Option>
    <Option value="id">Theo mã CTV</Option>
  </Select>
);

const Search = () => (
  <div>
    <Space direction="vertical">
      <Input size="large"
        style={{width: "505px"}}
        addonBefore={selectBefore}
        placeholder="Nhập giá trị tìm kiếm"
        prefix={<SearchOutlined />}
      />
    </Space>
  </div>
);
export default Search;
