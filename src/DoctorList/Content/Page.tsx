import { Pagination } from "antd";

const Page = () => {
  return (
    <Pagination
      total={100}
      showSizeChanger
      showQuickJumper
      showTotal={(total, range) => `${range[0]}-${range[1]} trong ${total}`}
      defaultPageSize={10}
      defaultCurrent={1}
      locale={{ jump_to: "Đến trang", page: '' }}
    />
  );
};
export default Page;
