"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { AlertTriangle, Users } from "lucide-react"

export function AgeRestrictionModal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="text-blue-400 hover:underline hover:text-blue-300 transition-colors font-medium"
      >
        18+ Only
      </button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-xl font-bold flex items-center justify-center text-gray-900">
              <Users className="h-5 w-5 mr-2 text-red-500" />
              Age Restriction
            </DialogTitle>
          </DialogHeader>

          <div className="mt-4 space-y-4">
            <div className="flex items-start mb-3">
              <AlertTriangle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
              <div className="text-sm font-bold text-gray-900">18+ Only</div>
            </div>
            <div className="text-sm space-y-3">
              <p className="text-gray-700">
                This website is for individuals 18 years or older. By using our site, you confirm you meet this
                requirement.
              </p>
              <p className="text-gray-700">
                Gambling should be for entertainment only. Never gamble with money you cannot afford to lose.
              </p>
              <p className="text-gray-700">
                If you're struggling with gambling issues, please seek help from GamCare or other support services.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
