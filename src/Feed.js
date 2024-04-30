import React, { useState } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import InputOption from "./InputOption";
import ImageIcon from "@mui/icons-material/Image";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import EventIcon from "@mui/icons-material/Event";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import Post from "./Post";
// import { db } from './firebase';

function Feed() {
  const [posts, setPosts] = useState([]);

  // useEffect(() => {
  // //   db.collection('posts').onSnapshot((snapshot) =>
  // //     setPosts(
  // //       snapshot.docs.map((doc) => ({
  // //         id: doc.id,
  // //         data: doc.data(),
  // //        }))
  // //      )
  // //   );
  // // }, []);
  const sendPost = (e) => {
    e.preventDefault();
  };

  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <CreateIcon />
          <form>
            <input type="text" />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed_inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#7085f9" />
          <InputOption Icon={VideoLibraryIcon} title="Video" color="#5f9b41" />
          <InputOption Icon={EventIcon} title="Events" color="#cd7316" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#E16745"
          />
        </div>
      </div>
      {/* Posts */}
      {posts.map((Post) => {
        <Post />;
      })}
      ;
      <Post
        name="Michael Ogozi"
        description="this is a test"
        message="WOW it worked !!!"
      />
    </div>
  );
}

export default Feed;
