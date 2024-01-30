import React from 'react';

export const LookOut = () => {
  return (
    <div className="p-4 md:p-8">
      <h1 className='font-bold text-2xl md:text-3xl text-center'>
        ON THE LOOK OUT
      </h1>
      <p className="text-center">When gambling stops being a fun experience, it starts being a problem.</p>
      <br />
      <p className="text-center">
        We’re doing everything we can to make sure that doesn’t happen, and we are constantly working on our smart data algorithms that give us a heads up to step in and support customers if we see something unusual in their play.
      </p>
      <br />
      <p className="text-center">
        But sometimes you’ll be in the best position to spot if someone might be playing outside their comfort zone. Below are some of the signs to watch out for, and some steps you can take to help.
      </p>
      <br />
      <p className="text-center">
        Some of the signs to look out for:
      </p>
      <div className='text-center mt-2'>
        <ul className="list-disc">
          <li>They’re obsessed with gambling, talking about it all the time, or constantly checking the betting apps on their phone.</li>
          <li>They’re betting larger amounts or more frequently.</li>
          <li>They’ve missed work, college, or uni because of gambling.</li>
          <li>They’re using betting as an escape and are being secretive about their betting.</li>
          <li>They’ve asked to be bailed out if they’ve lost a bet or multiple bets.</li>
        </ul>
      </div>
      <h1 className='font-bold text-xl text-center'>
        HOW YOU CAN HELP
      </h1>
      <p className="text-center">
        If you notice some of the signs above in a friend or family member, what can you do?
      </p>
      <div className="text-center">
        <p className="mb-2">
          <span className="block mb-2">
            1. SPEAK UP: Maybe you’re not the best person to mention it to them, but you probably do know the person best placed to say it.
          </span>
          <br />
          <span className="block mb-2">
            2. GET THE TEAM TOGETHER: Often it helps if it’s two or three people, so that they can see it’s not just one person’s opinion. No matter who or how, ultimately the person in question will understand that you’re trying to look out for their best interests.
          </span>
          <br />
          <span className="block mb-2">
            3. SHARE YOUR KNOWLEDGE: If you need to show them proof, you can start by showing them our list above. Then you can share the tools and organisations they can turn to for support – you’ll be able to find these under “Where to go”
          </span>
        </p>
      </div>
    </div>
  );
};
