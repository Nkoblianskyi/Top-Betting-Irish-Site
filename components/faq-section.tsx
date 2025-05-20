"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="container mx-auto px-3 md:px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-4 text-gray-900">Frequently Asked Questions</h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about betting sites, bonuses, and our review process.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-sm md:text-base font-medium text-gray-900">
                How do you select and rank betting sites?
              </AccordionTrigger>
              <AccordionContent className="text-xs md:text-sm text-gray-700">
                We evaluate betting sites based on multiple criteria including licensing, security measures, bonus
                offers, game variety, payment methods, customer support, and user experience. Our team of experts tests
                each platform thoroughly, and we regularly update our rankings to reflect current performance and
                offerings.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-sm md:text-base font-medium text-gray-900">
                Are all listed betting sites legal in Ireland?
              </AccordionTrigger>
              <AccordionContent className="text-xs md:text-sm text-gray-700">
                Yes, we only list betting sites that are fully licensed and regulated by reputable authorities such as
                the Irish Revenue Commissioners or other recognized international regulatory bodies. We verify the
                licensing status of each operator before including them in our rankings.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-sm md:text-base font-medium text-gray-900">
                How do welcome bonuses work?
              </AccordionTrigger>
              <AccordionContent className="text-xs md:text-sm text-gray-700">
                Welcome bonuses are promotional offers for new players. They typically come in the form of matched
                deposits (e.g., "100% up to €100") or free bets (e.g., "Bet €10 Get €30"). Each bonus comes with
                specific terms and conditions, including wagering requirements, minimum odds, and time limits. We
                recommend always reading the full T&Cs before claiming any bonus.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-sm md:text-base font-medium text-gray-900">
                What payment methods are typically available?
              </AccordionTrigger>
              <AccordionContent className="text-xs md:text-sm text-gray-700">
                Most Irish betting sites accept a variety of payment methods including credit/debit cards (Visa,
                Mastercard), e-wallets (PayPal, Skrill, Neteller), bank transfers, and prepaid cards. Some sites also
                accept newer methods like Apple Pay or cryptocurrency. Withdrawal times vary by method, with e-wallets
                typically being the fastest.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-sm md:text-base font-medium text-gray-900">
                How do I know if a betting site is safe?
              </AccordionTrigger>
              <AccordionContent className="text-xs md:text-sm text-gray-700">
                Safe betting sites have proper licensing, use SSL encryption to protect data, have clear privacy
                policies, and implement responsible gambling tools. They also have fair terms and conditions,
                transparent bonus rules, and a good reputation among users. All sites we recommend meet these safety
                criteria.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-sm md:text-base font-medium text-gray-900">
                What is responsible gambling?
              </AccordionTrigger>
              <AccordionContent className="text-xs md:text-sm text-gray-700">
                Responsible gambling means treating betting as entertainment, not as a way to make money. It involves
                setting time and money limits, never chasing losses, not gambling when upset or depressed, and seeking
                help if gambling becomes problematic. Reputable betting sites offer tools like deposit limits,
                time-outs, and self-exclusion to help players stay in control.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger className="text-sm md:text-base font-medium text-gray-900">
                How long do withdrawals usually take?
              </AccordionTrigger>
              <AccordionContent className="text-xs md:text-sm text-gray-700">
                Withdrawal times vary by payment method and betting site. E-wallets are typically the fastest (0-24
                hours), while card payments and bank transfers can take 1-5 business days. All sites have a processing
                period, which can range from a few hours to 48 hours. We highlight sites with faster withdrawal times in
                our rankings.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger className="text-sm md:text-base font-medium text-gray-900">
                Do you receive compensation from betting sites?
              </AccordionTrigger>
              <AccordionContent className="text-xs md:text-sm text-gray-700">
                Yes, we receive compensation from some of the betting sites we list through affiliate partnerships.
                However, this does not influence our rankings or reviews. Our evaluation process is independent, and we
                prioritize user experience and safety above all else. We clearly disclose our affiliate relationships in
                our Advertiser Info.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
