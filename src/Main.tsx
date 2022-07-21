import React from 'react';
import { Audio, interpolate, Sequence, spring, useCurrentFrame, useVideoConfig } from 'remotion';

import audio from './assets/music/audio.wav';

const Title = () => <h1 style={{ position: 'absolute', top: '40%', width: '100%', textAlign: 'center', fontSize: '5rem' }}>Remotion</h1>;
const SubTitle = () => {
  const frame = useCurrentFrame();
  
  const { fps } = useVideoConfig();

  // const opacity = frame > 30 ? 1 : frame / 30;
  const opacity = (offset: number) => interpolate(frame - offset * 5, [0, 30], [0, 1]);
  const translate = (offset: number) => spring({ frame: frame - offset * 5, fps, to: -100 });

  return (
    <h1 style={{
      position: 'absolute',
      top: '70%',
      width: '100%',
      textAlign: 'center',
      fontSize: '3rem',
    }}>
      {'This is a video was made in react.'.split(' ').map((word, i) => (
        <span
          style={{
            display: 'inline-block',
            marginLeft: 10,
            opacity: opacity(i),
            transform: `translateY(${translate(i)}px)`,
          }}
        >
          {word}
        </span>
      ))}
    </h1>
  )
};

const Main = () => {
  const { fps, durationInFrames } = useVideoConfig();

  return (
    <div style={{ backgroundColor: 'white', flexGrow: 1 }}>
      <Sequence from={0} durationInFrames={durationInFrames}>
        <Title />
      </Sequence>
      <Sequence from={fps} durationInFrames={60}>
        <SubTitle />
      </Sequence>
      <Sequence from={0} durationInFrames={510}>
        <Audio
          src={audio}
          startFrom={0} // if composition is 30fps, then it will start at 2s
          endAt={510} // if composition is 30fps, then it will end at 4s
          // volume={}
        />
      </Sequence>
    </div>
  );
};

export default Main;
