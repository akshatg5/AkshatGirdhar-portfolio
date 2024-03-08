import { FirstDivSideBar } from "./FirstDivSideBar";
import { SubsriptionSideBar } from "./SubscriptionsSideBar";
import { UserSideBar } from "./UserSideBar";

export const SideBar = () => {
  return (
    <div className="w-96">
    <FirstDivSideBar />
    <UserSideBar /> 
    <SubsriptionSideBar />
    </div>
  );
};
