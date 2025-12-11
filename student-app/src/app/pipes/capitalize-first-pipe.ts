import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizeFirst',
  standalone: true,
})
export class CapitalizeFirstPipe implements PipeTransform {
  transform(value: string | null | undefined): string {
    if (!value) return '';

    return value
      .trim()
      .toLowerCase()
      .split(/\s+/)               
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
}