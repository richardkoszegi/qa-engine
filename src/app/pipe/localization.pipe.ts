import { Pipe, PipeTransform } from '@angular/core';
import {LocalizationService} from '../service/localization.service';
import {HUNGARIAN} from '../localization/hungarian.localization';
import {ENGLISH} from '../localization/english.localization';


@Pipe({name: 'localize', pure: false})
export class LocalizationPipe implements PipeTransform {

  constructor(private localizationService: LocalizationService) {}

  transform(value: string): string {
    if (this.localizationService.isHungarian) {
      for (const word of HUNGARIAN) {
        if (word.name === value) {
          return word.value;
        }
      }
    } else {
      for (const word of ENGLISH) {
        if (word.name === value) {
          return word.value;
        }
      }
    }
  }

}
