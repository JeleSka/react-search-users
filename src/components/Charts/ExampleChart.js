import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const ChartComponent = ({ data }) => {

  const chartConfigs = {
    type: "column2d",
    width: "100%",
    height: "400",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Jele Skurwiele Corp",
        subCaption: "super chart = 2021",
        xAxisName: "Languages",
        yAxisName: "Pounds",
        numberSuffix: "K",
        theme: "fusion"
      },
      data
    }
  };
  return <ReactFC {...chartConfigs} />
}

export default ChartComponent;