import React from 'react';
const AboutUs = () =>{
  return (
    <div className="about-us-content-single">
      <div className="row">
        <div className="col-md-4">
          <h2 className="brand-title">The Brand<span className="dot">.</span></h2>
        </div>
        <div className="col-md-8">
          <div className="about-us-text">
            <p><strong>Lorem Ipsum is simply dummy text of the printing and typesetting industry</strong></p>
            <p>
            Suspendisse ultricies scelerisque turpis, elementum ornare arcu posuere mollis.
            Donec vitae tempor ante, ut tempus augue. Maecenas aliquam, ante quis egestas molestie,
            ipsum sapien faucibus lorem, ac placerat magna purus id quam. Proin id felis sapien.
            </p>
            <p>Mauris metus eros, finibus et eros eget, vehicula tincidunt ex.
            Integer dictum turpis felis, at gravida lectus vestibulum et. Mauris vitae massa pellentesque,
            rutrum lacus sit amet, dictum massa.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutUs;
