import { useRef, useEffect } from 'react';
import { Chart, registerables } from 'chart.js';

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
              label: 'Accesos a la semana',
              data: data,
              backgroundColor: [
                '#BF616A',
                '#5E81AC',
                '#EBCB8B',
                '#A3BE8C',
                '#B48EAD',
                '#D08770'
              ],
              borderColor: [
                '#BF616A',
                '#5E81AC',
                '#EBCB8B',
                '#A3BE8C',
                '#B48EAD',
                '#D08770'
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