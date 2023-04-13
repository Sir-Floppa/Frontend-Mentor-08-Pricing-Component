import { SuscriptionPlan } from './suscription-plan';

export interface MixedPlan {
  monthly: SuscriptionPlan;
  yearly: SuscriptionPlan;
}
