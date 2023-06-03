export default function weightedLogarithmicAverage(measurements) {
  let numerator = 0;
  let denominator = 0;
  let time = 0;

  for (let i = 0; i < measurements.length; i++) {
    if (measurements[i].noise && measurements[i].time) {
      time = measurements[i].time * 60;
      numerator += Math.pow(10, measurements[i].noise / 10) * time;
      denominator += time;
    } 
  }
  return (10 * Math.log10(numerator / denominator)).toFixed(2);
}
