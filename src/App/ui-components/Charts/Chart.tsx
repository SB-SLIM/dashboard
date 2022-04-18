import HeaderChart from "./HeaderChart";
import "chart.js/auto";
import { Chart as ChartJs } from "react-chartjs-2";
import { getGradient } from "./GetGradient";
import { useEffect, useRef, useState } from "react";
import "./chart.scss";

function Chart({ type, title, subtitle }: any) {
  const convasRef = useRef(null);
  const [dataSet, setDataSet] = useState({
    label: "# of Votes",
    data: [12, 19, 3, 5, 25, 3, 6, 7, 1, 8],
    borderRadius: 50,
  });

  useEffect(() => {
    const canvas = convasRef.current;
    const tmp = { ...dataSet, backgroundColor: getGradient(canvas) };
    setDataSet(tmp);
  }, []);

  return (
    <>
      <HeaderChart title={title} subtitle={subtitle} />

      <div className="chart-container">
        <ChartJs
          type={type}
          id="barChart"
          ref={convasRef}
          data={{
            labels: [
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "10",
              "11",
              "12",
            ],
            datasets: [{ ...dataSet }],
          }}
          options={{
            responsive: true,
            plugins: {
              legend: {
                display: false,
              },
            },
          }}
        />
      </div>
    </>
  );
}

export default Chart;
