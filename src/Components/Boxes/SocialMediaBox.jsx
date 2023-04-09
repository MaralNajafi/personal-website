import React from "react";
import Tooltip from "../Tooltip/Tooltip";
import SVG from "../SVG/SVG";
import { Link } from "react-router-dom";

export default function SocialMediaBox() {
  const socialMediaItems = [
    {
      name: "GitHub",
      link: "https://github.com/MaralNajafi",
      icon: "github",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/maral-najafi-4a2ba5270/",
      icon: "linked-in",
    },
    {
      name: "Telegram",
      link: "https://t.me/MaralNajafi",
      icon: "telegram",
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/maralnajafi_/",
      icon: "instagram",
    },
  ];
  const SOCIAL_MEDIA_ITEM = socialMediaItems.map((socialMediaItem, index) => {
    return (
      <Tooltip text={socialMediaItem.name} key={index}>
        <Link to={socialMediaItem.link}>
          <SVG id={socialMediaItem.icon} />
        </Link>
      </Tooltip>
    );
  });
  return <ul className="d-flex jc-space-between">{SOCIAL_MEDIA_ITEM}</ul>;
}
