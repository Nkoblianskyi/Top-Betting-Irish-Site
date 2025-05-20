"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { bettingSites } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ExternalLink } from "lucide-react"

export function TopOffersModal() {
  const [isOpen, setIsOpen] = useState(false)
  const top3Sites = bettingSites.slice(0, 3)

  useEffect(() => {
    // Show modal after 3 seconds
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="fixed bottom-4 right-4 z-40 ">
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold animate-pulse hover:animate-none"
        >
          Top 3 Betting Offers
        </Button>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md bg-slate-300">
          <DialogHeader>
            <DialogTitle className="text-center text-xl font-bold text-gray-900">Top 3 Betting Offers</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 mt-4">
            {top3Sites.map((site, index) => (
              <div key={site.id} className="border rounded-lg p-4 relative">
                {index === 0 && (
                  <div className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                    TOP
                  </div>
                )}
                <div className="flex items-center space-x-4">
                  <div className="relative h-12 w-24">
                    <Image
                      src={site.logo || "/placeholder.svg?height=48&width=96&query=betting site logo"}
                      alt={site.name}
                      width={96}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900">{site.name}</h3>
                    <p className="text-sm text-green-600 font-semibold">{site.bonus}</p>
                  </div>
                  <Button
                    asChild
                    size="sm"
                    className="bg-green-600 hover:bg-green-700 text-white relative overflow-hidden group"
                  >
                    <Link href={site.link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                      <span className="relative z-10 flex items-center">
                        Get Bonus
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </span>
                      <span className="absolute inset-0 bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                    </Link>
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-2">18+ | T&Cs Apply</p>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
