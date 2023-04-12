export interface SuscriptionPlan {
  name: string;
  price: number;
  specs: {
    storage: {
      amount: number;
      unit: string;
    };
    users: number;
    sendUpTo: number;
  };
}
