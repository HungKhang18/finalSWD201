import { Badge, Calendar, Alert } from "antd";
import React, { useState } from "react";
import moment from "moment";
import "components/ScheduleMentorPage/ScheduleMentorPageTable.css";
import ModalBooking from "components/ScheduleMentorPage/ModalBooking";
const getListData = (value) => {
  let listData;

  switch (value.date()) {
    case 8:
      listData = [
        {
          type: "warning",
          content: "This is warning event.",
        },
        {
          type: "success",
          content: "This is usual event.",
        },
      ];
      break;

    default:
  }

  return listData || [];
};

const getMonthData = (value) => {
  if (value.month() === 8) {
    return 1394;
  }
};

const App = () => {
  const monthCellRender = (value) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };

  const dateCellRender = (value) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };

  const onSelect = (newValue) => {
    alert("hello");
  };

  const [value, setValue] = useState(() => moment("2017-01-25"));
  const [selectedValue, setSelectedValue] = useState(() =>
    moment("2017-01-25")
  );
  return (
    <>
      <Alert
        message={`You selected date: ${selectedValue?.format("YYYY-MM-DD")}`}
      />
      <Calendar
        dateCellRender={dateCellRender}
        monthCellRender={monthCellRender}
        onSelect={onSelect}
      />
    </>
  );
};

export default App;
