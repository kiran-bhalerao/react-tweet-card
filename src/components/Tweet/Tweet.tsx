import useLinksUsernamesHashtags from 'hooks/useLinksUsernamesHashtags';
import React, { useRef } from 'react';
import className from 'utils/className';
import globalClassName from 'utils/globalClassName';
import css from './Tweet.module.css';

type TweetProps = {
  tweet: string;
  img?: string;
};

const Tweet = ({ tweet, img }: TweetProps) => {
  const ref = useRef(null);
  useLinksUsernamesHashtags(ref, tweet);

  return (
    <>
      <p
        ref={ref}
        {...className(
          globalClassName('tweet'),
          css.tweet,
          tweet.length > 180 && css.longTweet,
        )}
      >
        {tweet}
      </p>
      {!!img && <img src={img} alt="img" className={globalClassName('img')} />}
    </>
  );
};

export default Tweet;
