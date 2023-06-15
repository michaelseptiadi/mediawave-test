<template>
    <div class="row mt-8">
      <highchart
        :options="chartOptions"
        :modules="['exporting']"
        :update="watchers"
        style="width:100%;"
      />
    </div>
  </template>
  
  <script>
  export default {
    data () {
      return {
        title: 'Data Bandara Di Turki',
        subtitle:'',
        points: [1, 2, 1, 3, 2, 2],
        seriesColor: '',
        animationDuration: 1000,
        chartType: '',
        colorInputIsSupported: null,
        chartTypes: [],
        durations: [0, 500, 1000, 2000],
        seriesName: 'Nama Kota',
        yAxis: 'Jumlah Bandara',
        watchers: [
          'options.title',
          'options.series'
        ],
        colors: [
          'Red',
          'Green',
          'Blue',
          'Pink',
          'Orange',
          'Brown',
          'Black',
          'Purple'
        ],
        lastPointClicked: {
          timestamp: '',
          x: '',
          y: ''
        },
        sexy: false
      }
    },
    computed: {
      /** @returns {import('@/lib/types').ChartOptions} */
      chartOptions () {
        const ctx = this
        return {
          caption: {
            text: this.caption,
            style: {
              color: this.sexy ? this.invertedColor(0) : '#black'
            }
          },
          chart: {
            backgroundColor: this.sexy
              ? {
                  linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
                  stops: [
                    [0, this.seriesColor],
                    [0.5, '#ffffff'],
                    [1, this.seriesColor]
                  ]
                }
              : '#ffffff',
            className: 'my-chart',
            type: this.chartType.toLowerCase()
          },
          plotOptions: {
            series: {
              cursor: 'pointer',
              point: {
                events: {
                  click () {
                    ctx.$emit('pointClicked', this)
                  }
                }
              }
            }
          },
          yAxis: [{
            title: {
              text: this.yAxis,
              style: {
                color: '#000000'
              }
            }
          }],
          xAxis: {
            min: 1,
            categories: ['0', 'Ankara', 'Konya', 'Izmir', 'Eskisehir', 'Diyarbakir']
          },
          title: {
            style: {
              color: this.sexy ? this.invertedColor(0) : '#black'
            },
            text: `${this.title} ` +
              (this.lastPointClicked.timestamp !== ''
                ? `(Point clicked: ${this.lastPointClicked.timestamp})`
                : '')
          },
          subtitle: {
              style: {
              color: this.sexy ? this.invertedColor(0) : '#black'
            },
            text: `${this.subtitle}`
          },
          legend: {
            itemStyle: {
              color: this.sexy ? this.invertedColor(0) : '#black'
            }
          },
          series: [{
            name: this.seriesName,
            data: this.points,
            color: this.seriesColor
          }]
        }
      }
    }
  }
  </script>
  
  <style scoped>
  
  </style>