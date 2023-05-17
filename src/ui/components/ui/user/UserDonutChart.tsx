/*  Sistemas y Tecnologías Web - Fabra Caro, Francisco
*   Proyecto:                    Zaragoza en Juego 
*   Fichero:                     UserDonutChart.tsx
*   Desarrolladores:             Aréjula Aísa, Íñigo                  - 785370              
*                                González Martínez de Apellániz, Ibón - 756878
*                                Ruiz Borao, Juan José                - 756640
*                                Penacho, Ismael                      - 774572
*/

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
                '#A3BE8C',
              ],
              borderColor: ['#2E3440'],
              borderWidth: 1
            }]
          },
          options: {
            animation: {
              duration: 0,
            },
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false
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