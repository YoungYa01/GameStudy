import VChart from "@visactor/vchart";
import {useEffect} from "react";

const LineBarChart = () => {
  function calculateAverage(data: Array<Array<number>>, dim: string) {
    let total = 0;
    for (let i = 0; i < data.length; i++) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      total += data[i][dim];
    }
    return (total /= data.length);
  }

  function generateData(type: string) {
    const data = [];
    for (let i = 0; i < 10; i++) {
      data.push({x: i, y: Math.random(), type});
    }
    return data;
  }

  const DataA = generateData('A');

  const DataB = generateData('B');

  const barSpec = {
    type: 'common',
    series: [
      {
        type: 'bar',
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        data: {values: [{value: calculateAverage(DataA, 'y'), type: 'A'}]},
        xField: 'type',
        yField: 'value',
        morph: {
          morphKey: 'A'
        }
      },
      {
        type: 'bar',
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        data: {values: [{value: calculateAverage(DataB, 'y'), type: 'B'}]},
        xField: 'type',
        yField: 'value',
        morph: {
          morphKey: 'B'
        }
      }
    ],
    axes: [
      {orient: 'left', type: 'linear', max: 1},
      {orient: 'bottom', type: 'band'}
    ]
  };

  const scatterSpec = {
    type: 'common',
    series: [
      {
        type: 'scatter',
        data: {values: DataA},
        xField: 'x',
        yField: 'y',
        seriesField: 'type',
        morph: {
          morphKey: 'A',
          morphElementKey: 'type'
        }
      },
      {
        type: 'scatter',
        data: {values: DataB},
        xField: 'x',
        yField: 'y',
        seriesField: 'type',
        morph: {
          morphKey: 'B',
          morphElementKey: 'type'
        }
      }
    ],
    axes: [
      {orient: 'left', type: 'linear', zero: false, max: 1},
      {orient: 'bottom', type: 'band'}
    ]
  };

  const specs = [barSpec, scatterSpec];

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const vchart = new VChart(specs[0], {dom: lineBarChart});
    vchart.renderSync();
    let count = 1;
    const timer = setInterval(() => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      vchart.updateSpec(specs[count % 2]);
      count++;
    }, 3000);
    return () => {
      clearInterval(timer);
    }

  }, []);

  return (
    <div id="lineBarChart" className={'h-[500]'}></div>
  )
}

export default LineBarChart;
