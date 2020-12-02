import { Pipe, PipeTransform } from '@angular/core';
import { BusinessInformation } from './models/body.model';

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {
  /**
   * Transform
   *
   * @param {any[]} items
   * @param {string} searchText
   * @returns {any[]}
   */
  transform(items: BusinessInformation[], searchText: string): any[] {

    let businessInformation: BusinessInformation[];

    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();
    return items.filter(it => {
      return it.BusinessId.toString().toLocaleLowerCase().includes(searchText) ||
        it.BusinessDescription.toLocaleLowerCase().includes(searchText);
    });
  }
}