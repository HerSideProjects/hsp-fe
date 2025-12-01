export type ActivityType = "yoga" | "sharing-session" | "both";

export const PRICE: Record<Exclude<ActivityType, "">, number> = {
  "yoga": 100000,
  "sharing-session": 89000,
  "both": 179000,
};