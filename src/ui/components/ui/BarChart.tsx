import { useRef, useEffect } from 'react';
import { Chart, registerables } from 'chart.js';
import React from 'react';

Chart.register(...registerables);

/** Se define un tipo para las props del componente BarChart, 
 * el cual se compone de dos elementos: 
 * un array de números (data)
 * otro array de cadenas de texto (labels). */

type BarChartProps = {
  labels: string[];
  data: number[];
}

/** Se define el componente BarChart como una función de React que recibe las props data y labels,
 *  y se declara una referencia a un elemento HTMLCanvasElement usando useRef.
 * Sino, sale como elemento null y no funciona en typescript */

export function BarChart({ labels, data }: BarChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext('2d');
      if (context) {
        const chart = new Chart(context, {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [{
              label: '# of Votes',
              data: data,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
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
