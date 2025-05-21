import { Star } from "lucide-react"
import Link from "next/link"

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-gray-50">


            {/* Content */}
            <section className="py-8 md:py-12 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Privacy Policy</h1>
                    <div className="prose prose-gray max-w-none">
                        <p className="text-gray-700 mb-4">Last Updated: May 21, 2025</p>

                        <div className="mb-6">
                            <h2 className="text-xl font-bold mb-3 text-gray-900">1. Introduction</h2>
                            <p className="text-gray-700 mb-3">
                                At Top Betting Irish Site, we respect your privacy and are committed to protecting your personal data.
                                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you
                                visit our website.
                            </p>
                            <p className="text-gray-700 mb-3">
                                Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy,
                                please do not access our website.
                            </p>
                        </div>

                        <div className="mb-6">
                            <h2 className="text-xl font-bold mb-3 text-gray-900">2. Information We Collect</h2>
                            <p className="text-gray-700 mb-3">We may collect the following types of information:</p>
                            <h3 className="text-lg font-semibold mb-2 text-gray-900">2.1 Personal Data</h3>
                            <p className="text-gray-700 mb-3">
                                When you visit our website, we may collect certain information that can be used to identify you
                                ("Personal Data"), such as:
                            </p>
                            <ul className="list-disc pl-6 mb-3 text-gray-700">
                                <li className="mb-2">IP address</li>
                                <li className="mb-2">Browser type and version</li>
                                <li className="mb-2">Time zone setting and location</li>
                                <li className="mb-2">Operating system and platform</li>
                                <li className="mb-2">Pages you view on our website</li>
                                <li className="mb-2">Time spent on those pages</li>
                            </ul>

                            <h3 className="text-lg font-semibold mb-2 text-gray-900">2.2 Non-Personal Data</h3>
                            <p className="text-gray-700 mb-3">
                                We may also collect non-personal data, which is data that cannot be used to identify you. This may
                                include aggregated data derived from Personal Data after it has been anonymized.
                            </p>
                        </div>

                        <div className="mb-6">
                            <h2 className="text-xl font-bold mb-3 text-gray-900">3. How We Use Your Information</h2>
                            <p className="text-gray-700 mb-3">
                                We may use the information we collect for various purposes, including:
                            </p>
                            <ul className="list-disc pl-6 mb-3 text-gray-700">
                                <li className="mb-2">To provide and maintain our website</li>
                                <li className="mb-2">To improve our website and user experience</li>
                                <li className="mb-2">To analyze how users use our website</li>
                                <li className="mb-2">To detect, prevent, and address technical issues</li>
                                <li className="mb-2">To comply with legal obligations</li>
                            </ul>
                        </div>

                        <div className="mb-6">
                            <h2 className="text-xl font-bold mb-3 text-gray-900">4. Disclosure of Your Information</h2>
                            <p className="text-gray-700 mb-3">We may disclose your information in the following situations:</p>
                            <h3 className="text-lg font-semibold mb-2 text-gray-900">4.1 Legal Requirements</h3>
                            <p className="text-gray-700 mb-3">
                                We may disclose your information where we are legally required to do so in order to comply with
                                applicable law, governmental requests, a judicial proceeding, court order, or legal process.
                            </p>
                            <h3 className="text-lg font-semibold mb-2 text-gray-900">4.2 Business Transfers</h3>
                            <p className="text-gray-700 mb-3">
                                We may share or transfer your information in connection with, or during negotiations of, any merger,
                                sale of company assets, financing, or acquisition of all or a portion of our business to another
                                company.
                            </p>
                            <h3 className="text-lg font-semibold mb-2 text-gray-900">4.3 Third-Party Service Providers</h3>
                            <p className="text-gray-700 mb-3">
                                We may share your information with third-party service providers who perform services on our behalf,
                                such as website hosting, data analysis, and customer service.
                            </p>
                        </div>

                        <div className="mb-6">
                            <h2 className="text-xl font-bold mb-3 text-gray-900">5. Data Security</h2>
                            <p className="text-gray-700 mb-3">
                                We have implemented appropriate technical and organizational security measures designed to protect the
                                security of any personal information we process. However, please also remember that we cannot guarantee
                                that the internet itself is 100% secure.
                            </p>
                        </div>

                        <div className="mb-6">
                            <h2 className="text-xl font-bold mb-3 text-gray-900">6. Your Data Protection Rights</h2>
                            <p className="text-gray-700 mb-3">
                                Depending on your location, you may have certain rights regarding your personal information, such as:
                            </p>
                            <ul className="list-disc pl-6 mb-3 text-gray-700">
                                <li className="mb-2">The right to access the personal information we have about you</li>
                                <li className="mb-2">
                                    The right to request that we correct any personal information we have about you
                                </li>
                                <li className="mb-2">The right to request that we delete any personal information we have about you</li>
                                <li className="mb-2">The right to object to processing of your personal information</li>
                                <li className="mb-2">The right to data portability</li>
                                <li className="mb-2">The right to withdraw consent</li>
                            </ul>
                        </div>

                        <div className="mb-6">
                            <h2 className="text-xl font-bold mb-3 text-gray-900">7. Changes to This Privacy Policy</h2>
                            <p className="text-gray-700 mb-3">
                                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                                Privacy Policy on this page. Changes to this Privacy Policy are effective when they are posted on this
                                page.
                            </p>
                        </div>

                        <div className="mb-6">
                            <h2 className="text-xl font-bold mb-3 text-gray-900">8. Children's Privacy</h2>
                            <p className="text-gray-700 mb-3">
                                Our website is not intended for individuals under the age of 18. We do not knowingly collect personal
                                information from children under 18. If you are a parent or guardian and you are aware that your child
                                has provided us with personal information, please contact us.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
