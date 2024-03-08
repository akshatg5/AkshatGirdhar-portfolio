import { RevenueCard } from "./components/Dukaan-components/RevenueCard";
import { RevenueHighlightedCards } from "./components/Dukaan-components/RevenueCardHighlighted";

export const DukaanAssignment = () => {
  return (
    <div className="grid grid-cols-3">
      <RevenueHighlightedCards title={"Next Payout"} amount={"2,312"} orders={"23"}  />
      <RevenueCard title={"Amount Pending"} amount={"93,678"} orders={"52"} />
      <RevenueCard title={"Amount Processed"} amount={"23,92,321.19"} orders={""} />
    </div>
  );
};
