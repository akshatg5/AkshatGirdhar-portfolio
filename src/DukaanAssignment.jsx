import { Appbar } from "./components/Dukaan-components/Appbar";
import { Button1 } from "./components/Dukaan-components/Button1";
import { Button2 } from "./components/Dukaan-components/Button2";
import { Overviewbar } from "./components/Dukaan-components/Overviewbar";
import { RevenueCard } from "./components/Dukaan-components/RevenueCard";
import { RevenueCardBlue } from "./components/Dukaan-components/RevenueCardHighlighted";
import { Sidebar } from "./components/Dukaan-components/Sidebar";
import { Table } from "./components/Dukaan-components/Table";
import { Tablesearch } from "./components/Dukaan-components/Tablesearch";

export const DukaanAssignment = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow">
        <Appbar />

        <hr></hr>
        <div className="bg-slate-200 pt-2 pb-5">
          <Overviewbar />
          <div className="grid grid-cols-3">
            <RevenueCardBlue
              title={"Next Payout"}
              amount={"2,312.23"}
              orders={"23"}
              Payoutdate={"Today,04:00pm"}
            />
            <RevenueCard
              title={"Amount Pending"}
              amount={"93,678"}
              orders={"52"}
            />
            <RevenueCard
              title={"Amount Processed"}
              amount={"23,92,321.19"}
              orders={""}
            />
          </div>
          <div className="pl-5 pt-5">
          <h1 className="font-semibold text-xl">Transactions | This month</h1>
          </div>
          <div className="flex">
          <Button1 btnText={"Payouts (22)"} />
          <Button2 btnText={"Refunds (6)"} />
          </div>
        </div>
        <Tablesearch  />
        <hr className="mt-4"></hr>
        <Table />
      </div>
    </div>
  );
};
