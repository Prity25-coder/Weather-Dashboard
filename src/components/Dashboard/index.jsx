import { useLocation } from "react-router-dom";
import GraphData from "../GraphData";
import TableData from "../TableData";

const Dashboard = () => {
  const {
    state: { data },
  } = useLocation();

  return (
    <div className="flex flex-col gap-5  mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
      <GraphData data={data} />
      <TableData data={data} />
    </div>
  );
};

export default Dashboard;
