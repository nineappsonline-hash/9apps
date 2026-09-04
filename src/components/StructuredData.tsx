export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'NineApps',
    url: 'https://nineapps.dev',
    logo: 'https://nineapps.dev/Logo.jpeg',
    description:
      'NineApps builds industry-specific SaaS platforms for construction accounting, CRM & ticketing, security services management, and sports academy operations.',
    sameAs: [],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      availableLanguage: ['English', 'Arabic'],
    },
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'NineApps',
    url: 'https://nineapps.dev',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://nineapps.dev/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }

  const softwareApps = [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Ebny',
      applicationCategory: 'BusinessApplication',
      description:
        'Construction accounting ERP for Saudi Arabia. Project accounting, IFRS compliance, ZATCA e-invoicing, HR/payroll, and field operations.',
      url: 'https://nineapps.dev/ebny',
      offers: {
        '@type': 'Offer',
        price: '5000',
        priceCurrency: 'EGP',
        priceValidUntil: '2027-12-31',
      },
      operatingSystem: 'Web',
      applicationSubCategory: 'Construction Accounting ERP',
      featureList:
        'Project accounting, Percentage of completion, ZATCA e-invoicing, IFRS compliance, HR & payroll, Bank reconciliation, Procurement, Cost control',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Clienta',
      applicationCategory: 'BusinessApplication',
      description:
        'Multi-tenant CRM platform for B2B SaaS companies. Customer service, support tickets, live chat, account health, incidents, and billing.',
      url: 'https://nineapps.dev/clienta',
      offers: {
        '@type': 'Offer',
        price: '1750',
        priceCurrency: 'EGP',
        priceValidUntil: '2027-12-31',
      },
      operatingSystem: 'Web',
      applicationSubCategory: 'CRM & Ticketing Platform',
      featureList:
        'CRM, Support tickets, SLA engine, Omnichannel inbox, Live chat widget, Incident management, Knowledge base, Multi-tenant, Reports & analytics',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Hesn',
      applicationCategory: 'BusinessApplication',
      description:
        'Security services management platform. Guard management, site operations, shift scheduling, patrol tracking, billing, and client portal.',
      url: 'https://nineapps.dev/hesn',
      offers: {
        '@type': 'Offer',
        price: '3000',
        priceCurrency: 'EGP',
        priceValidUntil: '2027-12-31',
      },
      operatingSystem: 'Web',
      applicationSubCategory: 'Security Operations Management',
      featureList:
        'Guard management, Site & contract management, Shift scheduling, Patrol tracking, Personnel management, Invoicing, Client portal, Compliance tracking',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Volleyra',
      applicationCategory: 'BusinessApplication',
      description:
        'Sports academy management platform. Player registration, training schedules, session booking, attendance tracking, billing, and performance analytics.',
      url: 'https://nineapps.dev/volleyra',
      offers: {
        '@type': 'Offer',
        price: '1750',
        priceCurrency: 'EGP',
        priceValidUntil: '2027-12-31',
      },
      operatingSystem: 'Web',
      applicationSubCategory: 'Sports Academy Management',
      featureList:
        'Player registration, Training schedules, Session booking, Attendance tracking, Billing & payments, Coach management, Match tracking, Performance analytics',
    },
  ]

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is Ebny?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ebny is a construction accounting ERP built for Saudi Arabia. It covers project accounting, percentage of completion (POC), ZATCA e-invoicing, IFRS compliance, HR/payroll, procurement, and field operations in one unified bilingual platform (English & Arabic).',
        },
      },
      {
        '@type': 'Question',
        name: 'What is Clienta?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Clienta is a multi-tenant CRM and customer support platform for B2B SaaS companies. It includes support ticketing with SLA management, omnichannel inbox (email, WhatsApp, VoIP, social media), live chat widget, incident management, knowledge base, and customer health scoring.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is Hesn?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Hesn is a security services management platform for guard companies. It manages site assignments, shift scheduling, patrol tracking, personnel HR, invoicing, client portal, guard licensing, and compliance — all from a single dashboard.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is Volleyra?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Volleyra is a sports academy management platform. It handles player registration, membership plans, training session scheduling, attendance tracking, payments, coach management, match tracking, and performance analytics for volleyball, football, basketball, swimming, padel, and other sports.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is NineApps available in Arabic?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. All NineApps products (Ebny, Clienta, Hesn, and Volleyra) are fully bilingual with English and Arabic support, including right-to-left (RTL) layout.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Ebny support ZATCA compliance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Ebny is fully compliant with ZATCA Phase 2 e-invoicing requirements, including UBL XML generation, QR codes, and ECDSA digital signatures. It also handles VAT (15%), Zakat, Saudization tracking, and other Saudi regulatory requirements.',
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      {softwareApps.map((app, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(app) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}
