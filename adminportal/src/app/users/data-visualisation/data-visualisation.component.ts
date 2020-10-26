import { Component, DebugElement, Input, OnInit } from '@angular/core';
import { DataVisualisationLabelPipe } from '../data-visualisation-label.pipe';

@Component({
  selector: 'app-data-visualisation',
  templateUrl: './data-visualisation.component.html',
  styleUrls: ['./data-visualisation.component.scss']
})
export class DataVisualisationComponent implements OnInit {
  dataKeys: string[];
  templateData: any;

  @Input() data;

  constructor() { }

  ngOnInit(): void {
    this.dataKeys = this.getKeys(this.data);
  }

  getType(value) {
    var baseType = typeof value;

    if (baseType === 'object') {
      if (value instanceof Date) {
        return 'date'
      }

      if (value === null) {
        return 'null'
      }

      if (Array.isArray(value)) {
        return 'array'
      }
    }

    return baseType;
  }

  getKeys(obj) {
    return Object.keys(obj);
  }
}
