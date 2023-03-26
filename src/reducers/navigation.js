import { FETCH_DASHBOARD_DATA } from "../actions/dashboard.js";
import {
  OPEN_SIDEBAR,
  CLOSE_SIDEBAR,
  CHANGE_ACTIVE_SIDEBAR_ITEM,
} from "../actions/navigation.js";

const initialState = {
  sidebarOpened: false,
  activeItem: JSON.parse(sessionStorage.getItem('staticSidebar')) ? window.location.pathname : null,
  dashboardData: {},
  defaultTab: '',
  durationTab: ''
};

export default function runtime(state = initialState, action) {
  switch (action.type) {
    case OPEN_SIDEBAR:
      return Object.assign({}, state, {
        sidebarOpened: true,
      });
    case CLOSE_SIDEBAR:
      return Object.assign({}, state, {
        sidebarOpened: false,
      });
    case CHANGE_ACTIVE_SIDEBAR_ITEM:
      return {
        ...state,
        activeItem: action.activeItem,
      };
    case FETCH_DASHBOARD_DATA:
      return {
        ...state,
        dashboardData: action.dashboardData
      }
    case 'DEFAULT_TAB':
      return {
        ...state,
        defaultTab: action.defaultTab
      }
    case 'DEFAULT_DURATION_TAB':
      return {
        ...state,
        durationTab: action.durationTab
      }
    default:
      return state;
  }
}
