import { useLocation } from "react-router-dom";
import GraphData from "../GraphData";
import TableData from "../TableData";

const Dashboard = () => {
  const {
    state: { data },
  } = useLocation();

  return (
    <div className="flex flex-col gap-5 mx-5">
      <GraphData data={data} />
      <TableData data={data} />
    </div>
  );
};

export default Dashboard;
