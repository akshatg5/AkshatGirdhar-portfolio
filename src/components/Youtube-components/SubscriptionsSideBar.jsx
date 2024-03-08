import { SubscriptionItem } from "./SubscriptionsItem";

const Subscriptions = [
  {
    channelImg: "../assets/youtube-logo.jpg",
    channelName: "Casey Neistat",
  },
  {
    channelImg: "/youtube-logo.png",
    channelName: "Casey Neistat",
  },
  {
    channelImg: "/youtube-logo.png",
    channelName: "Casey Neistat",
  },
  {
    channelImg: "/youtube-logo.png",
    channelName: "Casey Neistat",
  },
  {
    channelImg: "/youtube-logo.png",
    channelName: "Casey Neistat",
  },
];

export const SubsriptionSideBar = () => {
  return (
    <div className="pt-2 pb-2 ">
      <h2 className="ml-2 text-lg">Subscriptions</h2>
      {Subscriptions.map((subs, index) => (
        <SubscriptionItem
          key={index}
          channelImg="../assets/youtube-logo.jpg"
          channelName={subs.channelName}
        />
      ))}
    </div>
  );
};
