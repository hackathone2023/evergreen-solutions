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
  UncontrolledDropdown,
  Button
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
  const storage = JSON.parse(sessionStorage.getItem('user'))
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

  const [showMsg, setShowMsg] = useState(false)

  return (
    <div>
      <Row>
        <Col className="pr-grid-col" xs={12}>
          <Row className="gutter mb-4">
            <Col className="mb-4 mb-md-0" xs={12}>
              <Widget className="">
                <div className="d-flex justify-content-between widget-p-md">
                  <div className="headline-3 d-flex align-items-center"><span className="text-capitalize">{defaultTab}&nbsp;</span>{` values are in ${units[defaultTab.toLowerCase()] || 'Kilo units'}`}</div>
                  <UncontrolledDropdown>
                    <DropdownToggle className="text-capitalize" caret>
                      &nbsp; {durationTab} &nbsp;
                    </DropdownToggle>
                    <DropdownMenu>
                      {durationTabArr.map((item) => <DropdownItem
                        className="text-capitalize"
                        onClick={() => dispatch({ type: 'DEFAULT_DURATION_TAB', durationTab: item })}
                      >{item}</DropdownItem>)}
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>
                <ApexActivityChart className="pb-4" />
              </Widget>
              <div className="pt-5" style={{ display: 'grid', placeItems: 'center' }}>
                {/* In future on click of the Calculate Green Index button we will call a backend API which will trigger backend operations to fetch the Green Index and Wastage percentage */}
                {!showMsg ? <Button style={{ backgroundColor: '#00B98E', color: '#F3F6F8' }} onClick={() => setShowMsg(true)}>Calculate Green Index</Button> : <><p>
                  Your Green Index is <b>3.75</b>/5
                </p><table style={{ marginTop: '2rem' }}>
                    <tr>
                      <th><b>Wastage Type</b></th>
                      <th><b>Wastage %</b></th>
                    </tr>
                    <tr>
                      <td>Chemical</td>
                      <td>30</td>
                    </tr>
                    <tr>
                      <td>Energy</td>
                      <td>25</td>
                    </tr>
                    <tr>
                      <td>Fabric</td>
                      <td>15</td>
                    </tr>
                    <tr>
                      <td className="pr-4">Raw Materials</td>
                      <td>20</td>
                    </tr>
                    <tr>
                      <td>Water</td>
                      <td>35</td>
                    </tr>
                  </table>
                  <p></p>
                  </>}
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default Dashboard;

