import React from "react";
import style from "./HomeRight.module.css";
import useFetch from "../Hooks/useFetch";
import { getCovidData } from "../API/api";
import LoadingSpinner from "../../UI/LoadingSpinner";
import CovidChart from "./Items/CovidChart";
import LatestNews from "./Items/LatestNews";

function HomeRight() {
  const { loading, status, data, sendReq } = useFetch(getCovidData);

  React.useEffect(() => {
    sendReq();
  }, [sendReq]);

  return (
    <React.Fragment>
      <div className={style.top}>
        {loading && (
          <div
            style={{
              textAlign: "center",
              margin: "30px auto",
              width: "100%"
            }}
          >
            <LoadingSpinner />
          </div>
        )}

        {!loading && status && <CovidChart {...data} />}
      </div>
      <div className={style.bottom}>
        <LatestNews />
      </div>
    </React.Fragment>
  );
}

export default HomeRight;
