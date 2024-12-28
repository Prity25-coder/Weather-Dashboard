import { useMemo } from "react";
import { Line } from "react-chartjs-2";

const monthMap = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function GraphData({ data }) {
  const chartData = useMemo(() => {
    const {
      daily: {
        time = [],
        temperature_2m_max = [],
        temperature_2m_min = [],
        temperature_2m_mean = [],
        apparent_temperature_max = [],
        apparent_temperature_min = [],
        apparent_temperature_mean = [],
      },
    } = data || {};
    const labels = time.map((dd) => {
      const date = new Date(dd);
      return `${date.getDate()} ${monthMap[date.getMonth()]}`;
    });
    return {
      labels: labels,
      datasets: [
        {
          label: "Maximum Temperature (2 m)",
          data: temperature_2m_max,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        },
        {
          label: "Minimum Temperature (2 m)",
          data: temperature_2m_min,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        },
        {
          label: "Mean Temperature (2 m)",
          data: temperature_2m_mean,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        },
        {
          label: "Maximum Apparent Temperature (2 m)",
          data: apparent_temperature_max,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        },
        {
          label: "Minimum Apparent Temperature (2 m)",
          data: apparent_temperature_min,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        },
        {
          label: "Mean Apparent Temperature (2 m)",
          data: apparent_temperature_mean,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        },
      ],
    };
  }, [data]);

  return (
    <div className="mt-5 mx-5">
      <Line data={chartData} />
    </div>
  );
}

export default GraphData;
