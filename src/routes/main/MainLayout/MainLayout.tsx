import React, {useState} from 'react';
import clsx from 'clsx';
import {useTheme} from '@material-ui/styles';
import {Theme, useMediaQuery} from '@material-ui/core';

import {Sidebar, Topbar} from './components';
import {useStyles} from 'routes/main/MainLayout/MainLayout.style';
import {SidebarNavPage} from 'routes/main/MainLayout/components/Sidebar/components/SidebarNav/SidebarNav';
import PeopleIcon from '@material-ui/icons/People';

const MainLayout: React.FC = ({children}) => {
  const classes = useStyles();
  const theme: Theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true,
  });

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const shouldOpenSidebar = isDesktop ? true : openSidebar;

  const pages: SidebarNavPage[] = [
    {
      title: 'Home',
      href: '/',
      icon: <PeopleIcon />,
    },
    {
      title: 'Events',
      href: '/events',
      icon: <PeopleIcon />,
    },
  ];

  return (
    <div
      className={clsx({
        [classes.root]: true,
        [classes.shiftContent]: isDesktop,
      })}
    >
      <Topbar onSidebarOpen={handleSidebarOpen} />
      <Sidebar
        pages={pages}
        onClose={handleSidebarClose}
        open={shouldOpenSidebar}
        variant={isDesktop ? 'persistent' : 'temporary'}
      />
      <main className={classes.content}>{children}</main>
    </div>
  );
};

export default MainLayout;
