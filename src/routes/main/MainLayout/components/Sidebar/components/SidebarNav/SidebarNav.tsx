/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import clsx from 'clsx';
import {List, ListItem} from '@material-ui/core';
import {useStyles} from 'routes/main/MainLayout/components/Sidebar/components/SidebarNav/SidebarNav.style';

export interface SidebarNavPageBase {
  title: string;
  href: string;
  icon: React.ReactElement;
}

export interface SidebarNavPage extends SidebarNavPageBase {
  subPages?: SidebarNavSubpage[];
}

export interface SidebarNavSubpage extends SidebarNavPageBase {}

interface SidebarNavProps {
  className?: string;
  pages: SidebarNavPage[];
}

const SidebarNav: React.FC<SidebarNavProps> = ({pages, className, ...rest}) => {
  const classes = useStyles();

  const location = useLocation();

  const PageItemBase: React.FC<{page: SidebarNavPageBase; subPage: boolean}> = ({
    page,
    subPage,
  }) => (
    <ListItem className={classes.item} disableGutters key={page.title}>
      <Link
        to={page.href}
        className={
          location.pathname === page.href
            ? clsx(classes.button, classes.active)
            : classes.button
        }
      >
        <div className={!subPage ? classes.icon : classes.subIcon}>{page.icon}</div>
        {page.title}
      </Link>
    </ListItem>
  );

  const PageItem: React.FC<{page: SidebarNavPage}> = ({page}) => (
    <>
      <PageItemBase page={page} subPage={false} />
      {page.subPages && page.subPages.map((page) => <PageItemBase page={page} subPage />)}
    </>
  );

  return (
    <List {...rest} className={clsx(classes.root, className)}>
      {pages.map((page) => (
        <PageItem page={page} />
      ))}
    </List>
  );
};

export default SidebarNav;
