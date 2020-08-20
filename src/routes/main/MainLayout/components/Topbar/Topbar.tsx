import React from 'react';
import {Link} from 'react-router-dom';
import clsx from 'clsx';
import {AppBar, Hidden, IconButton, Toolbar} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {useStyles} from 'routes/main/MainLayout/components/Topbar/Topbar.style';
import {useAuthActions, useRouterActions} from 'state/hooks/UseActions';
import {useSelector} from 'react-redux';
import State from 'state/entities/State';
import {LogInIcon, LogOutIcon, UserIcon} from './assets';

interface TopbarProps {
  className?: string;
  onSidebarOpen?: () => void;
}

const Topbar: React.FC<TopbarProps> = (props) => {
  const authActions = useAuthActions();
  const routerActions = useRouterActions();

  const {className, onSidebarOpen, ...rest} = props;

  const classes = useStyles();

  const {user} = useSelector((state: State) => state.auth);

  return (
    <AppBar {...rest} className={clsx(classes.root, className)}>
      <Toolbar>
        <Link to="/" className={classes.logoLink}>
          Logo
        </Link>
        <div className={classes.flexGrow} />
        {user ? (
          <>
            <IconButton
              className={classes.signOutButton}
              color="inherit"
              onClick={() => routerActions.navigateToProfile()}
            >
              <img className={classes.icon} src={UserIcon} alt="Profile" />
            </IconButton>
            <IconButton
              className={classes.signOutButton}
              color="inherit"
              onClick={() => authActions.logout()}
            >
              <img className={classes.icon} src={LogOutIcon} alt="Log out" />
            </IconButton>
          </>
        ) : (
          <IconButton
            className={classes.signOutButton}
            color="inherit"
            onClick={() => routerActions.navigateToLogin()}
          >
            <img className={classes.icon} src={LogInIcon} alt="Log in" />
          </IconButton>
        )}
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onSidebarOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
