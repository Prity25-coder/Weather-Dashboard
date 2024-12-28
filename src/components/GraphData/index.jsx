import { Line } from "react-chartjs-2";

function GraphData() {
  const date = new Date();
  const day = date.getDay();
  const month = date.toLocaleString('en-US', { month: 'short' });
  const formateDate = `${day} ${month}`
  console.log(formateDate);
  

  const chartData = {
    labels: ["10 Dec", "11 Dec"],
    datasets: [
      {
        label: "Maximum Temperature (2 m)",
        data: [
          3.8, 3.4, 2.9, 3.2, 3.1, 8.7, 10.7, 9.6, 11.4, 13.1, 6.1, 6.4, 6.8,
          5.1, 4.7,
        ],
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
      {
        label: "Minimum Temperature (2 m)",
        data: [],
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
      {
        label: "Mean Temperature (2 m)",
        data: [],
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
      {
        label: "Maximum Apparent Temperature (2 m)",
        data: [],
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
      {
        label: "Minimum Apparent Temperature (2 m)",
        data: [],
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
      {
        label: "Mean Apparent Temperature (2 m)",
        data: [],
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  return (
    <div>
      <Line data={chartData} />
    </div>
  );
}

export default GraphData;
