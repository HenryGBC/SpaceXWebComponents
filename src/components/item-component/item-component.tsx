import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'item-component',
  styleUrl: 'item-component.css',
})
export class ItemComponent {
  @Prop() name: string;
  @Prop() status: string;

  mapStatus(status: string) {
    const statusClass = {};
    statusClass[status] = true;
    const classCircle = {
      ...statusClass,
    };
    return classCircle;
  }
  render() {
    const classStatus = this.mapStatus(this.status);
    const classCircle = { item__circle: true, ...classStatus };
    const classText = { 'item__text-status': true, ...classStatus };
    return (
      <div class="item">
        <div class={classCircle}>
          <span>&#10003;</span>
        </div>
        <div class="item__text">
          <p class="item__text-title">{this.name}</p>
          <p class={classText}>{this.status}</p>
        </div>
      </div>
    );
  }
}
