"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import type { BettingSite } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { StarIcon, ExternalLink } from "lucide-react"

interface BettingSiteCardProps {
  site: BettingSite
  rank: number
}

export function BettingSiteCard({ site, rank }: BettingSiteCardProps) {
  const router = useRouter()

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Don't navigate if clicking on a button or link
    if (
      (e.target as HTMLElement).tagName === "BUTTON" ||
      (e.target as HTMLElement).tagName === "A" ||
      (e.target as HTMLElement).closest("button") ||
      (e.target as HTMLElement).closest("a")
    ) {
      return
    }

    // Open in new tab
    window.open(site.link, "_blank", "noopener,noreferrer")
  }

  return (
    <Card
      className="overflow-hidden border hover:border-blue-500 transition-all duration-300 hover:shadow-md cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="grid grid-cols-12 gap-2 md:gap-4 p-2 md:p-4 bg-white">
        {/* Rank */}
        <div className="col-span-1 flex items-center justify-center bg-white">
          <div className="bg-gray-900 text-white rounded-full w-6 h-6 md:w-10 md:h-10 flex items-center justify-center text-xs md:text-base font-bold">
            {rank}
          </div>
        </div>

        {/* Logo */}
        <div className="col-span-2 flex items-center justify-center">
          <div className="relative h-10 md:h-16 w-full max-w-[80px] md:max-w-[120px]">
            <Image
              src={site.logo || "/placeholder.svg?height=80&width=120&query=betting site logo"}
              alt={site.name}
              width={120}
              height={80}
              className="object-contain"
            />
          </div>
        </div>

        {/* Info */}
        <div className="col-span-3 flex flex-col justify-center">
          <h3 className="font-bold text-sm md:text-lg mb-0.5 md:mb-1 text-gray-900">{site.name}</h3>
          <div className="flex items-center mb-0.5 md:mb-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="ml-1 md:ml-2 text-xs md:text-sm text-gray-600">{site.score}/10</span>
          </div>
          <div className="text-[10px] md:text-xs text-gray-500">{site.reviews} reviews</div>
        </div>

        {/* Bonus */}
        <div className="col-span-2 flex flex-col justify-center items-center">
          <Badge
            variant="outline"
            className="bg-green-50 text-green-700 border-green-200 mb-0.5 md:mb-1 text-[10px] md:text-xs px-1 md:px-2"
          >
            BONUS
          </Badge>
          <div className="font-bold text-xs md:text-base text-center text-gray-900">{site.bonus}</div>
        </div>

        {/* Features - Hide on mobile, show on tablet+ */}
        <div className="hidden md:flex col-span-2 flex-col justify-center">
          <div className="text-xs font-semibold mb-1 text-gray-700">TOP FEATURES:</div>
          <ul className="text-xs space-y-1">
            {site.features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <svg className="w-3 h-3 text-green-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="col-span-4 md:col-span-2 flex flex-col justify-center items-center">
          <Button
            asChild
            size="sm"
            className="w-full mb-1 md:mb-2 bg-green-600 hover:bg-green-700 text-white text-xs md:text-sm py-1 md:py-2 relative overflow-hidden group"
          >
            <Link
              href={site.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <span className="relative z-10 flex items-center">
                GET BONUS
                <ExternalLink className="ml-1 h-3 w-3 md:h-4 md:w-4" />
              </span>
              <span className="absolute inset-0 bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </Link>
          </Button>
          <p className="text-[10px] md:text-xs text-gray-500">18+ | T&Cs Apply</p>
        </div>
      </div>
    </Card>
  )
}
