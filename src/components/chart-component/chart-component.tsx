import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'chart-component',
  styleUrl: 'chart-component.css',
  shadow: true,
})
export class ChartComponent {
  @Prop() name: string;
  @Prop() value: string;
  @Prop() unit: string;
  @Prop() percentage: string;
  @Prop() color: string;
  @Prop() size: string;

  render() {
    const gradientStyle = {
      background: `linear-gradient(to right, ${this.color}  ${this.percentage}, rgb(67 0 137 / 0%) 20%)`,
    };

    let cardClass = { card: true };
    if (this.size) {
      cardClass[this.size] = true;
    }
    return (
      <div class={cardClass}>
        <div class="circle-base">
          <div class="circle-progress" style={gradientStyle}></div>
          <div class="circle-hide">
            <div class="content-text">
              <p class="title">{this.name}</p>
              <p class="value">{this.value}</p>
              <p class="unit">{this.unit}</p>
            </div>
          </div>
          <div class="base-hide"></div>
        </div>
      </div>
    );
  }
}
