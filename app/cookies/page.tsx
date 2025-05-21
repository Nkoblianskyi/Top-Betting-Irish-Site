import { Star } from "lucide-react"
import Link from "next/link"

export default function CookiesPage() {
    return (
        <main className="min-h-screen bg-gray-50">


            {/* Content */}
            <section className="py-8 md:py-12 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Cookie Policy</h1>
                    <div className="prose prose-gray max-w-none">
                        <p className="text-gray-700 mb-4">Last Updated: May 21, 2025</p>

                        <div className="mb-6">
                            <h2 className="text-xl font-bold mb-3 text-gray-900">1. Introduction</h2>
                            <p className="text-gray-700 mb-3">
                                This Cookie Policy explains how Top Betting Irish Site uses cookies and similar technologies to
                                recognize you when you visit our website. It explains what these technologies are and why we use them,
                                as well as your rights to control our use of them.
                            </p>
                        </div>

                        <div className="mb-6">
                            <h2 className="text-xl font-bold mb-3 text-gray-900">2. What Are Cookies?</h2>
                            <p className="text-gray-700 mb-3">
                                Cookies are small data files that are placed on your computer or mobile device when you visit a website.
                                Cookies are widely used by website owners in order to make their websites work, or to work more
                                efficiently, as well as to provide reporting information.
                            </p>
                            <p className="text-gray-700 mb-3">
                                Cookies set by the website owner (in this case, Top Betting Irish Site) are called "first-party
                                cookies." Cookies set by parties other than the website owner are called "third-party cookies."
                                Third-party cookies enable third-party features or functionality to be provided on or through the
                                website (e.g., advertising, interactive content, and analytics). The parties that set these third-party
                                cookies can recognize your computer both when it visits the website in question and also when it visits
                                certain other websites.
                            </p>
                        </div>

                        <div className="mb-6">
                            <h2 className="text-xl font-bold mb-3 text-gray-900">3. Why Do We Use Cookies?</h2>
                            <p className="text-gray-700 mb-3">
                                We use first-party and third-party cookies for several reasons. Some cookies are required for technical
                                reasons in order for our website to operate, and we refer to these as "essential" or "strictly
                                necessary" cookies. Other cookies also enable us to track and target the interests of our users to
                                enhance the experience on our website. Third parties serve cookies through our website for advertising,
                                analytics, and other purposes.
                            </p>
                        </div>

                        <div className="mb-6">
                            <h2 className="text-xl font-bold mb-3 text-gray-900">4. Types of Cookies We Use</h2>
                            <p className="text-gray-700 mb-3">
                                The specific types of first and third-party cookies served through our website and the purposes they
                                perform are described below:
                            </p>

                            <h3 className="text-lg font-semibold mb-2 text-gray-900">4.1 Essential Cookies</h3>
                            <p className="text-gray-700 mb-3">
                                These cookies are strictly necessary to provide you with services available through our website and to
                                use some of its features, such as access to secure areas. Because these cookies are strictly necessary
                                to deliver the website, you cannot refuse them without impacting how our website functions.
                            </p>

                            <h3 className="text-lg font-semibold mb-2 text-gray-900">4.2 Performance and Functionality Cookies</h3>
                            <p className="text-gray-700 mb-3">
                                These cookies are used to enhance the performance and functionality of our website but are non-essential
                                to their use. However, without these cookies, certain functionality may become unavailable.
                            </p>

                            <h3 className="text-lg font-semibold mb-2 text-gray-900">4.3 Analytics and Customization Cookies</h3>
                            <p className="text-gray-700 mb-3">
                                These cookies collect information that is used either in aggregate form to help us understand how our
                                website is being used or how effective our marketing campaigns are, or to help us customize our website
                                for you.
                            </p>

                            <h3 className="text-lg font-semibold mb-2 text-gray-900">4.4 Advertising Cookies</h3>
                            <p className="text-gray-700 mb-3">
                                These cookies are used to make advertising messages more relevant to you. They perform functions like
                                preventing the same ad from continuously reappearing, ensuring that ads are properly displayed, and in
                                some cases selecting advertisements that are based on your interests.
                            </p>
                        </div>

                        <div className="mb-6">
                            <h2 className="text-xl font-bold mb-3 text-gray-900">5. How Can You Control Cookies?</h2>
                            <p className="text-gray-700 mb-3">
                                You have the right to decide whether to accept or reject cookies. You can exercise your cookie
                                preferences by clicking on the appropriate opt-out links provided in the cookie banner on our website.
                            </p>
                            <p className="text-gray-700 mb-3">
                                You can also set or amend your web browser controls to accept or refuse cookies. If you choose to reject
                                cookies, you may still use our website though your access to some functionality and areas of our website
                                may be restricted. As the means by which you can refuse cookies through your web browser controls vary
                                from browser to browser, you should visit your browser's help menu for more information.
                            </p>
                        </div>

                        <div className="mb-6">
                            <h2 className="text-xl font-bold mb-3 text-gray-900">6. How Often Will We Update This Cookie Policy?</h2>
                            <p className="text-gray-700 mb-3">
                                We may update this Cookie Policy from time to time in order to reflect, for example, changes to the
                                cookies we use or for other operational, legal, or regulatory reasons. Please therefore revisit this
                                Cookie Policy regularly to stay informed about our use of cookies and related technologies.
                            </p>
                            <p className="text-gray-700 mb-3">
                                The date at the top of this Cookie Policy indicates when it was last updated.
                            </p>
                        </div>

                        <div className="mb-6">
                            <h2 className="text-xl font-bold mb-3 text-gray-900">7. Do Not Track</h2>
                            <p className="text-gray-700 mb-3">
                                Some browsers have a "Do Not Track" feature that lets you tell websites that you do not want to have
                                your online activities tracked. At this time, we do not respond to browser "Do Not Track" signals.
                            </p>
                        </div>

                        <div className="mb-6">
                            <h2 className="text-xl font-bold mb-3 text-gray-900">8. Cookies That Have Been Set in the Past</h2>
                            <p className="text-gray-700 mb-3">
                                If you have disabled one or more cookies, we may still use information collected from cookies prior to
                                your disabled preference being set; however, we will stop using the disabled cookie to collect any
                                further information.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
