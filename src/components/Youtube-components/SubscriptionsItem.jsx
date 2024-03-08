export const SubscriptionItem = (props) => {
  return (
    <div className="flex ml-5 pt-2 pb-2 cursor-pointer">
      <div className="pr-2">
        <img src="/youtube-logo.jpg" className="w-8 h-8 rounded-3xl" alt="No" />
      </div>
      <div>
        <h2>{props.channelName}</h2>
      </div>
    </div>
  );
};
