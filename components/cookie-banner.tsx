"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookiesAccepted = localStorage.getItem("cookiesAccepted")

    if (!cookiesAccepted) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 1500)

      return () => clearTimeout(timer)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true")
    setIsVisible(false)
  }

  const declineCookies = () => {
    // Only essential cookies
    localStorage.setItem("cookiesAccepted", "essential")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-4 py-3 rounded-md shadow-md z-50 max-w-lg w-full">
      <p className="text-sm mb-2 text-white">
        We use cookies to enhance your experience. By using this site, you accept our use of cookies.
      </p>
      <div className="flex justify-end space-x-2">
        <Button
          onClick={acceptCookies}
          size="sm"
          className="bg-green-600 hover:bg-green-700 text-white text-xs relative overflow-hidden group"
        >
          <span className="relative z-10">Accept All</span>
          <span className="absolute inset-0 bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
        </Button>
        <Button
          onClick={declineCookies}
          variant="outline"
          size="sm"
          className="bg-gray-700 hover:bg-gray-600 text-white text-xs relative overflow-hidden group"
        >
          <span className="relative z-10">Decline</span>
          <span className="absolute inset-0 bg-gray-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
        </Button>
      </div>
    </div>
  )
}
