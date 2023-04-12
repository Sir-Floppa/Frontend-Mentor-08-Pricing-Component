import { Component, Input } from '@angular/core';
import { SuscriptionPlan } from '../suscription-plan';

@Component({
  selector: 'app-plan-card',
  templateUrl: './plan-card.component.html',
  styleUrls: ['./plan-card.component.scss'],
})
export class PlanCardComponent {
  @Input() subPlan: SuscriptionPlan = {
    name: 'Test',
    price: 23,
    specs: {
      storage: {
        amount: 32,
        unit: 'GB',
      },
      users: 3,
      sendUpTo: 1,
    },
  };

  @Input() position: string;
}
