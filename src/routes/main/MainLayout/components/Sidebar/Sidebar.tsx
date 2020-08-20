import React from 'react';
import clsx from 'clsx';
import {Drawer} from '@material-ui/core';

import {SidebarNav} from './components';
import {useStyles} from 'routes/main/MainLayout/components/Sidebar/Sidebar.style';
import {SidebarNavPage} from 'routes/main/MainLayout/components/Sidebar/components/SidebarNav/SidebarNav';

interface SidebarNavProps {
  pages: SidebarNavPage[];
  className?: string;
  onClose?: () => void;
  open: boolean;
  variant: 'permanent' | 'persistent' | 'temporary' | undefined;
}

const Sidebar: React.FC<SidebarNavProps> = (props) => {
  const {pages, open, variant, onClose, className, ...rest} = props;

  const classes = useStyles();

  return (
    <Drawer
      anchor="left"
      classes={{paper: classes.drawer}}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div {...rest} className={clsx(classes.root, className)}>
        <SidebarNav className={classes.nav} pages={pages} />
      </div>
    </Drawer>
  );
};

export default Sidebar;
