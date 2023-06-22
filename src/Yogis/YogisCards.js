import React from 'react';

const YogisCards = () => {
  return (
    <main className="yoga-container">
      <div className="yogi-card">
        <img src="./images/pexels-cottonbro-studio-4056535 - Edited.png" alt="yoga woman" />
        <p>“This program has really helped me to be more grounded in the present moment.
          I used to envy my dog, who always would finds joy in the little things and be
          very present with what is. He truly is my meditation master!”
        </p>
        <p>
          -Laura, Vienna
        </p>
      </div>
      <div className="yogi-card">
        <img src="./images/laura-vienna.png" alt="woman eating" />
        <p>“I used to have a very troubled relationship with food...
          I would constantly crave something sweet and I have NEVER enjoyed cooking.
          I tried out this program because it combines nutrition with   mindfulness.
          The meal plan is catered/personalized to your own lifestyle and habits,
          and I was surprised how easy (and tasty) the recipes are. I feel so much
          more energized, focused and I no longer eat sweets all the time!”
        </p>
        <p>
          -Laura, Vienna
        </p>
      </div>
      <div className="yogi-card">
        <img src="./images/yoga-woman.png" alt="yoga woman" />
        <p>Being able to be mindful of my body movements for 20 minutes
          was something I never thought I&apos;d be able to do. Now my favorite Saturday activity
          is doing yoga in my garden - even early in the morning!
        </p>
        <p>
          -Laura, Vienna
        </p>
      </div>
    </main>
  );
}

export default YogisCards;