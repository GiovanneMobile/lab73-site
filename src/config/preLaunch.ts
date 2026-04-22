export interface PreLaunchPricingItem {
  title: string;
  duration: string;
  originalPrice: string;
  price: string;
  isPopular?: boolean;
}

export const preLaunchPricing: PreLaunchPricingItem[] = [
  {
    title: "SESSÃO RÁPIDA",
    duration: "2 HORAS",
    originalPrice: "100",
    price: "80",
  },
  {
    title: "HIT MAKER",
    duration: "3 HORAS",
    originalPrice: "120",
    price: "90",
    isPopular: true,
  },
  {
    title: "FULL EXPERIENCE",
    duration: "4 HORAS",
    originalPrice: "140",
    price: "120",
  },
];
