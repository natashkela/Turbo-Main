import React from 'react';
import PropTypes from 'prop-types';
import ListYourCarGeneralInfo from './ListYourCarGeneralInfo';
import ListYourCarProfilePhoto from './ListYourCarProfilePhoto';
import ListYourCarMobileNumber from './ListYourCarMobileNumber';
import ListYourCarDetails from './ListYourCarDetails';
import ListYourCarAvailability from './ListYourCarAvailability';
import ListYourCarPhotos from './ListYourCarPhotos';
const ListYourCarContent = ({tab, isLoggedIn, customerInformation}) => {
  return (
    <div>
      {tab.uniqueName == "general-info" &&
        <ListYourCarGeneralInfo />
      }
      {tab.uniqueName == "profile-photo" &&
        <ListYourCarProfilePhoto isLoggedIn={isLoggedIn} customerInformation={customerInformation}/>
      }
      {tab.uniqueName == "mobile-number" &&
        <ListYourCarMobileNumber isLoggedIn={isLoggedIn} customerInformation={customerInformation}/>
      }
      {tab.uniqueName == "car-details" &&
        <ListYourCarDetails />
      }
      {tab.uniqueName == "car-availability" &&
        <ListYourCarAvailability />
      }
      {tab.uniqueName == "car-photos" &&
        <ListYourCarPhotos />
      }
    </div>
  );
}
ListYourCarContent.propTypes = {
  tab:PropTypes.object,
  isLoggedIn: PropTypes.bool,
  customerInformation: PropTypes.object
}
export default ListYourCarContent;
