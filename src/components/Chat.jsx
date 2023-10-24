import React, { useContext } from "react";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <i class="fa-solid fa-phone fa-lg"></i>
          <i class="fa-solid fa-video fa-lg"></i>
          <i class="fa-solid fa-circle-info fa-lg"></i>
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
