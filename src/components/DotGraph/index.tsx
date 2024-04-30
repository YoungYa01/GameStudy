import VChart from "@visactor/vchart";
import {useEffect} from "react";


const DotGraph = () => {

  const yearData = {};
  const firstYear = 1950;
  const lastYear = 2023;



  for (let year = firstYear; year <= lastYear; year++) {
    const data: { x: number; y: number; value: number; index: number; }[] = [];
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    yearData[year] = data;

    for (let i = 0; i < 50; i++) {
      if (year === firstYear) {
        data.push({
          x: Math.round(Math.random() * 100 - 90),
          y: Math.round(Math.random() * 100 - 90),
          value: Math.round(Math.random() * 1000),
          index: i
        });
      } else {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const previous = yearData[year - 1][i];
        data.push({
          x: previous.x + Math.round(Math.random() * 5 - 2 + i / 50),
          y: previous.y + Math.round(Math.random() * 5 - 2 + i / 50),
          value: Math.abs(previous.value + Math.round(Math.random() * 100 - 45)),
          index: i
        });
      }
    }
  }

  const specs = Object.values(yearData).map((data, index) => {
    return {
      data: [
        {
          id: 'id',
          values: data
        },
        {
          id: 'year',
          values: [{year: Object.keys(yearData)[index]}]
        }
      ]
    };
  });

  const DURATION = 300;

// 配置项
  const spec = {
    type: 'common',
    player: {
      orient: 'bottom',
      auto: true,
      interval: DURATION,
      dy: 10,
      specs
    },
    data: specs[0].data,
    axes: [
      {
        orient: 'left',
        nice: true,
        zero: false,
        type: 'linear',
        range: {min: -100, max: 100},
        tick: {
          tickCount: 10
        },
        grid: {
          visible: true,
          style: {
            lineDash: [0]
          }
        }
      },
      {
        orient: 'bottom',
        nice: true,
        label: {visible: true},
        type: 'linear',
        range: {min: -100, max: 100},
        tick: {
          tickCount: 10
        },
        grid: {
          visible: true,
          style: {
            lineDash: [0]
          }
        }
      }
    ],
    series: [
      {
        type: 'scatter',
        // 通过数据中的 index 进行数据匹配
        dataKey: 'index',
        // 声明点半径大小
        sizeField: 'value',
        size: {
          type: 'linear',
          range: [5, 30]
        },
        xField: 'x',
        yField: 'y',
        point: {
          style: {
            fill: '#000000',
            fillOpacity: 0.6
          }
        },
        animationAppear: {
          duration: DURATION,
          easing: 'linear'
        },
        animationUpdate: {
          duration: DURATION,
          easing: 'linear'
        }
      }
    ],
    customMark: [
      {
        type: 'text',
        dataIndex: 1,
        style: {
          text: (datum: { year: never; }) => datum.year,
          x: () => 50,
          y: () => 10,
          textBaseline: 'top',
          textAlign: 'left',
          fontSize: 100,
          fontWeight: 'bolder',
          fill: 'black',
          fillOpacity: 0.2
        }
      }
    ],
    // FIXME: markArea 性能有问题
    markArea: [
      {
        coordinates: [
          {
            x: -100,
            y: 0
          },
          {
            x: -100,
            y: 100
          },
          {
            x: 0,
            y: 100
          },
          {
            x: 0,
            y: 0
          }
        ],
        area: {
          style: {
            fill: '#E69151',
            fillOpacity: 0.5
          }
        }
      },
      {
        coordinates: [
          {
            x: 0,
            y: 100
          },
          {
            x: 0,
            y: 0
          },
          {
            x: 100,
            y: 0
          },
          {
            x: 100,
            y: 100
          }
        ],
        area: {
          style: {
            fill: '#EACC4E',
            fillOpacity: 0.5
          }
        }
      },
      {
        coordinates: [
          {
            x: -100,
            y: -100
          },
          {
            x: -100,
            y: 0
          },
          {
            x: 0,
            y: 0
          },
          {
            x: 0,
            y: -100
          }
        ],
        area: {
          style: {
            fill: '#9DD5DD',
            fillOpacity: 0.5
          }
        }
      },
      {
        coordinates: [
          {
            x: 0,
            y: 0
          },
          {
            x: 0,
            y: -100
          },
          {
            x: 100,
            y: -100
          },
          {
            x: 100,
            y: 0
          }
        ],
        area: {
          style: {
            fill: '#5DB9BF',
            fillOpacity: 0.5
          }
        }
      }
    ]
  };

  useEffect(() => {
    return () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      const vchart = new VChart(spec, {dom: dotChart});
      vchart.renderSync();
    }
  }, []);

  return (
    <div id={'dotChart'} className={'h-[500]'}></div>
  )
}

export default DotGraph;
