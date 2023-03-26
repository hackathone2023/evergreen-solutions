import { usageApi } from "../services/api";
import { registerError } from "./register";

export const FETCH_DASHBOARD_DATA = 'FETCH_DASHBOARD_DATA';
export const FETCH_DASHBOARD_DATA_SUCCESS = 'FETCH_DASHBOARD_DATA_SUCCESS';
export const FETCH_DASHBOARD_DATA_FAILURE = 'FETCH_DASHBOARD_DATA_FAILURE';

export const fetchDashboardData = (payload) => async (dispatch) => {
    const { data } = await usageApi(payload)
    if (data?.data?.success) {
        dispatch({ type: FETCH_DASHBOARD_DATA, dashboardData: data.data});
    }
}

export function fetchData(payload) {
    return (dispatch) => {
        if (payload?.length > 0) {
            dispatch(fetchDashboardData(payload))
        } else {
            dispatch(registerError("Something was wrong. Try again"));
        }
    }
}