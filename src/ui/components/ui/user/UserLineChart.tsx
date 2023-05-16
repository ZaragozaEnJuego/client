import { useRef, useEffect } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

/** Se define un tipo para las props del componente BarChart, 
 * el cual se compone de dos elementos: 
 * un array de números (data)
 * otro array de cadenas de texto (labels). */

type BarChartProps = {
  labels: string[],
  data: number[]
}

/** Se define el componente BarChart como una función de React que recibe las props data y labels,
 *  y se declara una referencia a un elemento HTMLCanvasElement usando useRef.
 * Sino, sale como elemento null y no funciona en typescript */

export function LineChart({ labels, data }: BarChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext('2d');
      if (context) {
        const chart = new Chart(context, {
          type: 'line',
          data: {
            labels: labels,
            datasets: [{
              label: 'Transacciones',
              data: data,
              backgroundColor: '#2E3440',
              borderColor: '#2E3440',
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            },
            responsive: true,
            plugins: {
              legend: {
                display: false
              },
            }
          }
        });
        return () => {
          chart.destroy();
        };
      }
    }
  }, [labels, data]);

  return (
    <canvas ref={canvasRef} />
  );
}