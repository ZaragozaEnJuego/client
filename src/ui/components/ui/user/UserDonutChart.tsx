import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

type DonutChartProps = {
  data: number[];
  labels: string[];
};

export function DonutChart({ data, labels }: DonutChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext('2d');
      if (context) {
        const chart = new Chart(context, {
          type: 'doughnut',
          data: {
            labels: labels,
            datasets: [{
              label: 'vendidas',
              data: data,
              backgroundColor: [
                '#b48ead',
                '#bf616a',
                '#5E81AC',
                '#b48ead',
              ],
              borderColor: [
                '#b48ead',
                '#bf616a',
                '#5E81AC',
                '#b48ead',
              ],
              borderWidth: 1
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'right'
              }
            }
          }
        });
        return () => {
          chart.destroy();
        };
      }
    }
  }, [data, labels]);

  return (
    <canvas ref={canvasRef} />
  );
}