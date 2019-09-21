import React from 'react';
const PartnerImageContainer = () => {
  let list = [1,2,3,4,5];
  return (
    <div className="rq-partners-section">
      <div className="partners-wrapper">
        {
          list.map((partner,index)=>
            <div key={index} className="partner-single"><a href={"/partner?id="+partner}><img src={require("../img/partner-logo/partner"+partner+".png")} alt="" /></a></div>
          )
        }
      </div>
    </div>
  );
}
export default PartnerImageContainer;
