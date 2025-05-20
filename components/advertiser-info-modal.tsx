"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Info } from "lucide-react"

export function AdvertiserInfoModal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="text-blue-400 hover:underline hover:text-blue-300 transition-colors font-medium"
      >
        Advertiser Info
      </button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-xl font-bold flex items-center justify-center text-gray-900">
              <Info className="h-5 w-5 mr-2 text-blue-500" />
              Advertiser Information
            </DialogTitle>
          </DialogHeader>

          <div className="mt-4 space-y-4 text-sm">
            <p className="text-gray-700">
              <strong className="text-gray-900">10BestBettingIrishSites.com</strong> is a free service to help you find
              betting platforms. We receive fees from featured brands, affecting their placement.
            </p>
            <p className="text-gray-700">
              All featured sites are licensed by reputable authorities. We strive for accuracy but cannot be held
              responsible for inaccuracies.
            </p>
            <p className="text-gray-700">
              Bonuses and offers are subject to change. Always read the full terms on the operator's website before
              claiming.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
