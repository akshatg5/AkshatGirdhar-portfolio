import { RevenueCard } from "./components/Dukaan-components/RevenueCard";
import { RevenueCardBlue } from "./components/Dukaan-components/RevenueCardHighlighted";
import { Sidebar } from "./components/Dukaan-components/Sidebar";

export const DukaanAssignment = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow">
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
      </div>
    </div>
  );
};
