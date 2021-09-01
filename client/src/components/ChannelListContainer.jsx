import React from "react";
import { ChannelList, useChatContext } from "stream-chat-react";
import Cookies from "universal-cookie";

import {
  ChannelSearch,
  TeamChannellist,
  TeamChannelPreview,
} from "stream-chat-react";
import connecticon from "../assets/creekconnect.png";
//import logOuticon from "../assets/logout.png";

const SideBar = () => (
  <div className="channel-list__sidebar">
    <div className="channel-list__sidebar__icon1">
      <div classname="icon1__inner">
        <img src={connecticon} alt="connect" width="30" />
      </div>
    </div>

    <div className="channel-list__sidebar__icon2">
      <div classname="icon2__inner">
        <img src={loginicon} alt="logout" width="30" />
      </div>
    </div>
  </div>
);

const CompanyHeader = () => (
  <div className="channel-list__header">
    <p className="channel-list__header__text">CHAT APP</p>
  </div>
);

const ChannelListContainer = () => {
  return (
    <>
      <Sidebar />
      <div className="channel-list__list__wrapper">
        <CompanyHeader />
        <ChannelSearch />
      </div>
    </>
  );
};

export default ChannelListContainer;
