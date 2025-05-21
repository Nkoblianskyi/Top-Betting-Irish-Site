import Link from "next/link"
import { bettingSites } from "@/lib/data"
import { BettingSiteCard } from "@/components/betting-site-card"
import { TopOffersModal } from "@/components/top-offers-modal"
import { CookieBanner } from "@/components/cookie-banner"
import { LicensingSafetyOverview } from "@/components/licensing-safety-overview"
import { AdvertiserInfoModal } from "@/components/advertiser-info-modal"
import { AgeRestrictionModal } from "@/components/age-restriction-modal"
import { FaqSection } from "@/components/faq-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      

      {/* Hero Section - Ultra Compact for Mobile */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-3 md:py-6 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'url("/abstract-sports-pattern.png")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>

        <div className="container mx-auto px-3 md:px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Main Content */}
            <div className="text-center mb-2 md:mb-4">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-1 md:mb-2 leading-tight text-white">
                Ireland's Most Trusted <span className="text-yellow-400">Betting Rankings</span>
              </h1>
              <p className="text-xs md:text-sm text-gray-300 mb-2 md:mb-3">Expert-Verified. Updated Monthly.</p>
            </div>

            {/* Trust Indicators - Horizontal Layout */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-2 md:mb-4">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg px-2 py-1 md:px-3 md:py-2 flex items-center border border-gray-700">
                <div className="bg-green-500 rounded-full p-1 md:p-1.5 mr-1 md:mr-2 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 md:h-4 md:w-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-xs md:text-sm text-white">Licensed</span>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg px-2 py-1 md:px-3 md:py-2 flex items-center border border-gray-700">
                <div className="bg-blue-500 rounded-full p-1 md:p-1.5 mr-1 md:mr-2 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 md:h-4 md:w-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <span className="text-xs md:text-sm text-white">Secure</span>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg px-2 py-1 md:px-3 md:py-2 flex items-center border border-gray-700">
                <div className="bg-yellow-500 rounded-full p-1 md:p-1.5 mr-1 md:mr-2 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 md:h-4 md:w-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-xs md:text-sm text-white">Fast Payouts</span>
              </div>
            </div>

            {/* Advertiser Info Line */}
            <div className="text-center text-[10px] md:text-xs text-gray-300 mb-2 md:mb-3">
              Play responsibly. Terms apply. <AdvertiserInfoModal /> | <AgeRestrictionModal />
            </div>

            {/* Responsible Gambling Warning - Ultra Compact */}
            <div className="p-1.5 md:p-2 border-l-4 border-red-500 bg-gray-800/70 backdrop-blur-sm text-white text-[10px] md:text-xs rounded-lg max-w-2xl mx-auto">
              <div className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 md:h-4 md:w-4 text-red-500 mr-1 md:mr-1.5 flex-shrink-0 mt-0.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="text-white">
                  <strong className="text-red-400 font-bold">18+ ONLY.</strong> Gambling involves risk.{" "}
                  <Link href="https://gamblingcare.ie" className="text-blue-400 hover:underline">
                    Get help
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements - Minimal for Mobile */}
        <div className="absolute bottom-0 left-0 w-full h-4 md:h-8 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute -bottom-5 -left-5 w-16 md:w-20 h-16 md:h-20 bg-green-500 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute -top-5 -right-5 w-16 md:w-20 h-16 md:h-20 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>
      </section>

      {/* Betting Sites Ranking - More Compact */}
      <section className="py-4 md:py-12 bg-white">
        <div className="container mx-auto px-3 md:px-4">
          <h2 className="text-xl md:text-3xl font-bold text-center mb-3 md:mb-8 text-gray-900">
            Top Rated Betting Sites
          </h2>
          <div className="space-y-3 md:space-y-6">
            {bettingSites.map((site, index) => (
              <BettingSiteCard key={site.id} site={site} rank={index + 1} />
            ))}
          </div>
        </div>
      </section>

      {/* Licensing & Safety Overview */}
      <LicensingSafetyOverview />

      {/* FAQ Section */}
      <FaqSection />



      {/* Cookie Banner */}
      <CookieBanner />

      {/* Top Offers Modal */}
      <TopOffersModal />
    </main>
  )
}
