'use client';

export default function TermsAndServicesPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 text-white">
      <h1 className="text-4xl font-bold mb-6">Terms & Services</h1>

      <section className="space-y-6 text-gray-300 text-sm">
        <div>
          <h2 className="text-xl font-semibold text-blue-400">1. Service Overview</h2>
          <p>
            Simpler Salon provides professional website packages tailored for small businesses. Each package is
            available for a <strong>one-time setup fee</strong>, with no recurring monthly payments required for
            ongoing website usage.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-blue-400">2. One-Time Fee</h2>
          <p>
            All listed packages come with a single, upfront cost. Once paid, you won&apos;t owe any monthly or recurring
            fees for maintaining your website through Simpler Salon.
          </p>
          <p className="mt-2">
            While most clients will only pay a one-time fee, <strong>there may be exceptions</strong> based on the
            complexity or uniqueness of your project needs. In such cases, any additional charges will be clearly
            communicated and agreed upon before any payment is made.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-blue-400">3. Custom Packages</h2>
          <p>
            Our base package mirrors the structure and features of our demo site. You’ll be able to change all text
            content, images, colors, and service offerings to suit your business — while maintaining the same layout
            and functionality.
          </p>
          <p className="mt-2">
            Custom packages offer complete flexibility: layout, structure, animations, functionality, integrations,
            and unique design choices can all be tailored to your needs. These may require a higher one-time fee.
            We always provide a detailed quote before beginning any custom work.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-blue-400">4. Domain Name & Renewal</h2>
          <p>
            Clients are responsible for their domain name registration and renewal. Domain costs are not included in
            our one-time website fee and must be paid annually to your domain registrar. Fees typically range from
            <strong> $10 to over $13,000</strong>, depending on the domain name and extension.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-blue-400">5. What&apos;s Included</h2>
          <ul className="list-disc list-inside ml-4">
            <li>Mobile-optimized, responsive website</li>
            <li>Admin dashboard for easy updates</li>
            <li>Deployment and domain setup support</li>
            <li>Search Engine Optimization</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-blue-400">6. Payment Terms</h2>
          <p>
            Payment is required in full before we begin any work. For custom packages, we may request a deposit, with
            the remaining balance due upon project completion.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-blue-400">7. Revisions & Additional Work</h2>
          <p>
            Basic revisions are included in each package. Work beyond the original scope may be subject to additional
            charges, which will be quoted in advance.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-blue-400">8. Support & Maintenance</h2>
          <p>
            We offer a short post-launch support window to address any final fixes. Ongoing support and maintenance
            plans can be discussed as needed.
          </p>
        </div>
      </section>

      <div className="mt-12 border-t border-gray-700 pt-6 text-sm text-gray-500">
        Simpler Salon is committed to providing affordable, professional web solutions without the burden of ongoing
        fees. By choosing Simpler Salon, you pay once, own your site, and stay in control.
      </div>
    </main>
  );
}
