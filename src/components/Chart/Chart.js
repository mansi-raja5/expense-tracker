import ChartBar from "./ChartBar.js";
import "./Chart.css";

const Chart = (props) => {
  const dataPointsAllValues = props.dataPoints.map(
    (dataPoint) => dataPoint.value
  );
  console.log(dataPointsAllValues);
  const maxValue = Math.max(...dataPointsAllValues);
  console.log(maxValue);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.id}
          value={dataPoint.value}
          label={dataPoint.label}
          maxValue={maxValue}
        />
      ))}
    </div>
  );
};
export default Chart;
