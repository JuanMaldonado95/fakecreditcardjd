import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  constructor() {}

  private cardDataSubject = new BehaviorSubject<any>(null);
  cardData$ = this.cardDataSubject.asObservable();

  updateCardData(data: any) {
    this.cardDataSubject.next(data);
  }
}
