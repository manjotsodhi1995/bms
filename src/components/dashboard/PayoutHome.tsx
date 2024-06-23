import { MenuItem, Select } from "@mui/material";
import ArCharPayout from "./PayOut/ArCharPayout";

import TableP from "./PayOut/TableP";
import { useState } from "react";
function PayoutHome() {
  const [time, setTime] = useState(30);
  return (
    <div className="">
      <h1 className="text-3xl my-12 font-semibold">Payouts</h1>
      <div className="flex w-full justify-between gap-10">
        <ArCharPayout color="#25CD2599" />
        <ArCharPayout color="#DB303099" />
      </div>
      <div className="flex w-full items-center justify-between">
        <h1 className="text-3xl my-12 font-semibold">Payouts</h1>
        <Select
          defaultValue={time}
          value={time}
          onChange={(e) => setTime(Number(e.target.value))}
          size="small"
          sx={{
            borderRadius: 2,
          }}
        >
          <MenuItem value={7}>Last 7 days</MenuItem>
          <MenuItem value={30}>Last 30 days</MenuItem>
          <MenuItem value={60}>Last 60 days</MenuItem>
          <MenuItem value={90}>Last 90 days</MenuItem>
        </Select>
      </div>
      {/* <Table */}
      <TableP />
    </div>
  );
}

export default PayoutHome;
