import React, { useState, useEffect } from "react";
import likeIcon from "../like-icon-transparent.png";
import { fetchMedia, fetchUser } from "../util/api";
import { getFullName } from "../util/getFullName";
import { prettifyDate } from "../util/dateFormatter";

interface Props {
  post: {[key: string]: any }
}

export const SinglePost = ({ post }: Props) => {
  const [userImage, setUserImage] = useState<Props["post"] | null>(null);
  const [userData, setUserData] = useState<Props["post"]| null>(null);

  useEffect(() => {
    if (post) {
      fetchMedia(post.mediaId).then((result) => setUserImage(result));
      fetchUser(post?.user?.username).then((result) => setUserData(result));
    }
  }, [post]);

  const fullName = getFullName(
    userData?.["first_name"],
    userData?.["last_name"]
  );

  if (!userImage || !userData) return null;

  return (
    <main>
      <div className="container">
        <div
          className="background"
          style={{ backgroundImage: `url(${userImage?.urls?.full})` }}
        >
          <div>
            <img
              src={userImage?.urls?.full}
              alt={`shot by ${fullName}`}
              className="image"
            />
          </div>
        </div>
        <section className="content">
          <div className="avatar-section">
            {fullName}
            <div className="avatar">
              <img
                src={userData["profile_images"].small}
                alt={`${fullName} avatar`}
                className="avatar-image"
              />
            </div>
          </div>

          <div className="body">
            <h3>{post.title === null ? "No title found!" : post.title}</h3>
            <p>
              {post.description === null
                ? "No description found!"
                : post.description}
            </p>
          </div>

          <div className="footer">
            <div className="icon-section">
              <img src={likeIcon} alt={`received ${post.likes} likes`} className="icon" />
              {`${post.likes} likes`}
            </div>
            <p>{prettifyDate(post.created)}</p>
          </div>
        </section>
      </div>
    </main>
  );
};
