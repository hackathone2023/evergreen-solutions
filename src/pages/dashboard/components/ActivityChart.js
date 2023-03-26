import React from "react";
import ApexCharts from "react-apexcharts";
import { useSelector } from "react-redux";



export default function ApexActivityChart() {
  const units = {
    chemical: 'Kilo Tons',
    raw: 'Kilo Tons',
    rawMaterials: 'Kilo Tons',
    energy: 'Million KWh',
    fabric: 'Kilo Yards',
    water: 'Billion Gallons',
  }
  const defaultTab = useSelector(state => state?.navigation?.defaultTab)
  const durationTab = useSelector(state => state?.navigation?.durationTab)
  const dashboardData = useSelector(state => state?.navigation?.dashboardData || {})
  let data = [], label = []; 
  if (defaultTab && durationTab) {
    ({ data, label } = dashboardData.data[defaultTab][durationTab])
  }
  const series = [{
    name: 'Your Activity',
    type: 'column',
    data
  }];
  const chartSettings = {
    
    colors: ["#FFCA41", "#43BC13"],
    chart: {
      height: 550,
      type: 'line',
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: "straight",
      width: [0, 1]
    },
    dataLabels: {
      formatter: function (val) {
        return val;
      },
      enabled: true,
      enabledOnSeries: [0],
      style: {
        fontSize: '12px',
        fontWeight: 800,
        colors: ["#304758"]
      },
      background: {
        borderWidth: 0,
      },
    },
    labels: label,
    legend: {
      position: "top",
      floating: true,
    },
    xaxis: {
      type: 'category',
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        style: {
          colors: "#6B859E",
        },
      },
    },
    yaxis: {
      show: false,
    },
    fill: {
      type: "solid",
      opacity: 1,
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
      }
    },
    grid: {
      show: false,
    }
  };
  return (
    <ApexCharts
      options={chartSettings}
      series={series}
      type="area"
      height={400}
    />
  )
}
