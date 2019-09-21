import React from 'react';
import TeamMember from './TeamMember.js';
const Team = () =>{
  let list = [
    {
      name: "Alex Luthar",
      position: "Co Founder",
      twitter: "aluthar",
      facebook: "aluthar",
      dribble: "aluthar"
    },
    {
      name: "Alex Luthar",
      position: "Co Founder",
      twitter: "aluthar",
      facebook: "aluthar",
      dribble: "aluthar"
    },
    {
      name: "Alex Luthar",
      position: "Co Founder",
      twitter: "aluthar",
      facebook: "aluthar",
      dribble: "aluthar"
    },
    {
      name: "Alex Luthar",
      position: "Co Founder",
      twitter: "aluthar",
      facebook: "aluthar",
      dribble: "aluthar"
    },
    {
      name: "Alex Luthar",
      position: "Co Founder",
      twitter: "aluthar",
      facebook: "aluthar",
      dribble: "aluthar"
    }
  ];
  return (
    <div className="about-us-content-single">
      <div className="row">
        <div className="col-md-4">
          <h2 className="brand-title">Our Team<span className="dot">.</span></h2>
        </div>
        <div className="col-md-8">
          <div className="rq-team-members">
            <div className="row">
              {list.map((member,index)=>
                <TeamMember key={index} index={index+1} member={member}/>
              )}
              <div className="col-md-4 col-sm-6">
                <div className="member-single">
                  <img src={require("../img/about-us/about-us-join-team.png")} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Team;
