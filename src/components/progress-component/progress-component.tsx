import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'progress-component',
  styleUrl: 'progress-component.css',
})
export class ItemComponent {
  @Prop() name: string;
  @Prop() percentage: string;
  @Prop() value: string;

  render() {
    const barStyle = {
      backgroundColor: '#298BFE',
      width: this.percentage,
    };
    return (
      <div class="progress-item">
        <div class="progress-item__content">
          <p class="progress-item__title">{this.name}</p>
          <div class="progress-item__bar">
            <div class="bar" style={barStyle}></div>
          </div>
        </div>
        <p class="progress-item__value">{this.value}</p>
      </div>
    );
  }
}
