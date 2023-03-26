import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
// import { v4 as uuidv4 } from "uuid";
import {
  Col,
  Row,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown
} from "reactstrap";
import { fetchData } from "../../actions/dashboard.js";
import Widget from "../../components/Widget/Widget.js";
import ApexActivityChart from "./components/ActivityChart.js";

const Dashboard = () => {
  const units = {
    chemical: 'Kilo Tons',
    raw: 'Kilo Tons',
    rawMaterials: 'Kilo Tons',
    energy: 'Million KWh',
    fabric: 'Kilo Yards',
    water: 'Billion Gallons',
  }
  const dispatch = useDispatch()
  const storage = JSON.parse(localStorage.getItem('user'))
  const { evergreenId = '' } = !['undefined', 'null', null, undefined].includes(storage) ? storage : {};

  const dashboardData = useSelector(state => state?.navigation?.dashboardData || {})
  const defaultTab = useSelector(state => state?.navigation?.defaultTab || '')
  const durationTab = useSelector(state => state?.navigation?.durationTab || '')
  console.log({ dashboardData, evergreenId })
  useEffect(() => {
    if (!evergreenId) return;
    dispatch(fetchData(evergreenId));
  }, [])

  let stages = []
  let durationTabArr = []
  if (Object.keys(dashboardData).length > 0) {
    stages = Object.keys(dashboardData) || []
    if (stages.length > 0)
      durationTabArr = Object.keys(dashboardData[stages[0]])
    if (!defaultTab) {
      console.log({ stages })
      dispatch({ type: 'DEFAULT_TAB', defaultTab: stages[0] })
      dispatch({ type: 'DEFAULT_DURATION_TAB', durationTab: durationTabArr[0] })
    }
  }

  return (
    <div>
      <Row>
        <Col className="pr-grid-col" xs={12}>
          <Row className="gutter mb-4">
            <Col className="mb-4 mb-md-0" xs={12}>
              <Widget className="">
                <div className="d-flex justify-content-between widget-p-md">
                  <div className="headline-3 d-flex align-items-center">{`${defaultTab} values are in ${units[defaultTab] || 'Kilo units'}`}</div>
                  <UncontrolledDropdown>
                    <DropdownToggle caret>
                      &nbsp; {durationTab} &nbsp;
                    </DropdownToggle>
                    <DropdownMenu>
                      {durationTabArr.map((item) => <DropdownItem
                        onClick={() => dispatch({ type: 'DEFAULT_DURATION_TAB', durationTab: item })}
                      >{item}</DropdownItem>)}
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>
                <ApexActivityChart className="pb-4" />
              </Widget>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default Dashboard;

