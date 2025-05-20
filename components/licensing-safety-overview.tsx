import type React from "react"
import { Shield, Lock, FileText, Search, Clock, CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function LicensingSafetyOverview() {
  return (
    <section className="py-6 md:py-12 bg-gray-900 text-white">
      <div className="container mx-auto px-3 md:px-4">
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-xl md:text-3xl font-bold mb-1 md:mb-2 text-white">Licensing & Safety Overview</h2>
          <p className="text-sm md:text-xl text-gray-400">
            Transparency comes first. Here's how we vet every platform.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-6 md:mb-12">
          <div className="bg-gray-800 rounded-lg p-3 md:p-6 border-l-4 border-green-500">
            <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-4 text-white">
              We Only List Fully Licensed Platforms
            </h3>
            <p className="text-sm md:text-base text-gray-300">
              Every betting site featured on our platform undergoes a rigorous verification process. We ensure that each
              operator holds valid licenses, implements proper security measures, and maintains fair practices. Your
              safety is our priority, which is why we thoroughly examine all aspects of a betting site before
              recommending it.
            </p>
          </div>
        </div>

        {/* Desktop: 3-column grid, Mobile: 1-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 mb-6 md:mb-10">
          <VerificationCard
            icon={<Shield className="h-6 w-6 md:h-8 md:w-8 text-green-500" />}
            title="License from Revenue Commissioners"
            description="We verify that each platform holds a valid license from the Irish Revenue Commissioners, ensuring legal compliance."
          />

          <VerificationCard
            icon={<Lock className="h-6 w-6 md:h-8 md:w-8 text-blue-500" />}
            title="SSL Encryption Checked"
            description="All recommended sites use industry-standard SSL encryption to protect your personal and financial information."
          />

          <VerificationCard
            icon={<Search className="h-6 w-6 md:h-8 md:w-8 text-purple-500" />}
            title="Fair Odds Audited"
            description="We analyze odds across multiple markets to ensure they're competitive and fair for Irish bettors."
          />
        </div>

        {/* Desktop: 3-column grid, Mobile: 1-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 mb-6 md:mb-10">
          <VerificationCard
            icon={<FileText className="h-6 w-6 md:h-8 md:w-8 text-yellow-500" />}
            title="Terms & Bonus Clarity"
            description="All bonus offers are scrutinized for fair terms, reasonable wagering requirements, and transparent conditions."
          />

          <VerificationCard
            icon={<Clock className="h-6 w-6 md:h-8 md:w-8 text-red-500" />}
            title="Withdrawal Speed Verified"
            description="We test actual withdrawal times to ensure you receive your winnings promptly without unnecessary delays."
          />

          <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-0 overflow-hidden relative">
            <CardContent className="p-3 md:p-6 flex flex-col items-center justify-center h-full">
              <div className="absolute top-2 right-2 md:top-3 md:right-3 bg-green-500 text-white text-[10px] md:text-xs font-bold px-1.5 py-0.5 md:px-2 md:py-1 rounded-full flex items-center">
                <CheckCircle className="h-2 w-2 md:h-3 md:w-3 mr-0.5 md:mr-1 text-white" />
                <span className="text-white">VERIFIED</span>
              </div>
              <div className="w-12 h-12 md:w-20 md:h-20 bg-gray-700 rounded-full flex items-center justify-center mb-2 md:mb-4">
                <CheckCircle className="h-6 w-6 md:h-10 md:w-10 text-green-500" />
              </div>
              <h3 className="text-base md:text-xl font-bold mb-1 md:mb-2 text-center text-white">
                Our Verification Process
              </h3>
              <p className="text-xs md:text-sm text-gray-400 text-center">
                Only sites that pass all our verification checks make it to our recommended list. We regularly re-verify
                to maintain standards.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-3 md:p-6 max-w-4xl mx-auto border border-gray-700">
          <div className="flex items-start">
            <div className="mr-2 md:mr-4 mt-1">
              <Shield className="h-5 w-5 md:h-6 md:w-6 text-green-500" />
            </div>
            <div>
              <h4 className="text-base md:text-lg font-bold mb-1 md:mb-2 text-white">Our Commitment to Your Safety</h4>
              <p className="text-xs md:text-base text-gray-300">
                We take pride in our thorough vetting process. If you ever encounter issues with any of our listed
                platforms, please contact us immediately. Your feedback helps us maintain the highest standards in the
                Irish betting industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

interface VerificationCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function VerificationCard({ icon, title, description }: VerificationCardProps) {
  return (
    <Card className="bg-gray-800 border-0 hover:bg-gray-750 transition-all duration-300 overflow-hidden h-full">
      <CardContent className="p-3 md:p-6 relative">
        <div className="absolute top-2 right-2 md:top-3 md:right-3 bg-green-500 text-white text-[10px] md:text-xs font-bold px-1.5 py-0.5 md:px-2 md:py-1 rounded-full flex items-center">
          <CheckCircle className="h-2 w-2 md:h-3 md:w-3 mr-0.5 md:mr-1 text-white" />
          <span className="text-white">VERIFIED</span>
        </div>
        <div className="flex items-start">
          <div className="mr-2 md:mr-4 mt-0.5 md:mt-1">{icon}</div>
          <div>
            <h3 className="text-sm md:text-lg font-bold mb-1 md:mb-2 text-white">{title}</h3>
            <p className="text-xs md:text-sm text-gray-400">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
