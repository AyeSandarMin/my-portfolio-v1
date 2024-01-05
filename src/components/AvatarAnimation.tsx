import React from "react";
import Lottie from "react-lottie-player";

import avatarJson from './home-banner.json'

const AvatarAnimation: React.FC = () => {

  return (
    <div>
      <Lottie
        loop
        animationData={avatarJson}
        play
        style={{ width: '100%', height: 450 }}
      />
    </div>
  );
};

export default AvatarAnimation;
