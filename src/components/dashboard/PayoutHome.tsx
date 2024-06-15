import React from "react";
import ArCharPayout from "./PayOut/ArCharPayout";
import TableRow from "./PayOut/TableRow";
import TableP from "./PayOut/TableP";
function PayoutHome() {
  return (
    <div className="">
      <h1 className="text-3xl my-12 font-semibold">Payouts</h1>
      <div className="flex justify-between">
        <ArCharPayout color="#25CD2599" />
        <ArCharPayout color="#DB303099" />
      </div>
      <h1 className="text-3xl my-12 font-semibold">Payouts</h1>

      {/* <Table */}
      <TableP />
    </div>
  );
}

export default PayoutHome;
