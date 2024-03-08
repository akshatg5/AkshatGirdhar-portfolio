import { YoutubeVideoCard } from "./youtubeCard.";

const VIDEOS = [
  {
    title: "Video 1 || Sample Video Title",
    image: "/image.png",
    profileImg: "/youtube-logo.jpg",
    creator: "Youtube Creator",
    views: "25Mn",
    uploaded: "7 Days ago",
  },
  {
    title: "Video 2 || Another Sample Video",
    image: "/image.png",
    profileImg: "/youtube-logo.jpg",
    creator: "Another Creator",
    views: "15Mn",
    uploaded: "5 Days ago",
  },
  {
    title: "Video 3 || Third Sample Video",
    image: "/image.png",
    profileImg: "/youtube-logo.jpg",
    creator: "Yet Another Creator",
    views: "10Mn",
    uploaded: "2 Days ago",
  },
  {
    title: "Video 4 || Yet Another Sample Video",
    image: "/image.png",
    profileImg: "/youtube-logo.jpg",
    creator: "New Creator",
    views: "30Mn",
    uploaded: "10 Days ago",
  },
  {
    title: "Video 5 || Last Sample Video",
    image: "/image.png",
    profileImg: "/youtube-logo.jpg",
    creator: "Final Creator",
    views: "20Mn",
    uploaded: "1 Day ago",
  },
  {
    title: "Video 5 || Last Sample Video",
    image: "/image.png",
    profileImg: "/youtube-logo.jpg",
    creator: "Final Creator",
    views: "20Mn",
    uploaded: "1 Day ago",
  },
  {
    title: "Video 5 || Last Sample Video",
    image: "/image.png",
    profileImg: "/youtube-logo.jpg",
    creator: "Final Creator",
    views: "20Mn",
    uploaded: "1 Day ago",
  },
  {
    title: "Video 5 || Last Sample Video",
    image: "/image.png",
    profileImg: "/youtube-logo.jpg",
    creator: "Final Creator",
    views: "20Mn",
    uploaded: "1 Day ago",
  },
];

export const VideoGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        
      {VIDEOS.map((video,index) => (
        <div key={index}>
            <YoutubeVideoCard
        title={video.title}
        image={video.image}
        profileImg={video.profileImg}
        creator={video.creator}
        views={video.views}
        uploaded={video.uploaded}
        />
        </div>
      ))}
    </div>
  );
};

// md breakpoint defines the behavior of css for the midpoint breakpoint 
