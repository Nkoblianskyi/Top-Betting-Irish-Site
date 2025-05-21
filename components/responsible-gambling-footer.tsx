import Image from "next/image"
import Link from "next/link"

export function ResponsibleGamblingFooter() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Top Betting Irish Site</h3>
            <p className="text-sm text-gray-400">
              Providing expert reviews and rankings of the best betting sites in Ireland. All information is regularly
              updated to ensure accuracy.
            </p>
            <strong className="text-red-400 font-bold">18+ ONLY.</strong>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Responsible Gambling</h3>
            <p className="text-sm text-gray-400 mb-4">
              Gambling should be entertaining and not a way to make money. Always gamble responsibly and within your
              means.
            </p>
            <div className="text-sm text-gray-400">
              <strong className="text-white">Need Help?</strong>
              <br />
              <Link href="https://gamblingcare.ie" className="text-blue-400 hover:underline">
                gamblingcare.ie
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Legal</h3>
            <p className="text-sm text-gray-400">
              Top Betting Irish Site is intended for individuals 18 years of age and older. Gambling may be addictive,
              please play responsibly.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <h3 className="text-lg font-bold mb-4 text-center text-white">Responsible Gambling Organizations</h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-indigo-900/50 p-3 rounded-lg transition-transform duration-300 hover:scale-105 flex flex-col items-center">
              <Link href="https://www.gambleaware.org/">
                <div className="relative w-[120px] h-[40px]">
                  <Image src="/gamble-aware.png" alt="Gamble Aware" width={120} height={40} className="mb-2 mt-4" />
                </div>
              </Link>
              <span className="text-xs text-center text-gray-300">Be Gamble Aware</span>
            </div>
            <div className="bg-indigo-900/50 p-3 rounded-lg transition-transform duration-300 hover:scale-105 flex flex-col items-center">
              <Link href="https://gamblingcare.ie/">
                <div className="relative w-[120px] h-[40px]">
                  <Image
                    src="/GamblingCare-w.png"
                    alt="Gambling Care"
                    width={120}
                    height={40}
                    className="mb-2 mt-4"
                  />
                </div>
              </Link>
              <span className="text-xs text-center text-gray-300">GamCare Support</span>
            </div>
            <div className="bg-indigo-900/50 p-3 rounded-lg transition-transform duration-300 hover:scale-105 flex flex-col items-center">
              <Link href="https://www.problemgambling.ie/">
                <div className="relative w-[120px] h-[40px]">
                  <Image
                    src="/extern-problem.png"
                    alt="Problem Gambling"
                    width={120}
                    height={40}
                    className="mb-2 mt-4"
                  />
                </div>
              </Link>
              <span className="text-xs text-center text-gray-300">Gambling Therapy</span>
            </div>
            <div className="bg-indigo-900/50 p-3 rounded-lg transition-transform duration-300 hover:scale-105 flex flex-col items-center">
              <Link href="https://www.gamcare.org.uk/">
                <div className="relative w-[120px] h-[40px]">
                  <Image src="/gamcare.png" alt="GamCare" width={120} height={40} className="mb-2 mt-4" />
                </div>
              </Link>
              <span className="text-xs text-center text-gray-300">Safe Gambling</span>
            </div>
          </div>

          <p className="text-center text-xs text-gray-500 mt-8">
            &copy; {new Date().getFullYear()} Top Betting Irish Site. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
