import { Star } from "lucide-react"
import Link from "next/link"

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-gray-50">


            {/* Content */}
            <section className="py-8 md:py-12 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Terms and Conditions</h1>
                    <div className="prose prose-gray max-w-none">
                        <p className="text-gray-700 mb-4">Last Updated: May 21, 2025</p>

                        <div className="mb-6">
                            <h2 className="text-xl font-bold mb-3 text-gray-900">1. Introduction</h2>
                            <p className="text-gray-700 mb-3">
                                Welcome to Top Betting Irish Site. These Terms and Conditions govern your use of our website and the
                                services we provide. By accessing or using our website, you agree to be bound by these Terms. If you
                                disagree with any part of these terms, please do not use our website.
                            </p>
                        </div>

                        <div className="mb-6">
                            <h2 className="text-xl font-bold mb-3 text-gray-900">2. Definitions</h2>
                            <p className="text-gray-700 mb-3">"Website" refers to Top Betting Irish Site.</p>
                            <p className="text-gray-700 mb-3">
                                "User," "You," and "Your" refers to you, the person accessing this website and accepting these Terms and
                                Conditions.
                            </p>
                            <p className="text-gray-700 mb-3">"Company," "We," "Us," and "Our" refers to Top Betting Irish Site.</p>
                            <p className="text-gray-700 mb-3">
                                "Content" refers to all information, text, graphics, images, and other materials displayed on our
                                website.
                            </p>
                        </div>

                        <div className="mb-6">
                            <h2 className="text-xl font-bold mb-3 text-gray-900">3. Age Restriction</h2>
                            <p className="text-gray-700 mb-3">
                                Our website is intended for individuals who are at least 18 years old. By accessing or using our
                                website, you confirm that you are at least 18 years of age. If we discover or have reason to suspect
                                that you are not at least 18 years old, we reserve the right to suspend or terminate your access to our
                                website immediately.
                            </p>
                        </div>

                        <div className="mb-6">
                            <h2 className="text-xl font-bold mb-3 text-gray-900">4. Intellectual Property</h2>
                            <p className="text-gray-700 mb-3">
                                The content on our website, including but not limited to text, graphics, logos, images, and software, is
                                the property of Top Betting Irish Site and is protected by copyright and other intellectual property
                                laws. You may not reproduce, distribute, modify, or create derivative works from any content on our
                                website without our express written permission.
                            </p>
                        </div>

                        <div className="mb-6">
                            <h2 className="text-xl font-bold mb-3 text-gray-900">5. User Conduct</h2>
                            <p className="text-gray-700 mb-3">When using our website, you agree not to:</p>
                            <ul className="list-disc pl-6 mb-3 text-gray-700">
                                <li className="mb-2">Use our website in any way that violates any applicable laws or regulations.</li>
                                <li className="mb-2">
                                    Use our website to transmit or send unsolicited or unauthorized advertising or promotional material.
                                </li>
                                <li className="mb-2">
                                    Impersonate or attempt to impersonate the Company, a Company employee, or another user.
                                </li>
                                <li className="mb-2">
                                    Engage in any activity that could disable, overburden, damage, or impair our website or interfere with
                                    any other party's use of the website.
                                </li>
                                <li className="mb-2">
                                    Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of our website,
                                    the server on which our website is stored, or any server, computer, or database connected to our
                                    website.
                                </li>
                            </ul>
                        </div>

                        <div className="mb-6">
                            <h2 className="text-xl font-bold mb-3 text-gray-900">6. Disclaimer of Warranties</h2>
                            <p className="text-gray-700 mb-3">
                                Our website and its content are provided on an "as is" and "as available" basis without any warranties
                                of any kind, either express or implied. We do not warrant that our website will be uninterrupted or
                                error-free, that defects will be corrected, or that our website or the server that makes it available
                                are free of viruses or other harmful components.
                            </p>
                        </div>

                        <div className="mb-6">
                            <h2 className="text-xl font-bold mb-3 text-gray-900">7. Limitation of Liability</h2>
                            <p className="text-gray-700 mb-3">
                                In no event shall Top Betting Irish Site, its directors, employees, partners, agents, suppliers, or
                                affiliates be liable for any indirect, incidental, special, consequential, or punitive damages,
                                including without limitation, loss of profits, data, use, goodwill, or other intangible losses,
                                resulting from your access to or use of or inability to access or use our website.
                            </p>
                        </div>

                        <div className="mb-6">
                            <h2 className="text-xl font-bold mb-3 text-gray-900">8. Affiliate Disclosure</h2>
                            <p className="text-gray-700 mb-3">
                                Our website may contain affiliate links to products or services on third-party websites. We may receive
                                a commission if you click on these links and make a purchase. This affiliate relationship does not
                                affect our editorial independence or the content we provide.
                            </p>
                        </div>

                        <div className="mb-6">
                            <h2 className="text-xl font-bold mb-3 text-gray-900">9. Changes to Terms</h2>
                            <p className="text-gray-700 mb-3">
                                We reserve the right to modify these Terms and Conditions at any time. Changes will be effective
                                immediately upon posting on our website. Your continued use of our website after any changes to these
                                Terms constitutes your acceptance of the new Terms.
                            </p>
                        </div>

                        <div className="mb-6">
                            <h2 className="text-xl font-bold mb-3 text-gray-900">10. Governing Law</h2>
                            <p className="text-gray-700 mb-3">
                                These Terms shall be governed by and construed in accordance with the laws of Ireland, without regard to
                                its conflict of law provisions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
