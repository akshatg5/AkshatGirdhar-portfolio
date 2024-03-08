export function YoutubeVideoCard(props) {
  return (
    <div className="p-2 cursor-pointer ml-2 mr-2">
      <img src={props.image} alt="Thumbnail" className={"rounded-xl"} />
      <div className="grid grid-cols-12 pt-2 pb-2">
        <div className="col-span-1">
          <img className={" h-8 w-8 rounded-3xl center"} src={props.profileImg} />
        </div>
        <div className="col-span-11 pl-2">
          {props.title}
          <div className="col-span-11 text-gray-500 ">{props.creator}</div>
          <div className="col-span-11 text-gray-500">{props.views} | {props.uploaded}</div>
        </div>
      </div>
    </div>
  );
}
