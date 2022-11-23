import { DatePicker, Space } from "antd";
import moment from "moment";
import './Date.css'

const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];

const Date = () => (
    <div>
        <Space>
          <label htmlFor="dateStart">Từ ngày</label>
          <DatePicker
          className="date"
            id="dateStart"
            defaultValue={moment("01/01/2015", dateFormatList[0])}
            format={dateFormatList}
          />
          <label htmlFor="dateEnd">Đến ngày</label>
          <DatePicker
          className="date"
            id="dateEnd"
            defaultValue={moment("15/11/2022", dateFormatList[0])}
            format={dateFormatList}
          />
        </Space>
      </div>
)
export default Date;
