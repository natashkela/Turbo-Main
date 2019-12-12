import React from 'react';
import PropTypes from 'prop-types';
import companyLogo from '../../assets/img/company-logo.png';
import NavbarItem from './Navbar-Item.js';
import classes from './Navbar.module.css';
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import DateRangePickerWrapper from '../DateRangePickerWrapper/DateRangePickerWrapper';
import 'react-dates/lib/css/_datepicker.css';
import { CSSTransition } from 'react-transition-group';
// import HeaderSearchbox from '../../components/Searchbox/HeaderSearchbox.js';
const Navbar = ({isLoggedIn,hasCar, includesSearchbox}) => {
  // let nav = '{"main":[ { "mainMenuItem":{ "name":"Home", "href":"index.html" }, "dropdownMenuItems":{} }, { "mainMenuItem":{ "name":"Listing", "href":"car-listing-grid.html" }, "dropdownMenuItems":[ { "name":"Car listing grid", "href":"car-listing-grid.html" }, { "name":"Car listing list", "href":"car-listing-list.html" }, { "name":"ListingDetails", "href":"listing-detail.html" } ] }, { "mainMenuItem":{ "name":"Blog", "href":"blog-listing.html" }, "dropdownMenuItems":[ { "name":"Blog Listing", "href":"blog-listing.html" }, { "name":"Blog Post", "href":"post-single.html" } ] }, { "mainMenuItem":{ "name":"Page", "href":"#" }, "dropdownMenuItems":[ { "name":"About", "href":"about-us.html" }, { "name":"Contact Us", "href":"contact-us.html" }, { "name":"Checkout", "href":"checkout.html" }, { "name":"Shopping Cart", "href":"shopping-cart.html" }, { "name":"Registration", "href":"registration.html" } ] }]}';
  // let navigationItems = JSON.parse(nav);
    isLoggedIn = true;
  let navigationItems = {
      main:[
          // {
          //     mainMenuItem: { name:"Home", "href":"index.html" },
          //     dropdownMenuItems:{}
          // },
          // {
          //     mainMenuItem: { name:"Listing", href:"car-listing-grid.html" },
          //     dropdownMenuItems:[
          //         { name:"Car listing grid", href:"car-listing-grid.html" },
          //         { name:"Car listing list", href:"car-listing-list.html" },
          //         { name:"ListingDetails", href:"listing-detail.html" } ]
          // },
          // {
          //     mainMenuItem: { name:"Blog", href:"blog-listing.html" },
          //     dropdownMenuItems:[
          //         { name:"Blog Listing", href:"blog-listing.html" },
          //         { name:"Blog Post", href:"post-single.html" } ]
          // },
          // {
          //     mainMenuItem:{ name:"Page", href:"#" },
          //     dropdownMenuItems:[
          //         { name:"About", href:"about-us.html" },
          //         { name:"Contact Us", href:"contact-us.html" },
          //         { name:"Checkout", href:"checkout.html" },
          //         { name:"Shopping Cart", href:"shopping-cart.html" },
          //         { name:"Registration", href:"registration.html" } ]
          // }
          {
              mainMenuItem:{ name:"Learn More", href:"#" },
              dropdownMenuItems:[
                  { name:"How Turbo Works?", href:"/how-it-works" },
                  { name:"Trust & Safety", href:"/trust" },
                  { name:"Rent A Car", href:"/rent-car" },
                  { name:"Become a Host", href:"/join-us" },
                  { name:"About Us", href:"/about" },
                  { name:"Contact Support", href:"/contact" },
                  { name:"Help Center", href:"/help" },
                  { name:"FAQs", href:"/faqs" }
              ]
          }
          ]
  };
  let headerSearchbox = '';
  // if(includesSearchbox){
  //   headerSearchbox = <Searchbox />
  // }
  return (
    <nav className="navbar navbar-default" id="sticker">
      <div className="container-fluid padding-sides-20">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="index.html"><img src={companyLogo} alt="" /></a>
        </div>
          <div className={classes.AllMenuItemsContainer}>
        <div className={classes.SearchboxContainer}>
          <div className={classes.SearchboxInput}>
              <input type="text" className="rq-form-element pickup-location" placeholder="Pickup Location" />
          </div>
          <div>
              <DateRangePickerWrapper
                  anchorDirection="left"
                  autoFocus
                  autoFocusEndDate={false}
                  block={false}
                  customArrowIcon={null}
                  customCloseIcon={null}
                  customInputIcon={null}
                  disabled={false}
                  // displayFormat={function noRefCheck(){}}
                  enableOutsideDays={false}
                  endDateId="endDate"
                  endDatePlaceholderText="End Date"
                  horizontalMargin={0}
                  initialEndDate={null}
                  initialStartDate={null}
                  initialVisibleMonth={null}
                  // isDayBlocked={function noRefCheck(){}}
                  // isDayHighlighted={function noRefCheck(){}}
                  // isOutsideRange={function noRefCheck(){}}
                  isRTL={false}
                  keepOpenOnDateSelect={false}
                  minimumNights={1}
                  monthFormat="MMMM YYYY"
                  navNext={null}
                  navPosition="navPositionTop"
                  navPrev={null}
                  numberOfMonths={1}
                  // onClose={function noRefCheck(){}}
                  // onNextMonthClick={function noRefCheck(){}}
                  // onPrevMonthClick={function noRefCheck(){}}
                  orientation="horizontal"
                  phrases={{
                      calendarLabel: 'Calendar',
                      // chooseAvailableEndDate: function noRefCheck(){},
                      // chooseAvailableStartDate: function noRefCheck(){},
                      clearDates: 'Clear Dates',
                      closeDatePicker: 'Close',
                      // dateIsSelected: function noRefCheck(){},
                      // dateIsSelectedAsEndDate: function noRefCheck(){},
                      // dateIsSelectedAsStartDate: function noRefCheck(){},
                      // dateIsUnavailable: function noRefCheck(){},
                      enterKey: 'Enter key',
                      escape: 'Escape key',
                      focusStartDate: 'Interact with the calendar and add the check-in date for your trip.',
                      hideKeyboardShortcutsPanel: 'Close the shortcuts panel.',
                      homeEnd: 'Home and end keys',
                      jumpToNextMonth: 'Move forward to switch to the next month.',
                      jumpToPrevMonth: 'Move backward to switch to the previous month.',
                      keyboardBackwardNavigationInstructions: 'Navigate backward to interact with the calendar and select a date. Press the question mark key to get the keyboard shortcuts for changing dates.',
                      keyboardForwardNavigationInstructions: 'Navigate forward to interact with the calendar and select a date. Press the question mark key to get the keyboard shortcuts for changing dates.',
                      keyboardShortcuts: 'Keyboard Shortcuts',
                      leftArrowRightArrow: 'Right and left arrow keys',
                      moveFocusByOneDay: 'Move backward (left) and forward (right) by one day.',
                      moveFocusByOneMonth: 'Switch months.',
                      moveFocusByOneWeek: 'Move backward (up) and forward (down) by one week.',
                      moveFocustoStartAndEndOfWeek: 'Go to the first or last day of a week.',
                      openThisPanel: 'Open this panel.',
                      pageUpPageDown: 'page up and page down keys',
                      questionMark: 'Question mark',
                      returnFocusToInput: 'Return to the date input field.',
                      roleDescription: 'datepicker',
                      selectFocusedDate: 'Select the date in focus.',
                      showKeyboardShortcutsPanel: 'Open the keyboard shortcuts panel.',
                      upArrowDownArrow: 'up and down arrow keys'
                  }}
                  regular={false}
                  renderCalendarDay={undefined}
                  renderDayContents={null}
                  renderMonthText={null}
                  reopenPickerOnClearDates={false}
                  required={false}
                  screenReaderInputMessage=""
                  showClearDates={false}
                  showDefaultInputIcon={false}
                  small={false}
                  startDateId="startDate"
                  startDatePlaceholderText="Start Date"
                  // stateDateWrapper={function noRefCheck(){}}
                  withFullScreenPortal={false}
                  withPortal={false}
              />
              {/*<input type="date" className="rq-form-element datepicker" />*/}
          </div>
        </div>
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            {Object.values(navigationItems["main"]).map((navItem,index)=>
              <NavbarItem key={index} mainMenuItem={navItem} />
            )}
            {isLoggedIn &&
                  <li>
                    <a href="/list-car">List A Car</a>
                  </li>
            }
            {isLoggedIn &&
              <li className="dropdown">
                <a href="/profile" className="dropdown-toggle" data-toggle="dropdown" role="button"
                                                                                   aria-haspopup="true" aria-expanded="false">My Profile<span className="ion-chevron-down"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="/profile">Profile</a></li>
                  {hasCar && <li><a href="Account">Account</a></li> }
                  <li><a href="/trips">Trips</a></li>
                  <li><a href="/my-cars">My Cars</a></li>
                  <li><a href="/sales">Sales</a></li>
                  <li><a href="/payments">Payments</a></li>
                  <li><a id="logout" href="#">Log Out</a></li>
                </ul>
              </li>
            }
            {isLoggedIn &&
              <li>
                  <a href="/messages">Messages</a>
              </li>
            }
            {!isLoggedIn &&
              <li className="login-register-link right-side-link"><a href="registration.html">
                <i className="icon_lock-open_alt"></i>Login</a>
              </li>
            }
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
                                                                         aria-haspopup="true" aria-expanded="false">ENG<span className="ion-chevron-down"></span></a>
              <ul className="dropdown-menu with-language">
                <li><a href="#">ENG</a></li>
                <li><a href="#">RUS</a></li>
                <li><a href="#">GEO</a></li>
              </ul>
            </li>
          </ul>
        </div>
          </div>
      </div>
    </nav>
  );
}
Navbar.propTypes = {
  isLoggedIn: PropTypes.bool,
  hasCar: PropTypes.bool,
  includesSearchbox: PropTypes.bool
}
export default Navbar;
