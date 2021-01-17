import React, { useState } from 'react';
import Lottie from 'lottie-web-react';
import * as animationData from '../../../utils/lottie/files/waves.json';
import { LOTTIE_PLAY_STATES } from '../../../utils/lottie/constants';

function Waves() {
  const [animMenuIcon] = useState({
    diretion: 1,
    goToAndPlay: null,
    forceFlag: false,
    playingState: LOTTIE_PLAY_STATES.PLAY,
  });

  const defaultOptionAnim = {
    renderer: 'svg',
    loop: true,
    autoplay: true,
    animationData: animationData.default,
    rendererSettings: { preserveAspectRatio: 'xMinYMin slice' },
  };
  return (
    <Lottie
      options={defaultOptionAnim}
      playingState={animMenuIcon.playingState}
      direction={animMenuIcon.diretion}
      goToAndPlay={animMenuIcon.goToAndPlay}
    />
  );
}

export default Waves;
