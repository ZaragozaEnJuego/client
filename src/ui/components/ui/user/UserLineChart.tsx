import { useRef, useEffect } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

/** Se define un tipo para las props del componente BarChart, 
 * el cual se compone de dos elementos: 
 * un array de números (data)
 * otro array de cadenas de texto (labels). */

type BarChartProps = {
  labels: string[],
  dataTransport: number[],
  dataHealth: number[],
  dataEducation: number[],
  dataGroceries: number[],
}

/** Se define el componente BarChart como una función de React que recibe las props data y labels,
 *  y se declara una referencia a un elemento HTMLCanvasElement usando useRef.
 * Sino, sale como elemento null y no funciona en typescript */

export function LineChart({ labels, dataTransport, dataHealth, dataEducation, dataGroceries }: BarChartProps) {
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
              label: 'Transporte',
              data: dataTransport,
              backgroundColor: '#b48ead',
              borderColor: '#b48ead',
              borderWidth: 1
            }, {
              label: 'Salud',
              data: dataHealth,
              backgroundColor: '#bf616a',
              borderColor: '#bf616a',
              borderWidth: 1
            }, {
              label: 'Educación',
              data: dataEducation,
              backgroundColor: '#5E81AC',
              borderColor: '#5E81AC',
              borderWidth: 1
            }, {
              label: 'Restauración',
              data: dataGroceries,
              backgroundColor: '#b48ead',
              borderColor: '#b48ead',
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
  }, [dataTransport, dataHealth, dataEducation, dataGroceries, labels]);

  return (
    <canvas ref={canvasRef} />
  );
}