import React, { useEffect, useRef } from 'react';
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
            datasets: [
              {
                data: data,
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
              },
            ],
          },
          options: {
            animation: {
              duration: 0,
            },
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'right',
              },
            },
          },
        });
        return () => {
          chart.destroy();
        };
      }
    }
  }, [data, labels]);

  return <canvas ref={canvasRef} />;
}

export function StateDonutChart({ data, labels }: DonutChartProps) {
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
            datasets: [
              {
                data: data,
                backgroundColor: ['#ebcb8b', '#5E81AC', '#a3be8c'],
                borderColor: ['black', 'black', 'black'],
                borderWidth: 1,
              },
            ],
          },
          options: {
            animation: {
              duration: 0,
            },
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'right',
              },
            },
          },
        });
        return () => {
          chart.destroy();
        };
      }
    }
  }, [data, labels]);

  return <canvas ref={canvasRef} />;
}

export function ProfileDonutChart({ data, labels }: DonutChartProps) {
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
            datasets: [
              {
                data: data,
                backgroundColor: ['#b48ead', '#A3BE8C', '#5E81AC', '#bf616a'],
                borderColor: ['black', 'black', 'black', 'black'],
                borderWidth: 1,
              },
            ],
          },
          options: {
            animation: {
              duration: 0,
            },
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'right',
              },
            },
          },
        });
        return () => {
          chart.destroy();
        };
      }
    }
  }, [data, labels]);

  return <canvas ref={canvasRef} />;
}
