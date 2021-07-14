import React, { useState, useEffect } from "react";
import { CardStyle } from "./style";
import { HeartOutlined, HeartTwoTone } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { updateData, getData } from "../../pages/home/slice";

function Card(props: any) {
  const dispatch = useDispatch();
  const [heartFalse, setHeartFalse] = useState<string>("");
  const [heartTrue, setHeartTrue] = useState("");
  // console.log(post);
  const onLikeBtnClick = async () => {
    await dispatch(
      updateData({ ...props.data, likeCount: props.data.likeCount + 1 })
    );
    dispatch(getData());
  };

  useEffect(() => {
    console.log("setState");
    if (props?.data.likeCount > 0) {
      setHeartFalse("heartFalse-no");
      setHeartTrue("heartTrue-yes");
    }
    if (props?.data.likeCount === 0) {
      setHeartFalse("heartFalse-yes");
      setHeartTrue("heartTrue-no");
    }
  }, [props?.data.likeCount]);

  return (
    <CardStyle>
      <div className="header">
        <h1>{props.data.title}</h1>
      </div>
      <h3>{props.data.author}</h3>
      <h4>{props.data.content}</h4>
      <HeartOutlined className={heartFalse} onClick={onLikeBtnClick} />
      <HeartTwoTone
        className={heartTrue}
        onClick={onLikeBtnClick}
        twoToneColor="#eb2f96"
      />
      <p>{props.data.likeCount}</p>
    </CardStyle>
  );
}

export default Card;
