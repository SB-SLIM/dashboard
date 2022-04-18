import styles from "../../../scss/abstracts/_variables.module.scss";

let gradient: any;
export function getGradient(canvas: any) {
  const chart = canvas.getContext("2d").chart;
  const { ctx, chartArea } = chart;

  if (!chartArea) {
    // This case happens on initial chart load
    return;
  }

  console.log(chartArea);

  gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
  gradient.addColorStop(0, styles.primary);
  gradient.addColorStop(0.5, styles.secondary);
  gradient.addColorStop(1, styles.primary);
  //   }

  return gradient;
}
