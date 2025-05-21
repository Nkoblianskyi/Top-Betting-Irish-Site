import { Star } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-gray-50">
          

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-8 md:py-12 overflow-hidden">
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
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-2xl md:text-4xl font-bold mb-4 text-white">About Us</h1>
                        <p className="text-lg md:text-xl text-gray-300">Ireland's Most Thorough Betting Site Evaluation Process</p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-8 md:py-12 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="prose prose-gray max-w-none">
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold mb-4 text-gray-900">Our Mission</h2>
                            <p className="text-gray-700 mb-4">
                                At Top Betting Irish Site, our mission is simple: to provide Irish bettors with the most accurate,
                                comprehensive, and trustworthy rankings of betting platforms available in Ireland. We understand that
                                choosing the right betting site can significantly impact your experience, which is why we've developed a
                                rigorous evaluation process that leaves no stone unturned.
                            </p>
                        </div>

                        <div className="mb-8">
                            <h2 className="text-2xl font-bold mb-4 text-gray-900">Our Evaluation Process</h2>
                            <p className="text-gray-700 mb-4">
                                What sets us apart is our meticulous approach to evaluating and ranking betting sites. Our process
                                involves multiple stages of assessment, each designed to thoroughly examine different aspects of a
                                betting platform:
                            </p>

                            <div className="bg-gray-50 p-6 rounded-lg mb-6 border-l-4 border-green-500">
                                <h3 className="text-xl font-bold mb-3 text-gray-900">Stage 1: Initial Verification</h3>
                                <p className="text-gray-700 mb-3">
                                    Before a betting site even enters our evaluation process, we verify its licensing and regulatory
                                    compliance. We only consider platforms that are properly licensed by recognized authorities such as
                                    the Irish Revenue Commissioners or other reputable international regulatory bodies. This ensures that
                                    every site we recommend operates legally and is subject to regulatory oversight.
                                </p>
                                <div className="flex items-center text-green-600 font-medium">
                                    <svg
                                        className="w-5 h-5 mr-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                        ></path>
                                    </svg>
                                    100% of our listed sites are fully licensed and regulated
                                </div>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-lg mb-6 border-l-4 border-blue-500">
                                <h3 className="text-xl font-bold mb-3 text-gray-900">Stage 2: Comprehensive Testing</h3>
                                <p className="text-gray-700 mb-3">
                                    Our team of experienced betting experts creates accounts on each platform and conducts extensive
                                    testing across multiple areas:
                                </p>
                                <ul className="list-disc pl-6 mb-4 text-gray-700">
                                    <li className="mb-2">
                                        <strong className="text-gray-900">User Experience:</strong> We evaluate the website's design,
                                        navigation, mobile compatibility, and overall ease of use.
                                    </li>
                                    <li className="mb-2">
                                        <strong className="text-gray-900">Betting Markets:</strong> We assess the range of sports and events
                                        covered, focusing on markets popular with Irish bettors.
                                    </li>
                                    <li className="mb-2">
                                        <strong className="text-gray-900">Odds Quality:</strong> We compare odds across multiple markets and
                                        events to determine competitiveness.
                                    </li>
                                    <li className="mb-2">
                                        <strong className="text-gray-900">Bonuses and Promotions:</strong> We analyze welcome offers and
                                        ongoing promotions for value and fair terms.
                                    </li>
                                    <li className="mb-2">
                                        <strong className="text-gray-900">Payment Methods:</strong> We verify available deposit and
                                        withdrawal options, processing times, and any associated fees.
                                    </li>
                                    <li className="mb-2">
                                        <strong className="text-gray-900">Customer Support:</strong> We test response times and quality
                                        across all available support channels.
                                    </li>
                                </ul>
                                <div className="flex items-center text-blue-600 font-medium">
                                    <svg
                                        className="w-5 h-5 mr-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                        ></path>
                                    </svg>
                                    Over 80 evaluation points for each betting site
                                </div>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-lg mb-6 border-l-4 border-purple-500">
                                <h3 className="text-xl font-bold mb-3 text-gray-900">Stage 3: Security Assessment</h3>
                                <p className="text-gray-700 mb-3">
                                    We conduct a thorough security evaluation of each platform, examining:
                                </p>
                                <ul className="list-disc pl-6 mb-4 text-gray-700">
                                    <li className="mb-2">SSL encryption and data protection measures</li>
                                    <li className="mb-2">Privacy policy and data handling practices</li>
                                    <li className="mb-2">Responsible gambling tools and resources</li>
                                    <li className="mb-2">Account security features (2FA, session management, etc.)</li>
                                </ul>
                                <div className="flex items-center text-purple-600 font-medium">
                                    <svg
                                        className="w-5 h-5 mr-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                        ></path>
                                    </svg>
                                    Security is our top priority in evaluations
                                </div>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-lg mb-6 border-l-4 border-yellow-500">
                                <h3 className="text-xl font-bold mb-3 text-gray-900">Stage 4: Real Money Testing</h3>
                                <p className="text-gray-700 mb-3">
                                    Unlike many review sites, we conduct real-money testing on all platforms. This includes:
                                </p>
                                <ul className="list-disc pl-6 mb-4 text-gray-700">
                                    <li className="mb-2">Making actual deposits using various payment methods</li>
                                    <li className="mb-2">Placing bets across different markets</li>
                                    <li className="mb-2">Processing withdrawals to verify payout speeds and reliability</li>
                                    <li className="mb-2">Claiming and fulfilling bonus requirements</li>
                                </ul>
                                <div className="flex items-center text-yellow-600 font-medium">
                                    <svg
                                        className="w-5 h-5 mr-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        ></path>
                                    </svg>
                                    We invest our own money to test every platform
                                </div>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-lg mb-6 border-l-4 border-red-500">
                                <h3 className="text-xl font-bold mb-3 text-gray-900">Stage 5: User Feedback Integration</h3>
                                <p className="text-gray-700 mb-3">
                                    We collect and analyze feedback from real users of each platform, incorporating their experiences into
                                    our evaluations. This includes:
                                </p>
                                <ul className="list-disc pl-6 mb-4 text-gray-700">
                                    <li className="mb-2">Monitoring user reviews across multiple platforms</li>
                                    <li className="mb-2">Tracking complaint patterns and resolution quality</li>
                                    <li className="mb-2">Surveying active bettors about their experiences</li>
                                </ul>
                                <div className="flex items-center text-red-600 font-medium">
                                    <svg
                                        className="w-5 h-5 mr-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                                        ></path>
                                    </svg>
                                    Thousands of user experiences analyzed
                                </div>
                            </div>
                        </div>

                        <div className="mb-8">
                            <h2 className="text-2xl font-bold mb-4 text-gray-900">Our Ranking Methodology</h2>
                            <p className="text-gray-700 mb-4">
                                After completing our comprehensive evaluation process, we assign scores across multiple categories and
                                calculate an overall rating for each platform. Our ranking algorithm weighs different factors based on
                                their importance to Irish bettors:
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                <div className="bg-white p-4 rounded-lg border border-gray-200">
                                    <div className="flex items-center mb-2">
                                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                                            <svg
                                                className="w-6 h-6 text-green-600"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                                ></path>
                                            </svg>
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900">Safety & Security: 25%</h3>
                                    </div>
                                    <p className="text-gray-700 text-sm">
                                        Licensing, regulation compliance, data protection, and responsible gambling measures.
                                    </p>
                                </div>

                                <div className="bg-white p-4 rounded-lg border border-gray-200">
                                    <div className="flex items-center mb-2">
                                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                                            <svg
                                                className="w-6 h-6 text-blue-600"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                                                ></path>
                                            </svg>
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900">Betting Experience: 20%</h3>
                                    </div>
                                    <p className="text-gray-700 text-sm">
                                        Market variety, odds quality, live betting options, and special features.
                                    </p>
                                </div>

                                <div className="bg-white p-4 rounded-lg border border-gray-200">
                                    <div className="flex items-center mb-2">
                                        <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center mr-3">
                                            <svg
                                                className="w-6 h-6 text-yellow-600"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                ></path>
                                            </svg>
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900">Bonuses & Promotions: 15%</h3>
                                    </div>
                                    <p className="text-gray-700 text-sm">
                                        Welcome offer value, wagering requirements, ongoing promotions, and loyalty programs.
                                    </p>
                                </div>

                                <div className="bg-white p-4 rounded-lg border border-gray-200">
                                    <div className="flex items-center mb-2">
                                        <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                                            <svg
                                                className="w-6 h-6 text-purple-600"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                                                ></path>
                                            </svg>
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900">Banking: 15%</h3>
                                    </div>
                                    <p className="text-gray-700 text-sm">
                                        Payment method variety, deposit/withdrawal speeds, fees, and limits.
                                    </p>
                                </div>

                                <div className="bg-white p-4 rounded-lg border border-gray-200">
                                    <div className="flex items-center mb-2">
                                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mr-3">
                                            <svg
                                                className="w-6 h-6 text-red-600"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                                                ></path>
                                            </svg>
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900">Customer Support: 10%</h3>
                                    </div>
                                    <p className="text-gray-700 text-sm">
                                        Support channels, response times, quality of assistance, and help resources.
                                    </p>
                                </div>

                                <div className="bg-white p-4 rounded-lg border border-gray-200">
                                    <div className="flex items-center mb-2">
                                        <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                                            <svg
                                                className="w-6 h-6 text-indigo-600"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                                                ></path>
                                            </svg>
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900">Mobile Experience: 10%</h3>
                                    </div>
                                    <p className="text-gray-700 text-sm">
                                        Mobile site quality, app availability and performance, and mobile-specific features.
                                    </p>
                                </div>

                                <div className="bg-white p-4 rounded-lg border border-gray-200 md:col-span-2">
                                    <div className="flex items-center mb-2">
                                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                                            <svg
                                                className="w-6 h-6 text-gray-600"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                                                ></path>
                                            </svg>
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900">User Feedback & Reputation: 5%</h3>
                                    </div>
                                    <p className="text-gray-700 text-sm">
                                        User reviews, industry reputation, complaint resolution, and longevity in the market.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mb-8">
                            <h2 className="text-2xl font-bold mb-4 text-gray-900">Our Commitment to Accuracy</h2>
                            <p className="text-gray-700 mb-4">
                                We understand that the betting landscape is constantly evolving. That's why we:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-gray-700">
                                <li className="mb-2">
                                    Re-evaluate all ranked sites every 3 months to ensure our information remains current
                                </li>
                                <li className="mb-2">
                                    Immediately update our rankings when significant changes occur (ownership changes, major platform
                                    updates, etc.)
                                </li>
                                <li className="mb-2">
                                    Maintain ongoing test accounts to monitor performance and service quality over time
                                </li>
                                <li className="mb-2">
                                    Remove sites from our rankings if they fail to maintain our strict quality standards
                                </li>
                            </ul>
                        </div>

                        <div className="mb-8">
                            <h2 className="text-2xl font-bold mb-4 text-gray-900">Our Expert Team</h2>
                            <p className="text-gray-700 mb-4">
                                Our evaluations are conducted by a team of betting industry professionals with decades of combined
                                experience. Our team includes:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-gray-700">
                                <li className="mb-2">Former bookmakers and odds compilers</li>
                                <li className="mb-2">Professional sports bettors</li>
                                <li className="mb-2">Gambling industry compliance specialists</li>
                                <li className="mb-2">User experience researchers</li>
                                <li className="mb-2">Data analysts specializing in betting markets</li>
                            </ul>
                            <p className="text-gray-700">
                                This diverse expertise allows us to evaluate betting sites from multiple perspectives, ensuring our
                                rankings reflect the needs and priorities of all types of Irish bettors.
                            </p>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
                            <h2 className="text-2xl font-bold mb-4 text-gray-900">Our Independence</h2>
                            <p className="text-gray-700 mb-4">
                                While we do receive compensation from some betting sites through affiliate partnerships, this never
                                influences our rankings or reviews. Our evaluation process is completely independent, and we prioritize
                                user experience and safety above all else.
                            </p>
                            <p className="text-gray-700 mb-4">
                                We regularly recommend sites with which we have no financial relationship, and we never accept payment
                                for favorable reviews or higher rankings. Our reputation is built on trust and integrity, and we're
                                committed to maintaining these standards in everything we do.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
