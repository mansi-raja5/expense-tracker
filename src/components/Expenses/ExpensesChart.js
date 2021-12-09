import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const chartDataPoints = [
    {
      id: "1",
      label: "JAN",
      value: 0,
    },
    {
      id: "2",
      label: "FEB",
      value: 0,
    },
    {
      id: "3",
      label: "MAR",
      value: 0,
    },
    {
      id: "4",
      label: "APR",
      value: 0,
    },
    {
      id: "5",
      label: "MAY",
      value: 0,
    },
    {
      id: "6",
      label: "JUN",
      value: 0,
    },
    {
      id: "7",
      label: "JLY",
      value: 0,
    },
    {
      id: "8",
      label: "AUG",
      value: 0,
    },
    {
      id: "9",
      label: "SEP",
      value: 0,
    },
    {
      id: "10",
      label: "OCT",
      value: 0,
    },
    {
      id: "11",
      label: "NOV",
      value: 0,
    },
    {
      id: "12",
      label: "DEC",
      value: 0,
    },
  ];

  for (const expense of props.items) {
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
