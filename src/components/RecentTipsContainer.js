import React from 'react';
import RecentTip from './RecentTip.js';
const RecentTipsContainer = () => {
  let list = [
    {
      id:1,
      date:"24 March, 2016",
      title: "Rent A Car So Easiest With A Few Minutes From Turbo"
    },
    {
      id:2,
      date:"25 March, 2016",
      title: "Experience awesome travel on Mazda of Selena"
    },
    {
      id:3,
      date:"26 March, 2016",
      title: "Rent A Car So Easiest With A Few Minutes From Turbo"
    }
  ];
  return (
    <div className="rq-tips-tricks">
      <h1 className="rq-title">Tips &amp; Tricks<span className="rq-dot"></span></h1>
      <div className="row">
        {list.map((tip,index)=>
          <RecentTip key={index} id={tip.id} date={tip.date} title={tip.title} />
        )}
      </div>
    </div>
  );
}
export default RecentTipsContainer;
