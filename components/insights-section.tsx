"use client"

import type React from "react"
import { userReviews } from "@/lib/data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { StarIcon, Clock, ThumbsUp, PiggyBank } from "lucide-react"

export function InsightsSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Insights & Data</h2>

        <Tabs defaultValue="stats" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="stats">Performance Metrics</TabsTrigger>
            <TabsTrigger value="reviews">User Reviews</TabsTrigger>
          </TabsList>

          <TabsContent value="stats" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <MetricCard
                title="Avg Payout Speed"
                value="1.2 days"
                icon={<Clock className="h-5 w-5" />}
                color="blue"
                description="Average withdrawal processing time across top sites"
              />
              <MetricCard
                title="User Satisfaction"
                value="92%"
                icon={<ThumbsUp className="h-5 w-5" />}
                color="green"
                description="Based on 9,277 verified user reviews"
              />
              <MetricCard
                title="Bonus Value"
                value="€37"
                icon={<PiggyBank className="h-5 w-5" />}
                color="purple"
                description="Average welcome bonus value for new players"
              />
            </div>
          </TabsContent>

          <TabsContent value="reviews" className="mt-6">
            <div className="space-y-4">
              {userReviews.map((review) => (
                <Card key={review.id}>
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold">{review.name}</h4>
                        <div className="flex mt-1">
                          {[...Array(5)].map((_, i) => (
                            <StarIcon
                              key={i}
                              className={`w-4 h-4 ${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="text-sm text-gray-500">{review.date}</div>
                    </div>
                    <p className="text-gray-700 mt-2">{review.comment}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

interface MetricCardProps {
  title: string
  value: string
  icon: React.ReactNode
  color: "blue" | "green" | "purple" | "red"
  description: string
}

function MetricCard({ title, value, icon, color, description }: MetricCardProps) {
  const colorClasses = {
    blue: "bg-blue-50 text-blue-700 border-blue-200",
    green: "bg-green-50 text-green-700 border-green-200",
    purple: "bg-purple-50 text-purple-700 border-purple-200",
    red: "bg-red-50 text-red-700 border-red-200",
  }

  return (
    <Card className={`border-2 ${colorClasses[color]}`}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-medium">{title}</CardTitle>
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold mb-2">{value}</div>
        <p className="text-sm text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}
