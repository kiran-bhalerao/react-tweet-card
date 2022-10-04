import Container from 'components/Container';
import Details from 'components/Details';
import Engagement from 'components/Engagement';
import Tweet from 'components/Tweet';
import TwitterLogo from 'components/TwitterLogo';
import UserDetails from 'components/UserDetails';
import React from 'react';
import './index.css';
import { ThemeOption, TweetCardColors } from './themes';

type TweetCardProps = React.HTMLAttributes<HTMLDivElement> & {
  author: {
    name: string;
    username: string;
    image: string;
    isVerified?: boolean;
    isProtected?: boolean;
  };
  engagement?: {
    replies?: number;
    retweets?: number;
    likes?: number;
  };
  tweet: string;
  img?: string;
  time: Date | string;
  source: string;
  permalink?: string;
  clickableProfileLink?: boolean;
  theme?: ThemeOption;
  colors?: TweetCardColors;
  gradientBackground?: boolean;
  blurredBackground?: boolean;
  fitInsideContainer?: boolean;
  showDetails?: boolean;
  showEngagement?: boolean;
  emojis?: boolean;
};

const TweetCard = ({
  author,
  tweet,
  time,
  source,
  permalink,
  engagement,
  clickableProfileLink,
  showDetails = true,
  showEngagement = true,
  img,
  emojis,
  ...rest
}: TweetCardProps) => (
  <Container {...{ ...rest }}>
    <UserDetails {...{ ...author, clickableProfileLink }} />
    <TwitterLogo {...{ permalink }} />
    <Tweet {...{ tweet, img }} />
    {showDetails && <Details {...{ time, source, permalink }} />}
    {showEngagement && <Engagement {...{ ...engagement, emojis }} />}
  </Container>
);

export default TweetCard;
