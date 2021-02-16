import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UniqueGeneratorService {

  constructor() { }

  private nextIdForGenerator = 0;
  generateNewIdString(prefix: string = ''): string {
    return prefix + (this.nextIdForGenerator++);
  }
}
