import React from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { PanelMenu } from 'primereact/panelmenu';

import SideNavStyles from './SideNav.module.scss';

const Sidenav = () => {
  // const adminInfo = useSelector(state => state.application.adminInfo );
  // const { displayName, adminGroups, mail } = adminInfo || {};
  const router = useRouter();
  const checkExpandedNav = [
    'providers',
    'products',
    'documents',
    'navigations',
  ];

  const items = [
    {
      label: 'Dashboard',
      icon: 'pi pi-list',
      command: () => {
        router.push('/dashboard');
      },
      expanded: router.pathname === '/dashboard' ? true : false,
    },
    {
      label: 'Out Patients',
      icon: 'pi pi-user',
      command: () => {
        router.push('/out_patients');
      },
      expanded: router.pathname === '/out_patients' ? true : false,
    },
    {
      label: 'Prescriptions',
      icon: 'pi pi-book',
      command: () => {
        router.push('/prescriptions');
      },
      expanded: router.pathname === '/prescriptions' ? true : false,
    },
    {
      label: 'Appointments',
      icon: 'pi pi-user-plus',
      command: () => {
        router.push('/appointments');
      },
      expanded: router.pathname === '/appointments' ? true : false,
    },
  ];

  return (
    <div className={SideNavStyles.sideNavContainer}>
      <div>
        <PanelMenu model={items} />
      </div>
    </div>
  );
};

export default Sidenav;
