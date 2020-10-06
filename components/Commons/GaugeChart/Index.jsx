import React, { Component } from "react";
import { Doughnut, defaults } from "react-chartjs-2";

export default class GaugeChart extends Component {
  componentDidMount() {
    defaults.global.defaultFontColor = this.props.color;
  }
  componentDidUpdate() {
    defaults.global.defaultFontColor = this.props.color;
  }
  render() {
    var originalDoughnutDraw = Chart.controllers.doughnut.prototype.draw;
    Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
      draw: function() {
        originalDoughnutDraw.apply(this, arguments);
        
        var chart = this.chart.chart;
        var ctx = chart.ctx;
        var width = chart.width;
        var height = chart.height;
    
        var fontSize = (height / 114).toFixed(2);
        ctx.font = fontSize + "em Verdana";
        ctx.textBaseline = "middle";
    
        var text = chart.config.data.text,
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;
    
        ctx.fillText(text, textX, textY);
      }
    });
      const { color } = this.props;
      const data = [this.props.progress, 100 - this.props.progress];
    return (
      <div>
        <Doughnut
          height={150}
          data={{
            datasets: [
              {
                data,
                backgroundColor: [color, "#edf0f5"],
              },
            ],
            text: this.props.progress
          }}
          options={{
            // circumference: Math.PI,
            rotation: Math.PI,
            cutoutPercentage: 95,
            events: [],
            animation: {
              duration: 500
            },
            elements: {
                arc: {
                    borderWidth: 0
                },
            }
          }}
        />
      </div>
    );
  }
}
