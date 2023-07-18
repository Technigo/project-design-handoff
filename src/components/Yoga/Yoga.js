import React from 'react';
import { StyledYoga, YogaIntro, VideoWrapper, EachVideo, VideoLabels } from 'components/Yoga/Yoga.styles';
import { Header2, SectionDescription } from 'styles/Global';

export const Yoga = () => {
  return (
    <StyledYoga>
      <YogaIntro>
        <Header2 headerColor="#02393F">Our Online Yoga Offering</Header2>
        <SectionDescription descColor="#02393F">Practice yoga conveniently and comfortably from home with our
          <span> online yoga classes</span>.
        Our experienced yoga teachers will guide you through a variety of classes and styles,
        from beginner to advanced, with clear and easy-to-follow instructions.
        </SectionDescription>
      </YogaIntro>
      <VideoWrapper>
        <EachVideo>
          <VideoLabels>
            <p>Yin yoga to calm down</p>
            <p>15 min</p>
          </VideoLabels>
          <video muted controls>
            <source src="/assets/yoga.mp4" type="video/mp4" />
        Your browser does not support video.
          </video>
        </EachVideo>
        <EachVideo display="none">
          <VideoLabels>
            <p>Yin yoga to calm down</p>
            <p>15 min</p>
          </VideoLabels>
          <video muted controls>
            <source src="/assets/yoga.mp4" type="video/mp4" />
        Your browser does not support video.
          </video>
        </EachVideo>
        <EachVideo display="none">
          <VideoLabels>
            <p>Yin yoga to calm down</p>
            <p>15 min</p>
          </VideoLabels>
          <video muted controls>
            <source src="/assets/yoga.mp4" type="video/mp4" />
        Your browser does not support video.
          </video>
        </EachVideo>
      </VideoWrapper>
    </StyledYoga>
  )
}