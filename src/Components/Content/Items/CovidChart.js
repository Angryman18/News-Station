import React from "react";
import style from "./CovidChart.module.css";
import { strDate } from "../../../Functions.js/Date";

const CovidChart = ({ india, global: Global }) => {
  
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <React.Fragment>
      <div className={style.india}>
        <h3>Covid Stats India</h3>
        <div className={style.content}>
          <span>
            <p>Total Cases</p>
            <p>{numberWithCommas(india[0].TotalConfirmed)}</p>
          </span>
          <span>
            <p>New Cases</p>
            <p>↑ {numberWithCommas(india[0].NewConfirmed)}</p>
          </span>
          <span>
            <p>Total Deaths</p>
            <p>{numberWithCommas(india[0].TotalDeaths)}</p>
          </span>
          <span>
            <p>New Deaths</p>
            <p>↑ {numberWithCommas(india[0].NewDeaths)}</p>
          </span>
          <small>Updated on {strDate(india[0].Date)}</small>
        </div>
      </div>
      <div className={style.global}>
        <h3 id={style.heading}>Covid Stats Global</h3>
        <div className={style.content}>
          <span>
            <p>Total Cases</p>
            <p>{numberWithCommas(Global.TotalConfirmed)}</p>
          </span>
          <span>
            <p>New Cases</p>
            <p>↑ {numberWithCommas(Global.NewConfirmed)}</p>
          </span>
          <span>
            <p>Total Deaths</p>
            <p>{numberWithCommas(Global.TotalDeaths)}</p>
          </span>
          <span>
            <p>New Deaths</p>
            <p>↑ {numberWithCommas(Global.NewDeaths)}</p>
          </span>
          <small>Updated on {strDate(Global.Date)}</small>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CovidChart;
