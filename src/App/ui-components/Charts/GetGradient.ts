import styles from "../../../scss/abstracts/_variables.module.scss";



let gradient: any;
export function getGradient(canvas: any) {
  const chart = canvas.getContext("2d").chart;
  const { ctx, chartArea } = chart;

  if (!chartArea) {
    // This case happens on initial chart load
    return;
  }

  gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
  gradient.addColorStop(0, styles.primaryDark);
  gradient.addColorStop(0.7, styles.primary);
  gradient.addColorStop(1, styles.primaryLight);
  //   }

  return gradient;
}
