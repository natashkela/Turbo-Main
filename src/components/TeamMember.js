import React from 'react';
import PropTypes from 'prop-types';
const TeamMember = ({member,index})=>{
  let bgImage = require("../img/about-us/about-us-our-team-"+index+".jpg");
  return (
    <div className="col-md-4 col-sm-6">
      <div className="member-single" style={{backgroundImage:'url("'+bgImage+'")',backgroundSize: 'cover',backgroundPosition: 'top center', backgroundRepeat: 'no-repeat'}}>
        <div className="member-info">
          <a href="#">{member.name}</a>
          <p>{member.position}</p>
          <ul className="list-unstyled social-list">
            <li><a href={"www.twiter.com/"+member.twitter}><i className="social_twitter"></i></a></li>
            <li><a href={"www.facebook.com/"+member.facebook}><i className="social_facebook"></i></a></li>
            <li><a href={"www.dribble.com/"+member.dribble}><i className="social_dribbble"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
TeamMember.propTypes = {
  member: PropTypes.object
}
export default TeamMember;
