import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataVisualisationLabel'
})
export class DataVisualisationLabelPipe implements PipeTransform {
  private EXCLUSIONS = {
    'xp': 'XP'
  };

  transform(value: string, ...args: unknown[]): unknown {
    const exclusion = this.EXCLUSIONS[value.toLowerCase()];

    if (exclusion) {
      return exclusion;
    }

    let formattedLabel = value.split(/(?=[A-Z])/).join(' ');
    formattedLabel = formattedLabel[0].toUpperCase() + formattedLabel.slice(1);

    return formattedLabel;
  }
}
