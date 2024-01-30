import React from 'react';

const ProtectingMinors = () => {
  return (
    <div className="flex items-center justify-center p-4 md:p-8 mb-2">
      <div className="w-full max-w-xl"> 
        <h1 className='font-bold text-center mb-4'>PROTECTING MINORS</h1>
        <p className="text-center">
          We use age verification checks on every single account to confirm that our customers are 18 or older and legally old enough to gamble.<br />
          If we are unable to confirm a customer’s age through electronic checks, we suspend the account and request proof of age documentation.<br />
          However, we know kids can often use their parents' phones, tablets, and laptops, and that you might still be logged in to an account. As a result, gaming companies and parents must work together to protect children from underage gaming.
        </p>
        <p className="text-lg font-bold mb-2">Tips for Protecting Minors:</p>
        <ul className="list-disc pl-6">
          <li>Keep your username, password, and deposit details out of reach. Like, not written down on a post-it stuck to your laptop.</li>
          <li>Don’t save passwords or use auto-fill on your computer.</li>
          <li>If there are kids around, always log out of your Betfair account.</li>
          <li>Install website blocking software, such as NetNanny, which allows you to control and block access to gambling websites both on PC and mobile.</li>
          <li>Educate your kids about the legality and potential damage of underage gambling.</li>
          <li>Limit the amount of time your children spend online.</li>
          <li>Familiarize yourself with the built-in parental tools on your Mobile/Tablet/PC/TV devices.</li>
        </ul>
        <p className='md:text-left text-left mt-1'>
          If you feel you may have an issue with underage gambling or you just want to learn more. BigDeal, run by GamCare, is an organisation aimed at young people that offers education and support about gambling.
        </p>
      </div>
    </div>
  );
}

export default ProtectingMinors;
