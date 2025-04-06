import Header from '../Header';
import SideNav from '../SideNav';
// import {applicationInitialize} from "store/reduxSlices/applicationSlice";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import Unauthorized from "../Unauthorized";

import LayoutStyles from './Layout.module.scss';

const Layout = ({ children }) => {
  // const isInitialized = useSelector(state => state.application.isInitialized);
  // const dispatch = useDispatch();
  // const adminGroups = useSelector(state => state?.application.adminInfo.adminGroups);

  // useEffect(() => {
  //     if (!isInitialized)
  //         dispatch(applicationInitialize());
  // });

  return (
    <div>
      <Header />
      <main className={LayoutStyles.main}>
        <div className={LayoutStyles.sideNavContainer}>
          <SideNav />
        </div>
        <div>{children}</div>
      </main>
    </div>
  );
};

export default Layout;
