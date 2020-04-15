import { Pipe, PipeTransform } from '@angular/core';
import { HammerGestureConfig } from '@angular/platform-browser';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchTerm: any): any {
    return value.filter(function(search){
      return search.name.indexOf(searchTerm) > -1
    })
  }

}
