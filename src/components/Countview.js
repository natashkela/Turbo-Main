import React from 'react';
import CountUp from 'react-countup';
const Countview = () => {
  const countDuration = 4;
  let list = [
    {
      title:"User Access",
      start:0,
      end:12640,
      duration: countDuration
    },
    {
      title:"Cars",
      start:0,
      end:8976,
      duration: countDuration
    },
    {
      title:"Reviews",
      start:0,
      end:256,
      duration: countDuration
    }
  ];
  return(
    <div className="rq-counting-list">
      <ul className="list-unstyled">
        {list.map((count,index)=>
          <li key={index}>
            <CountUp className="count-result" start={count.start} end={count.end} duration={count.duration} />
            <span className="count-category">{count.title}</span>
          </li>
        )}
      </ul>
    </div>
  )
}
export default Countview;
