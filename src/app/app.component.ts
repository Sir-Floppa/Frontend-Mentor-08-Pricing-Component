import { Component } from '@angular/core';
import { MixedPlan } from './mixed-plan';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = '08-Pricing-Component';

  public toggle: boolean;

  basicPlan: MixedPlan = {
    monthly: {
      name: 'Basic',
      price: 19.99,
      specs: {
        storage: {
          amount: 500,
          unit: 'GB',
        },
        users: 2,
        sendUpTo: 3,
      },
    },
    yearly: {
      name: 'Basic',
      price: 199.99,
      specs: {
        storage: {
          amount: 500,
          unit: 'GB',
        },
        users: 2,
        sendUpTo: 3,
      },
    },
  };

  proPlan: MixedPlan = {
    monthly: {
      name: 'Professional',
      price: 24.99,
      specs: {
        storage: {
          amount: 1,
          unit: 'TB',
        },
        users: 5,
        sendUpTo: 10,
      },
    },
    yearly: {
      name: 'Professional',
      price: 249.99,
      specs: {
        storage: {
          amount: 1,
          unit: 'TB',
        },
        users: 5,
        sendUpTo: 10,
      },
    },
  };

  masterPlan: MixedPlan = {
    monthly: {
      name: 'Master',
      price: 39.99,
      specs: {
        storage: {
          amount: 2,
          unit: 'TB',
        },
        users: 10,
        sendUpTo: 20,
      },
    },
    yearly: {
      name: 'Master',
      price: 399.99,
      specs: {
        storage: {
          amount: 2,
          unit: 'TB',
        },
        users: 10,
        sendUpTo: 20,
      },
    },
  };
}
