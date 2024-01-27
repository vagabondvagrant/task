import React from 'react';
import DepositLimitIcon from './ds98431_gamblinghelpline_deposit_limit_icon_v1.webp';
import DownloadIcon from './ds98431_gamblinghelpline_download_icon_v1.webp';
import BellIcon from './ds98431_gamblinghelpline_bell_icon_v1.webp';
import TimeoutIcon from './ds98431_gamblinghelpline_timeout_v1.webp';
import SelfExclusionIcon from './ds98431_gamblinghelpline_self_exclusion_icon_v1.webp';
import BudgetCalculatorIcon from './ds98431_gamblinghelpline_budget_calculator_icon_v1.webp';

const ThirdComp = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
        {[
          { icon: DepositLimitIcon, title: 'DEPOSIT LIMIT', paragraph: "To keep things fun and fair, we’ll help you keep tabs on spending. When you deposit money to Betfair, we’ll double check it doesn’t exceed the limit you set for the day, week, or month. Pretty clever.\n\nIf you decrease the amount or frequency (making the limit more restrictive), it will come into effect immediately.\n\nPlease remember that deposit limit increases come into effect after a cooling off period of 24 hours." },
          { icon: DownloadIcon, title: 'LOSS LIMIT', paragraph: "Give yourself a safety net by setting a limit on your daily, weekly, monthly, or yearly losses.\n\nWe all want to make the most of game day! That’s why we’ve created your Loss Limit tool, so you can set a cap on your potential losses each calendar day, week, month, or year. It’s based on your net losses, taking winnings into account, so if you buy in for 50, then win 10, your net loss will be 40.\n\nYou can set Loss Limits on specific product types such as Casino & Bingo, Virtual Sports, or All Products. You can also set up transfer limits from your main wallet to your Poker or Exchange Games wallet." },
          { icon: BellIcon, title: 'GAMING TIME CHECK', paragraph: 'Set up timed reminders for a handy nudge to take a break when you’ve been online playing for a certain amount of time.\n\nWith Gaming Time Checks, you can set yourself reminders to take a break from playing and to notify you of your net position in that session.\n\nYour Gaming Time Check will be applied per Gaming session and works any time you play games with real money. It’s initiated by a bet placement.\n\nSuch a session includes the betting activity on all games played on Casino, Slots, Bingo etc… which take place in the same Betfair session.\n\nYou choose the intervals that suit you, and after that amount of time has passed, a message with your handy time check and your net position for that session will pop up.\n\nWhen you update or set a Gaming Time Check, you’ll need to log out of your account for this to take effect.' },
          { icon: TimeoutIcon, title: 'TIMEOUT', paragraph: 'Even champions take a half-time break.\n\nSometimes we all need a break. That’s why we thought it only fair to help you take a pause from playing with Betfair.\n\nYou can set your Time Out to press pause on your account for up to 30 days. You won’t be able to access your account whilst your Time Out is in place.' },
          { icon: SelfExclusionIcon, title: 'SELF EXCLUSION', paragraph: 'Take yourself out of the game!\n\nSometimes you might need more than a short Time Out. Self Exclusion is that extra pair of hands that helps you step away from gambling with us for a longer time.\n\nHow does it work?\n\nYour Self Exclusion tool can block you for six months or longer. You can pick particular products to exclude from, for example, you could just exclude from Gaming or Virtuals, or you can sit out from all our products.\n\nWe’re serious about supporting you in your decision to sit out. We can offer you further support or we can connect you with professional services dedicated to gambling support. Our Customer Support team is always ready to listen and keen to offer solutions.\n\nThis action cannot be reversed under any circumstances.\n\nIf you would like to close your account for other reasons, please Contact Us.' },
          { icon: BudgetCalculatorIcon, title: 'BUDGET CALCULATOR', paragraph: 'Get ahead of the game!\n\nUse our Budget calculator to work out what might be affordable for you and set limits today.' },
        ].map((item, index) => (
          <div key={index} className="text-black text-left mt-2">
            <picture>
              <p className="font-bold">{item.title}</p>
              <source srcSet={item.icon} type="image/webp" />
              <img src={item.icon} alt={item.title} className="w-15 h-15 sm:w-16 sm:h-16 mt-3" />
            </picture>
            <p className="sm:block mt-3">{item.paragraph}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ThirdComp;
