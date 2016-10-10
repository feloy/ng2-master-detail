import { Injectable } from '@angular/core';

export interface Dragon {
  id: number;
  name: string;
}

@Injectable()
export class DragonsService {

  private dragons: Dragon[] = [
    { id: 1, name: 'Dragon 1' },
    { id: 2, name: 'Dragon 2' },
    { id: 3, name: 'Dragon 3' },
    { id: 4, name: 'Dragon 4' }
  ];


  constructor() { }

  dragonsList(): Dragon[] {
    return this.dragons;
  }

  dragonsDetails(id): Dragon {
    let list = this.dragons.filter(d => d.id === id);
    return list.length ? list[0] : null;
  }

  dragonDelete(id: number) {
    this.dragons = this.dragons.filter(d => d.id !== id);
  }

  dragonAdd(name: string): number {
    let newId = 1 + this.dragons.map(d => d.id).reduce((a, b) => Math.max(a, b));
    this.dragons.push({ id: newId, name: name} as Dragon);
    return newId;
  }

  dragonUpdate(id: number, name: string) {
    let dragons: Dragon[] = this.dragons.filter(d => d.id === id);
    if (dragons.length) {
      dragons[0].name = name;
    }
  }
}
