export interface BettingSite {
  reviews: number
  id: string
  name: string
  logo: string
  score: number
  bonus: string
  features: string[]
  paymentMethods: string[]
  link: string
}

export const bettingSites: BettingSite[] = [
  {
    id: "betiton",
    name: "betiton",
    logo: "/betiton.png",
    score: 9.8,
    bonus: "BET €10 GET €50",
    features: ["Live Streaming", "Mobile App", "Cash Out"],
    paymentMethods: ["Visa/Mastercard", "PayPal", "Apple Pay"],
    link: "https://www.betiton.com/en-ie/sport/",
    reviews: 3245,
  },
  {
    id: "mrplay",
    name: "mrplay",
    logo: "/Screenshot_1222.png",
    score: 9.7,
    bonus: "BET €5 GET €20",
    features: ["Best Odds", "Cash Out", "Betting Exchange"],
    paymentMethods: ["Visa/Mastercard", "PayPal", "Bank Transfer"],
    link: "https://ie.mrplay.com/sport/",
    reviews: 3092,
  },
  {
    id: "quinn",
    name: "quinn",
    logo: "/quinn.png",
    score: 9.6,
    bonus: "BET €10 GET €10",
    features: ["Loyalty Program", "Fast Payouts", "Live Betting"],
    paymentMethods: ["Visa/Mastercard", "Skrill", "Neteller"],
    link: "https://www.quinnbet.com/ie/sports",
    reviews: 2940,
  },
]

export const userReviews = [
  {
    id: 1,
    name: "Michael O'Connor",
    rating: 5,
    comment:
      "Betiton offers the best odds I've found for Premier League matches. Their cash out feature is reliable and the app is smooth.",
    date: "2023-11-15",
  },
  {
    id: 2,
    name: "Sarah Murphy",
    rating: 4,
    comment:
      "Mr Play has great bonuses but their withdrawal process could be faster. Overall a solid betting site with good customer service.",
    date: "2023-12-03",
  },
  {
    id: 3,
    name: "Liam Byrne",
    rating: 5,
    comment:
      "Quinn has the best loyalty program I've used. The points add up quickly and the rewards are actually worth it.",
    date: "2024-01-20",
  },
]
