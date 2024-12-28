import QUERY_MAP from "../constants/queryMap";

const getQueryParams = (queryObj) => {
  let queryParams = "?";
  Object.keys(queryObj).map((key) => {
    queryParams += `${QUERY_MAP[key]}=${queryObj[key]}&`;
  });

  return queryParams;
};
export default getQueryParams;