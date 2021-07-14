import React, { useState, useEffect } from "react";
import { CardStyle } from "./style";
import { HeartOutlined, HeartTwoTone } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { updateData, getData } from "../../pages/home/slice";

function Card(post) {
  const dispatch = useDispatch();
  const [heartFalse, setHeartFalse] = useState("");
  const [heartTrue, setHeartTrue] = useState("");
  // console.log(post);
  const onLikeBtnClick = async () => {
    await dispatch(
      updateData({ ...post.data, likeCount: post.data.likeCount + 1 })
    );
    dispatch(getData());
  };

  useEffect(() => {
    console.log("setState");
    if (post?.data.likeCount > 0) {
      setHeartFalse("heartFalse-no");
      setHeartTrue("heartTrue-yes");
    }
    if (post?.data.likeCount === 0) {
      setHeartFalse("heartFalse-yes");
      setHeartTrue("heartTrue-no");
    }
  }, [post?.data.likeCount]);

  return (
    <CardStyle>
      <div className="header">
        <h1>{post.data.title}</h1>
      </div>
      <h3>{post.data.author}</h3>
      <h4>{post.data.content}</h4>
      <HeartOutlined className={heartFalse} onClick={onLikeBtnClick} />
      <HeartTwoTone
        className={heartTrue}
        onClick={onLikeBtnClick}
        twoToneColor="#eb2f96"
      />
      <p>{post.data.likeCount}</p>
    </CardStyle>
  );
}

export default Card;
