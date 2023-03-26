import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
import { Button } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import s from "./Sidebar.module.scss";
import cn from "classnames";

const Sidebar = (props) => {

  const {
    activeItem = '',
    ...restProps
  } = props;

  const [burgerSidebarOpen, setBurgerSidebarOpen] = useState(false)

  useEffect(() => {
    if (props.sidebarOpened) {
      setBurgerSidebarOpen(true)
    } else {
      setTimeout(() => {
        setBurgerSidebarOpen(false)
      }, 0);
    }
  }, [props.sidebarOpened])

  const dashboardData = useSelector(state => state?.navigation?.dashboardData || {})
  let stages = []
  if (dashboardData.data) {
    stages = Object.keys(dashboardData.data)
  }

  return (
    <nav className={cn(s.root, { [s.sidebarOpen]: burgerSidebarOpen })} >
      <ul className={s.nav}>
        <h5 className={s.navTitle}>STAGES</h5>
        <div className='pt-2' />
        {stages?.map((item) => {
          return <li className='mt-3' style={{ minWidth: '200px', cursor: 'pointer' }}
            onClick={() => props.dispatch({ type: 'DEFAULT_TAB', defaultTab: item })}
          ><Button style={{ minWidth: '200px' }}>{item}</Button></li>
        })}
      </ul>
      {/* <div className="bg-widget d-flex mt-auto ml-1">
        <Button className="rounded-pill my-3 body-2 d-none d-md-block" type="submit" color="secondary-red">Unlock Full Version</Button>
      </div> */}
    </nav>
  );
}

Sidebar.propTypes = {
  sidebarOpened: PropTypes.bool,
  dispatch: PropTypes.func.isRequired,
  activeItem: PropTypes.string,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
}

function mapStateToProps(store) {
  return {
    sidebarOpened: store.navigation.sidebarOpened,
    activeItem: store.navigation.activeItem,
  };
}

export default withRouter(connect(mapStateToProps)(Sidebar));
