import React, { useState } from "react";
import { useEffectOnce } from "react-use";
import { fetchPosts } from "./util/api";
import { SinglePost } from "./components/SinglePost";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffectOnce(() => {
    let active = true;
    if (active) {
      fetchPosts().then((result) => setPosts(result));
    }

    const id = setInterval(() => handleNextPost(), 6000);

    return () => {
      active = false;
      clearInterval(id);
    };
  });

  const handleNextPost = () => {
    setCurrentIndex((prev) => (prev < 14 ? prev + 1 : 0));
  };

  if (posts.length > 0) {
    return (
      <SinglePost post={posts[currentIndex]} />
    );
  }

  return <h2>Loading...</h2>;
}

export default App;
