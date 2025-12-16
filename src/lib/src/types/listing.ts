export interface Listing {
  id?: string;
  wasteType: string;
  quantity: number;
  unit: string;
  pricePerTon: number;
  location: string;
  createdAt?: any;
}
