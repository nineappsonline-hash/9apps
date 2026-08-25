'use client'

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'

export type Locale = 'en' | 'ar'

type TranslationKeys = {
  // Navbar
  features: string
  products: string
  pricing: string
  testimonials: string
  signIn: string
  getStarted: string
  // Hero
  badge: string
  headline1: string
  headline2: string
  heroSubtitle: string
  startFreeTrial: string
  watchDemo: string
  activeUsers: string
  uptime: string
  integrations: string
  userRating: string
  // Features
  featuresLabel: string
  featuresTitle1: string
  featuresTitle2: string
  featuresSubtitle: string
  feature1Title: string
  feature1Desc: string
  feature2Title: string
  feature2Desc: string
  feature3Title: string
  feature3Desc: string
  feature4Title: string
  feature4Desc: string
  feature5Title: string
  feature5Desc: string
  feature6Title: string
  feature6Desc: string
  feature7Title: string
  feature7Desc: string
  feature8Title: string
  feature8Desc: string
  feature9Title: string
  feature9Desc: string
  // Products
  productsLabel: string
  productsTitle1: string
  productsTitle2: string
  productsSubtitle: string
  volleyraName: string
  volleyraTagline: string
  volleyraDesc: string
  volleyraStartTrial: string
  volleyraMoreInfo: string
  volleyraHeroSub: string
  volleyraFeaturesSubtitle: string
  volleyraFeaturesTitle: string
  // Workflow
  workflowEnroll: string
  workflowSchedule: string
  workflowAttend: string
  workflowBill: string
  workflowProfit: string
  workflowSubtitle: string
  // Stats
  statModules: string
  statSync: string
  statLanguages: string
  statSetup: string
  // Features heading
  featuresHeading1: string
  featuresHeading2: string
  // Feature 1 - Dashboard
  f1Subtitle: string
  f1Title: string
  f1Desc: string
  f1p1: string
  f1p2: string
  f1p3: string
  f1p4: string
  // Feature 2 - Members
  f2Subtitle: string
  f2Title: string
  f2Desc: string
  f2p1: string
  f2p2: string
  f2p3: string
  f2p4: string
  f2p5: string
  f2p6: string
  // Feature 3 - Payments
  f3Subtitle: string
  f3Title: string
  f3Desc: string
  f3p1: string
  f3p2: string
  f3p3: string
  f3p4: string
  // Feature 4 - Scheduling
  f4Subtitle: string
  f4Title: string
  f4Desc: string
  f4p1: string
  f4p2: string
  f4p3: string
  f4p4: string
  f4p5: string
  // Feature 5 - Attendance
  f5Subtitle: string
  f5Title: string
  f5Desc: string
  f5p1: string
  f5p2: string
  f5p3: string
  f5p4: string
  f5p5: string
  // Feature 6 - Financial Engine
  f6Subtitle: string
  f6Title: string
  f6Desc: string
  f6p1: string
  f6p2: string
  f6p3: string
  f6p4: string
  f6p5: string
  // Feature 7 - Reports
  f7Subtitle: string
  f7Title: string
  f7Desc: string
  f7p1: string
  f7p2: string
  f7p3: string
  f7p4: string
  f7p5: string
  f7p6: string
  // Feature 8 - Teams
  f8Subtitle: string
  f8Title: string
  f8Desc: string
  f8p1: string
  f8p2: string
  f8p3: string
  f8p4: string
  // Feature 9 - Tournaments
  f9Subtitle: string
  f9Title: string
  f9Desc: string
  f9p1: string
  f9p2: string
  f9p3: string
  // Feature 10 - Engagement
  f10Subtitle: string
  f10Title: string
  f10Desc: string
  f10p1: string
  f10p2: string
  f10p3: string
  f10p4: string
  f10p5: string
  f10p6: string
  // Feature 11 - Public Page
  f11Subtitle: string
  f11Title: string
  f11Desc: string
  f11p1: string
  f11p2: string
  f11p3: string
  // Feature 12 - Notifications
  f12Subtitle: string
  f12Title: string
  f12Desc: string
  f12p1: string
  f12p2: string
  f12p3: string
  f12p4: string
  // Built for Your Region
  regionTitle: string
  regionSubtitle: string
  region1Label: string
  region1Desc: string
  region2Label: string
  region2Desc: string
  region3Label: string
  region3Desc: string
  region4Label: string
  region4Desc: string
  // Security
  securityTitle: string
  securitySubtitle: string
  security1: string
  security2: string
  security3: string
  security4: string
  security5: string
  security6: string
  // CTA
  ctaHeading: string
  ctaText: string
  ctaBack: string
  // Pricing
  pricingLabel: string
  pricingTitle1: string
  pricingTitle2: string
  pricingSubtitle: string
  perMonth: string
  subscribe: string
  // Testimonials
  testimonialsLabel: string
  testimonialsTitle1: string
  testimonialsTitle2: string
  testimonialsSubtitle: string
  // CTA
  ctaTitle: string
  ctaSubtitle: string
  ctaPrimary: string
  ctaSecondary: string
  // Footer
  footerDesc: string
  product: string
  company: string
  resources: string
  legal: string
  copyright: string
  builtWith: string
  // Footer links
  footerVolleyra: string
  footerAnalytics: string
  footerIntegrations: string
  aboutUs: string
  careers: string
  blog: string
  pressKit: string
  documentation: string
  helpCenter: string
  apiReference: string
  status: string
  privacyPolicy: string
  termsOfService: string
  cookiePolicy: string
  gdpr: string
  contactUs: string
  // Return Policy
  returnPolicy: string
  returnPolicyTitle: string
  returnPolicyIntro: string
  returnPolicyLastUpdated: string
  rpFreeTrialTitle: string
  rpFreeTrialP1: string
  rpFreeTrialP2: string
  rpFreeTrialP3: string
  rpSubscriptionTitle: string
  rpSubscriptionP1: string
  rpSubscriptionP2: string
  rpSubscriptionP3: string
  rpCancellationTitle: string
  rpCancellationP1: string
  rpCancellationP2: string
  rpCancellationStepsTitle: string
  rpCancellationStep1: string
  rpCancellationStep2: string
  rpCancellationStep3: string
  rpRefundTitle: string
  rpRefundP1: string
  rpRefundP2: string
  rpRefundP3: string
  rpRefundP4: string
  rpExceptionsTitle: string
  rpException1: string
  rpException2: string
  rpException3: string
  rpException4: string
  rpDataTitle: string
  rpDataP1: string
  rpDataP2: string
  rpContactTitle: string
  rpContactP1: string
  rpContactEmail: string
  // Privacy Policy
  privacyTitle: string
  privacyIntro: string
  privacyLastUpdated: string
  ppInfoWeCollectTitle: string
  ppInfoWeCollectP1: string
  ppInfoWeCollectP2: string
  ppInfoWeCollectList1: string
  ppInfoWeCollectList2: string
  ppInfoWeCollectList3: string
  ppInfoWeCollectList4: string
  ppHowWeUseTitle: string
  ppHowWeUseP1: string
  ppHowWeUseList1: string
  ppHowWeUseList2: string
  ppHowWeUseList3: string
  ppHowWeUseList4: string
  ppHowWeUseList5: string
  ppSharingTitle: string
  ppSharingP1: string
  ppSharingList1: string
  ppSharingList2: string
  ppSharingList3: string
  ppSecurityTitle: string
  ppSecurityP1: string
  ppSecurityP2: string
  ppRetentionTitle: string
  ppRetentionP1: string
  ppRetentionP2: string
  ppYourRightsTitle: string
  ppYourRightsP1: string
  ppYourRightsList1: string
  ppYourRightsList2: string
  ppYourRightsList3: string
  ppYourRightsList4: string
  ppCookiesTitle: string
  ppCookiesP1: string
  ppCookiesP2: string
  ppChildrenTitle: string
  ppChildrenP1: string
  ppChangesTitle: string
  ppChangesP1: string
  ppContactTitle: string
  ppContactP1: string
  // Sign In
  welcomeBack: string
  signInSubtitle: string
  continueWithGitHub: string
  continueWithGoogle: string
  orContinueWithEmail: string
  emailPlaceholder: string
  passwordPlaceholder: string
  forgotPassword: string
  signInButton: string
  noAccount: string
  signUpFree: string
  // Sign Up
  createAccount: string
  signUpSubtitle: string
  fullNamePlaceholder: string
  signUpButton: string
  hasAccount: string
  signInLink: string
}

const translations: Record<Locale, TranslationKeys> = {
  en: {
    // Navbar
    features: 'Features',
    products: 'Products',
    pricing: 'Pricing',
    testimonials: 'Testimonials',
    signIn: 'Sign In',
    getStarted: 'Get Started',
    // Hero
    badge: 'Next-Generation Business Software',
    headline1: 'Manage Your Business',
    headline2: 'With Intelligence',
    heroSubtitle: 'Powerful CRM and ERP solutions designed to streamline your workflows, boost productivity, and drive growth. Built for modern teams.',
    startFreeTrial: 'Start Free Trial',
    watchDemo: 'Watch Demo',
    activeUsers: 'Active Users',
    uptime: 'Uptime',
    integrations: 'Integrations',
    userRating: 'User Rating',
    // Features
    featuresLabel: 'Features',
    featuresTitle1: 'Everything you need to ',
    featuresTitle2: 'scale your business',
    featuresSubtitle: 'A comprehensive suite of tools designed to cover every aspect of your business operations, from sales to supply chain.',
    feature1Title: 'AI-Powered Insights',
    feature1Desc: 'Leverage machine learning to uncover hidden patterns in your business data and make smarter decisions.',
    feature2Title: '360° Customer View',
    feature2Desc: 'Get a complete picture of every customer interaction across all touchpoints in one unified dashboard.',
    feature3Title: 'Workflow Automation',
    feature3Desc: 'Automate repetitive tasks and design custom workflows that adapt to your business processes.',
    feature4Title: 'Real-Time Analytics',
    feature4Desc: 'Monitor KPIs, track performance metrics, and generate actionable reports with beautiful visualizations.',
    feature5Title: 'Enterprise Security',
    feature5Desc: 'Bank-grade encryption, role-based access control, and compliance with GDPR, SOC 2, and HIPAA.',
    feature6Title: 'Lightning Fast',
    feature6Desc: 'Optimized performance with sub-second load times and instant data synchronization across devices.',
    feature7Title: 'Global Scale',
    feature7Desc: 'Deploy across multiple regions with automatic failover and 99.99% uptime guarantee.',
    feature8Title: 'Smart Notifications',
    feature8Desc: 'Context-aware alerts and reminders that keep your team aligned without overwhelming them.',
    feature9Title: 'Modular Architecture',
    feature9Desc: 'Pick and choose the modules you need. Scale from startup to enterprise without changing platforms.',
    // Products
    productsLabel: 'Products',
    productsTitle1: 'Built for Sports ',
    productsTitle2: 'Academies',
    productsSubtitle: 'Powerful management tools designed to help sports academies run smoothly, track performance, and grow their programs.',
    volleyraName: 'Volleyra',
    volleyraTagline: 'Sports Academy Management',
    volleyraDesc: 'A complete management platform for sports academies. From player registration and training schedules to match tracking and performance analytics — Volleyra gives coaches and administrators everything they need to run a world-class academy.',
    volleyraStartTrial: 'Start Free Trial',
    volleyraMoreInfo: 'More Info',
    volleyraHeroSub: 'Replaces spreadsheets, WhatsApp groups and notebooks with a single platform that handles enrollment, scheduling, billing, attendance and profitability — so you can focus on coaching, not paperwork.',
    volleyraFeaturesSubtitle: 'Volleyra handles the full lifecycle of running an academy — from the moment a member joins to knowing exactly which sessions make money.',
    volleyraFeaturesTitle: 'Volleyra Features',
    // Workflow
    workflowEnroll: 'Enroll',
    workflowSchedule: 'Schedule',
    workflowAttend: 'Attend',
    workflowBill: 'Bill',
    workflowProfit: 'Profit',
    workflowSubtitle: 'The complete lifecycle — from enrollment to profitability',
    // Stats
    statModules: 'Feature Modules',
    statSync: 'Real-Time Sync',
    statLanguages: 'Languages (EN + AR)',
    statSetup: 'Setup Fee',
    // Features heading
    featuresHeading1: 'Everything You Need to ',
    featuresHeading2: 'Run Your Academy',
    // Feature 1 - Dashboard
    f1Subtitle: 'Instant Overview',
    f1Title: 'Command Center Dashboard',
    f1Desc: 'A role-aware home screen that answers "how is my academy doing?" at a glance. Owners see total members, monthly revenue, monthly costs and net profit — all updated in real time. Smart alerts flag members running out of sessions, unpaid members, and new sign-ups awaiting approval.',
    f1p1: 'Total members, revenue, costs, and net profit cards — always current',
    f1p2: 'Smart alerts for expiring sessions, unpaid members, and pending approvals',
    f1p3: 'Upcoming sessions with per-session profit/loss indicators',
    f1p4: 'Members see their own view: remaining sessions, attendance rate, and payment status',
    // Feature 2 - Members
    f2Subtitle: 'Complete Roster Management',
    f2Title: 'Members & Subscriptions',
    f2Desc: 'Your full member roster with search, filtering, sorting and pagination. Define flexible membership plans — Full (8 sessions), Half (4), or any custom plan you offer. The platform automatically tracks remaining sessions as attendance is taken, so you always know who is active, who needs renewal, and who has lapsed.',
    f2p1: 'Flexible membership plans — define any plan structure your academy offers',
    f2p2: 'Automatic remaining-session tracking as attendance is recorded',
    f2p3: 'One-click visual statuses: Paid, Needs Renewal, Unpaid',
    f2p4: 'Pending-signup approval queue — members join via invite code, you approve them',
    f2p5: 'Rich member profiles with payment history, attendance, badges, and evaluations',
    f2p6: 'Statement PDF export for any member — perfect for printing or emailing',
    // Feature 3 - Payments
    f3Subtitle: 'Effortless Financial Recording',
    f3Title: 'Payments & Receipts',
    f3Desc: 'Record payments with amount, date, plan, method and notes. Support for cash, card, mobile wallet, bank transfer, and more. Every payment generates a printable/downloadable receipt, and membership status updates automatically. Export the full payment log to CSV for your accountant.',
    f3p1: 'Multiple payment methods: cash, card, mobile wallet, bank transfer, other',
    f3p2: 'Printable and downloadable receipt page for every payment',
    f3p3: 'Membership status updates automatically when a payment is recorded',
    f3p4: 'Export the full payment log to CSV for accounting',
    // Feature 4 - Scheduling
    f4Subtitle: 'Calendar & Recurring Sessions',
    f4Title: 'Smart Scheduling',
    f4Desc: 'Monthly calendar and list views of all training sessions. Create sessions with sport, venue, coach, age group and skill level. The recurring schedule builder generates a whole month of sessions in one click — "Every Mon & Wed at 6pm" creates them all automatically. Coach availability windows prevent double-booking.',
    f4p1: 'Monthly calendar and list views of all training sessions',
    f4p2: 'Recurring schedule builder — generate a full month in one click',
    f4p3: 'Coach availability windows prevent double-booking',
    f4p4: 'Cancelled sessions are automatically excluded from financial calculations',
    f4p5: 'Read-only .ics calendar feed — members subscribe once and stay in sync',
    // Feature 5 - Attendance
    f5Subtitle: 'Lightning-Fast Tracking',
    f5Title: 'Attendance & Check-in',
    f5Desc: 'Pick a session, toggle each member present/absent — changes save in real time. QR code check-in lets members scan at the door with no queues. Walk-in guests can pay per session, and their payments count toward session revenue automatically. Batch actions let you select many members and mark them present at once.',
    f5p1: 'QR code check-in — every member gets a personal code, scan or type at the door',
    f5p2: 'Batch actions: select many members and mark present/absent/export at once',
    f5p3: 'Walk-in guests who pay per session — payments count toward revenue automatically',
    f5p4: 'Waitlists when a session is full, with promotion tracking',
    f5p5: 'Live revenue / cost / profit readout while taking attendance',
    // Feature 6 - Financial Engine
    f6Subtitle: 'Automatic Profit Intelligence',
    f6Title: 'Financial Engine',
    f6Desc: "This is the killer feature. Enter two numbers — coach salary and court rental — and everything else computes itself. The moment you mark a session's attendance, the platform calculates that session's revenue, cost and net profit — instantly and automatically. No end-of-month surprises. No mental math. Just clear numbers.",
    f6p1: 'Cost per session auto-calculated from coach salary and court rental',
    f6p2: "Session revenue = sum of attending members' per-session values + guest payments",
    f6p3: 'Profit/loss shows green/red everywhere — the second attendance is marked',
    f6p4: 'Additional expense tracking by category for true bottom-line numbers',
    f6p5: 'Calculations run via database triggers — always current, always accurate',
    // Feature 7 - Reports
    f7Subtitle: 'Data-Driven Decisions',
    f7Title: 'Reports & Analytics',
    f7Desc: 'Two dedicated insight surfaces for making smart decisions. Revenue vs costs charts, retention analysis, coach performance comparison, revenue forecasts projecting the next 3 months, member health radar showing who is about to quit before they do. Export everything to PDF or CSV.',
    f7p1: 'Revenue vs costs chart with monthly summary and average profit per session',
    f7p2: 'Retention & churn analysis — active, inactive 30–60 days, inactive 60+ days',
    f7p3: 'Member health radar: healthy / at-risk / churned segmentation',
    f7p4: 'Revenue forecast projecting the next 3 months from historical trends',
    f7p5: 'Coach performance comparison and session-time heatmap',
    f7p6: 'One-click PDF report and CSV payment export',
    // Feature 8 - Teams
    f8Subtitle: 'Organize Your Operations',
    f8Title: 'Teams, Coaches & Venues',
    f8Desc: 'Organize members into teams by sport, age group and skill level. Coach directory with specialties and salaries feeding directly into cost calculations. Venue catalog with capacity info for every court/hall. Custom sport catalog — volleyball today, basketball tomorrow.',
    f8p1: 'Teams organized by sport, age group and skill level',
    f8p2: 'Coach directory with specialties and salaries for cost calculations',
    f8p3: 'Venue catalog with capacity info for every court and hall',
    f8p4: 'Custom sport catalog per academy — expand as you grow',
    // Feature 9 - Tournaments
    f9Subtitle: 'Competitive Management',
    f9Title: 'Tournaments',
    f9Desc: 'Create tournaments per sport with dates and status tracking. Manage the full match bracket: rounds, teams, scores, dates, venues. Match history stays linked to teams and seasons for long-term performance tracking.',
    f9p1: 'Create tournaments per sport with dates and status tracking',
    f9p2: 'Full match bracket management: rounds, teams, scores, dates, venues',
    f9p3: 'Match history linked to teams and seasons',
    // Feature 10 - Engagement
    f10Subtitle: 'Keep Members Motivated',
    f10Title: 'Member Engagement',
    f10Desc: 'Keep members motivated and parents informed. Announcements board broadcast to all members. Photo galleries attached to sessions. Gamification badges awarded automatically at milestones — First Step, Regular, Dedicated, Champion, Legend. Player evaluations where coaches score technique, tactics, fitness and attitude.',
    f10p1: 'Announcements board broadcast to all members',
    f10p2: 'Photo galleries attached to sessions and announcements',
    f10p3: 'Gamification badges: First Step, Regular (10), Dedicated (25), Champion (50), Legend (100)',
    f10p4: 'Player evaluations — coaches score technique, tactics, fitness and attitude',
    f10p5: 'Session ratings — members rate sessions 1–5 stars with comments',
    f10p6: 'Live activity feed — a timeline of joins, payments, badges, and check-ins',
    // Feature 11 - Public Page
    f11Subtitle: 'Built-In Marketing Funnel',
    f11Title: 'Public Academy Page',
    f11Desc: "Every academy gets an optional public page at /a/your-name. Showcase your academy description and sports. Visitors submit trial request forms that flow straight into your dashboard's trials pipeline — new, contacted, converted, declined. A free marketing funnel built into your management tool.",
    f11p1: 'Public page at /a/your-name showcasing your academy',
    f11p2: 'Trial request forms flow into your dashboard pipeline',
    f11p3: 'Free marketing funnel built into your management tool',
    // Feature 12 - Notifications
    f12Subtitle: 'Professional Communication',
    f12Title: 'Notifications & Integrations',
    f12Desc: "Professional email notifications powered by Resend. Payment confirmation emails, renewal reminders when a member runs low on sessions, welcome emails for new members, new-session notifications. Plus a personal calendar feed per academy so members' phone calendars stay in sync automatically.",
    f12p1: 'Payment confirmation emails with amount and sessions',
    f12p2: 'Renewal reminders — one click from the dashboard with send-history tracking',
    f12p3: 'Welcome emails for new members and new-session notifications',
    f12p4: 'Personal .ics calendar feed per academy for automatic sync',
    // Built for Your Region
    regionTitle: 'Built for Your Region',
    regionSubtitle: 'Arabic-first, RTL-native',
    region1Label: 'Fully bilingual English + Arabic',
    region1Desc: 'Complete right-to-left (RTL) layout',
    region2Label: 'Egyptian Pound (EGP) formatting',
    region2Desc: 'Out of the box, no configuration needed',
    region3Label: 'Fully responsive',
    region3Desc: 'Works on phones at the court, not just office desktops',
    region4Label: 'Dark mode across the entire app',
    region4Desc: 'Modern, eye-friendly interface',
    // Security
    securityTitle: 'Security & Reliability',
    securitySubtitle: 'Enterprise-grade protection',
    security1: "Bank-grade data isolation — no academy can see another's data",
    security2: 'Role-based access enforced at database and route level',
    security3: 'Realtime sync powered by Supabase PostgreSQL',
    security4: 'Hosted on Vercel + Supabase — zero-maintenance infrastructure',
    security5: 'Automatic backups through managed Postgres',
    security6: 'GDPR-ready architecture',
    // CTA
    ctaHeading: 'Ready to Run Your Academy Like a Business?',
    ctaText: 'Start your free trial today. No credit card required. Full access to all features.',
    ctaBack: 'Back',
    // Pricing
    pricingLabel: 'Pricing',
    pricingTitle1: 'Choose the products ',
    pricingTitle2: 'you need',
    pricingSubtitle: 'Subscribe to individual products that fit your business. Start free, cancel anytime. All products include a 14-day free trial.',
    perMonth: '/month',
    subscribe: 'Subscribe',
    // Testimonials
    testimonialsLabel: 'Testimonials',
    testimonialsTitle1: 'Loved by teams ',
    testimonialsTitle2: 'around the world',
    testimonialsSubtitle: 'Join thousands of businesses that trust NineApps to power their operations.',
    // CTA
    ctaTitle: 'Ready to transform your business?',
    ctaSubtitle: 'Start your 14-day free trial today. No credit card required. Full access to all features.',
    ctaPrimary: 'Get Started for Free',
    ctaSecondary: 'Sign In to Dashboard',
    // Footer
    footerDesc: 'Empowering businesses with intelligent CRM and ERP solutions. Transform how you manage relationships and resources.',
    product: 'Product',
    company: 'Company',
    resources: 'Resources',
    legal: 'Legal',
    copyright: 'All rights reserved.',
    builtWith: 'Built with precision & passion',
    footerVolleyra: 'Volleyra',
    footerAnalytics: 'Analytics',
    footerIntegrations: 'Integrations',
    aboutUs: 'About Us',
    careers: 'Careers',
    blog: 'Blog',
    pressKit: 'Press Kit',
    documentation: 'Documentation',
    helpCenter: 'Help Center',
    apiReference: 'API Reference',
    status: 'Status',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    cookiePolicy: 'Cookie Policy',
    gdpr: 'GDPR',
    contactUs: 'Contact Us',
    // Return Policy
    returnPolicy: 'Return Policy',
    returnPolicyTitle: 'Return & Refund Policy',
    returnPolicyIntro: 'At NineApps, we want you to be completely satisfied with our products. Since our services are digital subscriptions, our return policy is designed to be fair and transparent for all customers.',
    returnPolicyLastUpdated: 'Last updated: August 2026',
    rpFreeTrialTitle: '14-Day Free Trial',
    rpFreeTrialP1: 'Every NineApps product comes with a 14-day free trial — no credit card required. You can explore all features and evaluate whether the product meets your needs before committing to a subscription.',
    rpFreeTrialP2: 'If you decide the product is not right for you, simply cancel before the trial ends and you will not be charged anything.',
    rpFreeTrialP3: 'We encourage you to take full advantage of the trial period to test the product thoroughly with your team and workflows.',
    rpSubscriptionTitle: 'Subscription Terms',
    rpSubscriptionP1: 'All NineApps products are billed on a monthly subscription basis. Your subscription begins immediately after your free trial ends (or immediately upon purchase if you skip the trial).',
    rpSubscriptionP2: 'Subscriptions automatically renew each billing cycle unless cancelled before the renewal date. You will receive a reminder email before each renewal.',
    rpSubscriptionP3: 'We reserve the right to change pricing with 30 days\' advance notice. Existing subscribers will be grandfathered at their current rate for the remainder of their active billing period.',
    rpCancellationTitle: 'How to Cancel Your Subscription',
    rpCancellationP1: 'You may cancel your subscription at any time through your account dashboard. Cancellation takes effect at the end of your current billing period — you will retain access to the product until then.',
    rpCancellationP2: 'We do not charge any cancellation fees. You are free to cancel whenever you choose.',
    rpCancellationStepsTitle: 'Steps to cancel:',
    rpCancellationStep1: 'Log in to your NineApps account.',
    rpCancellationStep2: 'Navigate to Dashboard → Account Settings → Subscriptions.',
    rpCancellationStep3: 'Select the product you wish to cancel and confirm your cancellation.',
    rpRefundTitle: 'Refund Policy',
    rpRefundP1: 'We offer a full refund within the first 7 days of any paid subscription. If you are unsatisfied with a product within 7 days of your first charge, contact our support team for a complete refund.',
    rpRefundP2: 'After the first 7 days of a billing period, refunds are provided on a case-by-case basis. We evaluate each request considering the circumstances and usage.',
    rpRefundP3: 'Refunds are processed back to the original payment method within 5–10 business days. You will receive an email confirmation once the refund has been initiated.',
    rpRefundP4: 'If you were charged after a cancellation was made, please contact us immediately and we will process a refund for the incorrect charge.',
    rpExceptionsTitle: 'Exceptions & Non-Refundable Items',
    rpException1: 'Add-on services or premium support packages purchased separately are non-refundable once activated.',
    rpException2: 'Annual subscription plans (if available) have a separate refund policy — please refer to the terms provided at the time of purchase.',
    rpException3: 'Credits or promotional discounts applied to your account are non-refundable and cannot be exchanged for cash value.',
    rpException4: 'Chargebacks filed without first contacting our support team may result in account suspension. We encourage you to reach out to us first so we can resolve any issues.',
    rpDataTitle: 'Data & Account After Cancellation',
    rpDataP1: 'After cancellation, your account data is retained for 30 days. During this period, you can export your data or reactivate your subscription to regain full access.',
    rpDataP2: 'After 30 days, all account data is permanently deleted from our servers. This process is irreversible. We recommend exporting your data before this period ends.',
    rpContactTitle: 'Contact Us',
    rpContactP1: 'If you have any questions about this Return & Refund Policy or need assistance with a refund request, please contact our support team:',
    rpContactEmail: 'support@nineapps.com',
    // Privacy Policy
    privacyTitle: 'Privacy Policy',
    privacyIntro: 'At NineApps, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you use our platform.',
    privacyLastUpdated: 'Last updated: August 2026',
    ppInfoWeCollectTitle: 'Information We Collect',
    ppInfoWeCollectP1: 'We collect information that you provide directly to us when you create an account, subscribe to our services, or interact with our platform.',
    ppInfoWeCollectP2: 'The types of information we may collect include:',
    ppInfoWeCollectList1: 'Account Information: your name, email address, company name, and password when you register.',
    ppInfoWeCollectList2: 'Payment Information: billing details and payment method data processed securely through our third-party payment processors.',
    ppInfoWeCollectList3: 'Usage Data: information about how you interact with our platform, including features used, pages visited, actions taken, and device/browser information.',
    ppInfoWeCollectList4: 'Communications: any messages you send to our support team or through in-app feedback forms.',
    ppHowWeUseTitle: 'How We Use Your Information',
    ppHowWeUseP1: 'We use the information we collect for the following purposes:',
    ppHowWeUseList1: 'To provide, operate, and maintain our services and deliver the features you have subscribed to.',
    ppHowWeUseList2: 'To process transactions, manage your subscription, and send related information such as invoices and renewal reminders.',
    ppHowWeUseList3: 'To personalize your experience and provide AI-powered insights tailored to your business data.',
    ppHowWeUseList4: 'To communicate with you about product updates, security alerts, and support messages.',
    ppHowWeUseList5: 'To detect, prevent, and address technical issues and protect against fraudulent or unauthorized activity.',
    ppSharingTitle: 'Data Sharing & Disclosure',
    ppSharingP1: 'We do not sell your personal information. We may share your data only in the following circumstances:',
    ppSharingList1: 'Service Providers: we share data with trusted third-party vendors who assist in operating our platform (hosting, payment processing, analytics), bound by strict confidentiality obligations.',
    ppSharingList2: 'Legal Requirements: we may disclose your information if required by law, regulation, or valid legal process, or to protect the rights, property, or safety of NineApps, our users, or the public.',
    ppSharingList3: 'Business Transfers: in the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction, with notice provided to you.',
    ppSecurityTitle: 'Data Security',
    ppSecurityP1: 'We implement industry-standard security measures to protect your data, including AES-256 encryption at rest, TLS 1.3 encryption in transit, role-based access controls, and regular security audits.',
    ppSecurityP2: 'While no method of transmission or storage is 100% secure, we continuously monitor and update our security practices to maintain the highest level of protection for your data.',
    ppRetentionTitle: 'Data Retention',
    ppRetentionP1: 'We retain your personal information for as long as your account is active or as needed to provide you with our services. If you cancel your subscription, we retain your data for 30 days to allow for reactivation or data export.',
    ppRetentionP2: 'After 30 days of account inactivity, all personal data is permanently deleted from our systems. Certain anonymized or aggregated data may be retained indefinitely for analytical purposes.',
    ppYourRightsTitle: 'Your Rights',
    ppYourRightsP1: 'Depending on your location, you may have the following rights regarding your personal data:',
    ppYourRightsList1: 'Access: request a copy of the personal data we hold about you.',
    ppYourRightsList2: 'Rectification: request correction of inaccurate or incomplete data.',
    ppYourRightsList3: 'Deletion: request deletion of your personal data, subject to legal obligations.',
    ppYourRightsList4: 'Portability: request transfer of your data to another service in a structured, machine-readable format.',
    ppCookiesTitle: 'Cookies & Tracking',
    ppCookiesP1: 'We use cookies and similar technologies to maintain your session, remember your preferences, and analyze platform usage to improve our services.',
    ppCookiesP2: 'You can control cookie settings through your browser. Disabling certain cookies may affect the functionality of our platform.',
    ppChildrenTitle: "Children's Privacy",
    ppChildrenP1: 'Our services are intended for business use and are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected data from a child, we will take steps to delete it promptly.',
    ppChangesTitle: 'Changes to This Policy',
    ppChangesP1: 'We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated policy on this page and, where appropriate, by email. We encourage you to review this page periodically.',
    ppContactTitle: 'Contact Us',
    ppContactP1: 'If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:',
    // Sign In
    welcomeBack: 'Welcome back',
    signInSubtitle: 'Sign in to access your dashboard and apps',
    continueWithGitHub: 'Continue with GitHub',
    continueWithGoogle: 'Continue with Google',
    orContinueWithEmail: 'or continue with email',
    emailPlaceholder: 'Email address',
    passwordPlaceholder: 'Password',
    forgotPassword: 'Forgot password?',
    signInButton: 'Sign In',
    noAccount: "Don't have an account?",
    signUpFree: 'Sign up for free',
    // Sign Up
    createAccount: 'Create your account',
    signUpSubtitle: 'Start your 14-day free trial. No credit card required.',
    fullNamePlaceholder: 'Full name',
    signUpButton: 'Create Account',
    hasAccount: 'Already have an account?',
    signInLink: 'Sign in',
  },
  ar: {
    // Navbar
    features: 'المميزات',
    products: 'المنتجات',
    pricing: 'الأسعار',
    testimonials: 'آراء العملاء',
    signIn: 'تسجيل الدخول',
    getStarted: 'ابدأ الآن',
    // Hero
    badge: 'برمجيات أعمال متطورة من الجيل الجديد',
    headline1: 'أدِر أعمالك',
    headline2: 'بذكاء وفعالية',
    heroSubtitle: 'حلول إدارة علاقات العملاء وإدارة الموارد مصممة خصيصاً لتبسيط سير عملك وزيادة إنتاجيتك ودفع نمو أعمالك. مناسبة للفرق الحديثة.',
    startFreeTrial: 'جرّب مجاناً',
    watchDemo: 'شاهد العرض التوضيحي',
    activeUsers: 'مستخدم نشط',
    uptime: 'وقت التشغيل',
    integrations: 'تكاملات',
    userRating: 'تقييم المستخدمين',
    // Features
    featuresLabel: 'المميزات',
    featuresTitle1: 'كل ما تحتاجه ل',
    featuresTitle2: 'تنمية أعمالك',
    featuresSubtitle: 'مجموعة شاملة من الأدوات تغطي جميع جوانب عملك، من المبيعات حتى إدارة سلسلة التوريد بالكامل.',
    feature1Title: 'تحليلات مدعومة بالذكاء الاصطناعي',
    feature1Desc: 'استفد من تقنيات التعلم الآلي لاكتشاف الأنماط الخفية في بيانات عملك واتخاذ قرارات أكثر ذكاءً ودقة.',
    feature2Title: 'نظرة شاملة على عملائك',
    feature2Desc: 'احصل على صورة متكاملة لجميع تفاعلاتك مع عملائك من خلال جميع قنوات التواصل في لوحة تحكم واحدة.',
    feature3Title: 'أتمتة سير العمل',
    feature3Desc: 'آلي المهام المتكررة وصمّم مسارات عمل مخصصة تتكيف مع احتياجات عملك وتوفر وقتك وجهدك.',
    feature4Title: 'تحليلات فورية',
    feature4Desc: 'تابع مؤشرات الأداء الرئيسية وتتبّع مقاييس النجاح وأنشئ تقارير مفيدة مع رسوم بيانية جذابة.',
    feature5Title: 'أمان على مستوى المؤسسات',
    feature5Desc: 'تشفير بمعايير البنوك العالمية مع تحكم في الوصول مستنداً إلى الأدوار والامتثال لمعايير GDPR و SOC 2 و HIPAA.',
    feature6Title: 'سرعة فائقة',
    feature6Desc: 'أداء محسّن يضمن تحميل الصفحات في أقل من ثانية ومزامنة فورية للبيانات عبر جميع أجهزتك.',
    feature7Title: 'انتشار عالمي',
    feature7Desc: 'نشر عبر مناطق جغرافية متعددة مع ترحيل تلقائي وضمان وقت تشغيل 99.99%.',
    feature8Title: 'إشعارات ذكية',
    feature8Desc: 'تنبيهات وتذكيرات مراعية لسياق عملك تبقي فريقك متناغماً دون إرهاقهم بالتفاصيل غير الضرورية.',
    feature9Title: 'بنية معيارية مرنة',
    feature9Desc: 'اختر فقط ما تحتاجه من الوحدات وتوسّع تدريجياً من شركة ناشئة إلى مؤسسة كبيرة دون تغيير المنصة.',
    // Products
    productsLabel: 'المنتجات',
    productsTitle1: 'صُمّمت لأكاديميات ',
    productsTitle2: 'الرياضة',
    productsSubtitle: 'أدوات إدارة قوية مصممة لمساعدة أكاديميات الرياضة على العمل بسلاسة وتتبّع الأداء وتنمية برامجها.',
    volleyraName: 'فوليرا',
    volleyraTagline: 'إدارة أكاديميات الرياضة',
    volleyraDesc: 'منصة شاملة لإدارة أكاديميات الرياضة — من تسجيل اللاعبين وجداول التدريب لحد تتبع المباريات والتحليلات. فوليرا بتوفر كل اللي المدربين والمديرين محتاجينه عشان يسيروا أكاديمية باحترافية.',
    volleyraStartTrial: 'جرّب مجاناً',
    volleyraMoreInfo: 'اعرف أكتر',
    volleyraHeroSub: 'بتبدل الإكسل وواتساب والدفاتر بمنصة واحدة بتغطي التسجيل والفواتير والحضور والربح — عشان تركز في التدريب مش في الأوراق.',
    volleyraFeaturesSubtitle: 'فوليرا بيشتغل على كل دورة حياة الأكاديمية — من لحظة ما العضو يسجل لحد ما تعرف بالظبط أنهي جلسات بتحقق أرباح.',
    volleyraFeaturesTitle: 'مميزات فوليرا',
    // Workflow
    workflowEnroll: 'التسجيل',
    workflowSchedule: 'الجدولة',
    workflowAttend: 'الحضور',
    workflowBill: 'الفوترة',
    workflowProfit: 'الربح',
    workflowSubtitle: 'من التسجيل للربح — الدورة الكاملة',
    // Stats
    statModules: 'وحدة مميزات',
    statSync: 'مزامنة فورية',
    statLanguages: 'لغتين (عربي + إنجليزي)',
    statSetup: 'رسوم الإعداد',
    // Features heading
    featuresHeading1: 'كل اللي تحتاجه عشان',
    featuresHeading2: 'تسير أكاديمتك',
    // Feature 1 - Dashboard
    f1Subtitle: 'كل حاجة في مكان واحد',
    f1Title: 'لوحة التحكم',
    f1Desc: 'شاشة بتعرفك حال أكاديمتك من أول نظرة — عدد الأعضاء، الدخل الشهري، التكاليف، وصافي الربح، كلها محدّثة لحظة بلحظة. تنبيهات ذكية بتقولك مين عضويته ما ICCمتش، ومين لسه مستني موافقة، ومين الجلسات بتاعته خلصت.',
    f1p1: 'عدد الأعضاء، الدخل، التكاليف، وصافي الربح — دايماً محدّث',
    f1p2: 'تنبيهات ذكية للجلسات اللي خلصت والأعضاء المتأخرين والموافقات المعلقة',
    f1p3: 'الجلسات الجاية مع مؤشر ربح/خسارة لكل جلسة',
    f1p4: 'كل عضو يشوف جلساته المتبقية ومعدل حضوره وحالة دفعه',
    // Feature 2 - Members
    f2Subtitle: 'كل الأعضاء في مكان واحد',
    f2Title: 'الأعضاء والاشتراكات',
    f2Desc: 'قائمة أعضائك كاملة — بحث وتصفية وفرز وتصفح. حدد خطط الع_MEMBERSHIP زي ما تحب — كاملة (8 جلسات) أو نصف (4) أو أي عدد. المنصة بتعدّ الجلسات المتبقية لحد ما الحضور يتسجّل، فتعرف دايماً مين نشط ومين محتاج يجدّد ومين وقّف.',
    f2p1: 'خطط ع flexible — حدد عدد الجلسات زي ما يناسب أكاديمتك',
    f2p2: 'عدّ تلقائي للجلسات المتبقية مع كل تسجيل حضور',
    f2p3: 'حالات واضحة: مدفوع · محتاجتجديد · متأخر',
    f2p4: 'قائمة انتظار للتسجيلات الجديدة — الأعضاء بيسجلوا بكود وأنت بتوافق',
    f2p5: 'ملف كل عضو فيه كل حاجة: سجل الدفع والحضور والشارات والتقييمات',
    f2p6: 'تقرير PDF لأي عضو — للطباعة أو إرساله بالبريد',
    // Feature 3 - Payments
    f3Subtitle: 'دفع من غير وجع دماغ',
    f3Title: 'المدفوعات والإيصالات',
    f3Desc: 'سجّل أي دفعة بالمبلغ والخطة والطريقة. بيدعم كاش وكريديت كارد ومحفظة إلكترونية وتحويل بنكي. كل دفعة بتبعتلك إيصال تقدر تطبعه أو تحمله. حالة العضوية بتتحدث تلقائي. وتصدّر كل سجل المدفوعات CSV لمحاسبك.',
    f3p1: 'طرق دفع كتير: كاش، كريديت، محفظة إلكترونية، تحويل بنكي، غير كده',
    f3p2: 'إيصال تطبعه أو تحمله لكل دفعة',
    f3p3: ' حالة العضوية بتتحدث لوحدها لما الدفعة تتسجّل',
    f3p4: 'تصدير سجل المدفوعات CSV للحسابات',
    // Feature 4 - Scheduling
    f4Subtitle: 'جدولة من غير تعقيد',
    f4Title: 'الجدولة الذكية',
    f4Desc: 'تقويم شهري وقائمة كل جلسات التدريب. أنشئ جلسة بالرياضة والمكان والمدرب ومجموعة العمر والمستوى. أداة الجدولة المتكررة بتنشئلك شهر كامل من الجلسات بنقرة واحدة — مثلاً "كل اتنين وأربعاء الساعة 6" وخلاص. توقيتات المدربين بتمنع أي حجز مزدوج.',
    f4p1: 'تقويم شهري وقائمة كل جلسات التدريب',
    f4p2: 'جدولة متكررة — شهر كامل بنقرة واحدة',
    f4p3: 'توقيتات المدربين بتمنع الحجز المزدوج',
    f4p4: 'الجلسات الملغاة بتتخصم تلقائياً من الحسابات المالية',
    f4p5: 'تغذية تقويم .ics — الأعضاء بيشتركوا مرة واحدة والتقويم بيفضل محدّث',
    // Feature 5 - Attendance
    f5Subtitle: 'تسجيل حضور في ثانية',
    f5Title: 'الحضور وتسجيل الدخول',
    f5Desc: 'اختار جلسة، وبدّل كل عضو حاضر/غائب — كل حاجة بتتوفّر实时. تسجيل دخول بالكود المربّع (QR) — كل عضو ليه كوده، امسحه عند الباب من غير ما حد يستني. فيه كمان ضيوف بيدفعوا لكل جلسة والمبلغ بيتحسب في إيرادات الجلسة تلقائي.',
    f5p1: 'كود QR شخصي لكل عضو — امسح أو اكتب عند الباب من غير زحمة',
    f5p2: 'إجراءات جماعية — حدد أعضاء كتير وعلّمهم حاضرين أو غائبين في مرة واحدة',
    f5p3: 'ضيوف بيدفعوا لكل جلسة — المبلغ بيتحسب في الإيرادات تلقائي',
    f5p4: 'قائمة انتظار لما الجلسة المكتملة مع تتبع الترقية',
    f5p5: 'إيرادات/تكاليف/ربح لحظي وأنت لسه بتاخد الحضور',
    // Feature 6 - Financial Engine
    f6Subtitle: 'الربح بيتحسب لوحده',
    f6Title: 'المحرك المالي',
    f6Desc: 'دي أقوى ميزة. حط رقمين بس — راتب المدرب و yOffset الملعب — وهتشوف كل حاجة بت伺فسها تلقائي. أول ما تسلّم حضور الجلسة، المنصة بتحسبلك الإيرادات والتكلفة وصافي الربح في الثانية. لا مفاجآت آخر شهر، لا حسابات في دماغك. أرقام واضحة.',
    f6p1: 'تكلفة الجلسة بت伺ف تلقائي من راتب المدرب و yOffset الملعب',
    f6p2: 'إيرادات الجلسة = مجموع جلسات الأعضاء الحاضرين + مدفوعات الضيوف',
    f6p3: 'الربح/الخسارة بيظهر أخضر/أحمر في كل مكان — أول ما الحضور يتسجّل',
    f6p4: 'تتبع مصاريف إضافية بالفئة — عشان تشوف الربح الحقيقي',
    f6p5: 'الحسابات شغّالة في قاعدة البيانات — دايماً محدّثة ودقيقة',
    // Feature 7 - Reports
    f7Subtitle: 'قرارات بالبيانات مش بالحدس',
    f7Title: 'التقارير والتحليلات',
    f7Desc: 'تحللين مخصصة عشان تاخد قرارات صح. رسوم بيانية للدخل مقابل المصاريف، تحليل الاحتفاظ بالأعضاء، أداء المدربين، توقعات الدخل للشه الجايين، ورادار صحة الأعضاء اللي بيقولك مين هيسيبك قبل ما يمشي. صدّر كل حاجة PDF أو CSV.',
    f7p1: 'رسم بياني للدخل مقابل المصاريف مع ملخص شهري ومتوسط الربح للجلسة',
    f7p2: 'تحليل الاحتفاظ — نشط، متوقف 30-60 يوم، متوقف أكتر من 60 يوم',
    f7p3: 'رادار صحة الأعضاء: سليم / تحت الخطر / مشترك',
    f7p4: 'توقع الدخل للشه الجايين بناءً على الاتجاهات القديمة',
    f7p5: 'مقارنة أداء المدربين وخريطة حرارية لأوقات الجلسات',
    f7p6: 'تقرير PDF بنقرة واحدة وتصدير CSV للمدفوعات',
    // Feature 8 - Teams
    f8Subtitle: 'نظّم فريقك',
    f8Title: 'الفرق والمدربين والأماكن',
    f8Desc: 'رتّب أعضاءك في فرق حسب الرياضة ومجموعة العمر والمستوى. دليل المدربين فيه تخصصاتهم ورواتبهم وبتدخل تلقائي في حسابات التكلفة. كتالوج الأماكن فيه سعة كل ملعب/صالة. وكتالوج رياضات — كرة طائرة النهارده وكرة سلة بكرة.',
    f8p1: 'فرق منظمة حسب الرياضة ومجموعة العمر والمستوى',
    f8p2: 'دليل المدربين بالتخصصات والرواتب لحساب التكلفة',
    f8p3: 'كتالوج الأماكن بمعلومات سعة كل ملعب وصالة',
    f8p4: 'كتالوج رياضات لكل أكاديمية — كمّل مع نموك',
    // Feature 9 - Tournaments
    f9Subtitle: 'إدارة المسابقات',
    f9Title: 'البطولات',
    f9Desc: 'أنشئ بطولة لكل رياضة بالتاريخ وتابع حالتها. أدر جدول المباريات كله — الجولات والفرق والنتايج والتواريخ والأماكن. سجل المباريات بيفضل مرتبط بالفرق والمواسم.',
    f9p1: 'أنشئ بطولة لكل رياضة بالتاريخ وتابع حالتها',
    f9p2: 'إدارة جدول المباريات كامل: الجولات والفرق والنتايج والتواريخ والأماكن',
    f9p3: 'سجل المباريات مرتبط بالفرق والمواسم',
    // Feature 10 - Engagement
    f10Subtitle: 'خلي أعضاءك متحمسين',
    f10Title: 'تفاعل الأعضاء',
    f10Desc: 'خلي الأعضاء متحمسين والأهل عارفين اللي بيحصل. لوحة إعلانات بتتوصل لكل الأعضاء. معرض صور مرتبط بالجلسات. شارات بتتحصل تلقائي مع كل إنجاز — الخطوة الأولى، المنتظم، المخلص، البطل، الأسطورة. تقييمات اللاعبين — المدرب بيخلي他们在 التقنية والمناورة واللياقة والسلوك.',
    f10p1: 'لوحة إعلانات بتتوصل لكل الأعضاء',
    f10p2: 'معرض صور مرتبط بالجلسات والإعلانات',
    f10p3: 'شارات إنجاز: الخطوة الأولى (1)، المنتظم (10)، المخلص (25)، البطل (50)، الأسطورة (100)',
    f10p4: 'تقييمات اللاعبين — المدرب بيخلي他们在 التقنية والمناورة واللياقة والسلوك',
    f10p5: 'تقييمات الجلسات — الأعضاء بيقيّموا الجلسات بنجوم 1-5 مع تعليقات',
    f10p6: 'تغذية نشاط حية — كل حاجة بتحصل: انضمامات، دفع، شارات، تسجيلات دخول',
    // Feature 11 - Public Page
    f11Subtitle: 'صفحة تسويق جاهزة',
    f11Title: 'صفحة الأكاديمية العامة',
    f11Desc: 'كل أكاديمية ليها صفحة عامة اختيارية باسماها. تعرض وصف الأكاديمية والرياضات. الزوار بيبعتوا طلب تجربة وبيدخلوا مباشرة في pipeline في لوحة التحكم — جديد، تم التواصل، اتحول، اترفض. قناة تسويق مجانية جاهزة.',
    f11p1: 'صفحة عامة باسم أكاديمتك تعرض كل حاجة',
    f11p2: 'نماذج طلب التجربة بتدخل مباشرة في pipeline',
    f11p3: 'قناة تسويق مجانية مدمجة في المنصة',
    // Feature 12 - Notifications
    f12Subtitle: 'تواصل احترافي',
    f12Title: 'الإشعارات والتكاملات',
    f12Desc: 'إشعارات بريد إلكتروني احترافية. تأكيد الدفع، تذكيرات التجديد لما العضو يخلص جلسات، رسائل ترحيب للأعضاء الجدد، وإشعارات الجلسات الجديدة. وفيه تغذية تقويم شخصية لكل أكاديمية — تقويم الموبايل بيفضل محدّث تلقائي.',
    f12p1: 'رسائل تأكيد الدفع بالمبلغ والجلسات',
    f12p2: 'تذكيرات التجديد — بنقرة واحدة من لوحة التحكم',
    f12p3: 'رسائل ترحيب للأعضاء الجدد وإشعارات الجلسات الجديدة',
    f12p4: 'تغذية تقويم .ics شخصية لكل أكاديمية — مزامنة تلقائية',
    // Built for Your Region
    regionTitle: 'مصمم ليك',
    regionSubtitle: 'عربي من الأول مش مترجم',
    region1Label: 'عربي وإنجليزي — الاتنين',
    region1Desc: 'واجهة كاملة من اليمين للشمال',
    region2Label: 'جنيه مصري — جاهز',
    region2Desc: 'من غير ما تظبط حاجة',
    region3Label: 'يشتغل على كل حاجة',
    region3Desc: 'موبايل في الملعب زي اللاب توب في المكتب',
    region4Label: 'وضع داكن في كل مكان',
    region4Desc: 'واجهة حديثة ومريحة للعين',
    // Security
    securityTitle: 'الأمان والموثوقية',
    securitySubtitle: 'حماية على مستوى الشركات الكبيرة',
    security1: 'بيانات كل أكاديمية معزولة — لا أكاديمية تقدر تشوف بيانات التانية',
    security2: 'تحكم في الوصول حسب الدور — في قاعدة البيانات والـ routes',
    security3: 'مزامنة فورية بتقنية Supabase و PostgreSQL',
    security4: 'مضمون على Vercel + Supabase — من غير ما تتعب في الصيانة',
    security5: 'نسخ احتياطي تلقائي',
    security6: 'بنية تحتية جاهزة لمعايير GDPR',
    // CTA
    ctaHeading: 'جاهز تسير أكاديمتك كبيزنس؟',
    ctaText: 'جرّب مجاناً النهارده. من غير كريديت كارد. وصول كامل لكل المميزات.',
    ctaBack: 'رجوع',
    // Pricing
    pricingLabel: 'الأسعار',
    pricingTitle1: 'اختر المنتجات ',
    pricingTitle2: 'التي تحتاجها فعلاً',
    pricingSubtitle: 'اشترك في المنتجات الفردية التي تناسب حجم عملك. ابدأ مجاناً وألغِ الاشتراك في أي وقت. جميع المنتجات تشمل تجربة مجانية لمدة 14 يوماً.',
    perMonth: '/شهرياً',
    subscribe: 'اشترك الآن',
    // Testimonials
    testimonialsLabel: 'آراء العملاء',
    testimonialsTitle1: 'يحبها فرق ',
    testimonialsTitle2: 'العمل في جميع أنحاء العالم',
    testimonialsSubtitle: 'انضم إلى آلاف الشركات التي تعتمد على NineApps لإدارة عملياتها اليومية بنجاح.',
    // CTA
    ctaTitle: 'جاهز لتحويل أعمالك بالكامل؟',
    ctaSubtitle: 'ابدأ تجربتك المجانية لمدة 14 يوماً اليوم. لا حاجة لبطاقة ائتمان. وصول كامل لجميع المميزات والخدمات.',
    ctaPrimary: 'ابدأ مجاناً الآن',
    ctaSecondary: 'سجّل الدخول إلى لوحة التحكم',
    // Footer
    footerDesc: 'تمكين الشركات من خلال حلول ذكية لإدارة علاقات العملاء ومورد المؤسسات. غيّر طريقة إدارتك للعلاقات والموارد.',
    product: 'المنتج',
    company: 'الشركة',
    resources: 'الموارد',
    legal: 'قانوني',
    copyright: 'جميع الحقوق محفوظة.',
    builtWith: 'صُنع بشغف ودقة عالية',
    footerVolleyra: 'فوليرا',
    footerAnalytics: 'التحليلات',
    footerIntegrations: 'التكاملات',
    aboutUs: 'من نحن',
    careers: 'الوظائف',
    blog: 'المدونة',
    pressKit: 'للصحافة',
    documentation: 'التوثيق',
    helpCenter: 'مركز المساعدة',
    apiReference: 'مرجع API',
    status: 'الحالة',
    privacyPolicy: 'سياسة الخصوصية',
    termsOfService: 'شروط الخدمة',
    cookiePolicy: 'سياسة ملفات تعريف الارتباط',
    gdpr: 'GDPR',
    contactUs: 'تواصل معنا',
    // Return Policy
    returnPolicy: 'سياسة الإرجاع',
    returnPolicyTitle: 'سياسة الإرجاع والاسترداد',
    returnPolicyIntro: 'في NineApps، نريدك أن تكون راضياً تماماً عن منتجاتنا. نظراً لأن خدماتنا عبارة عن اشتراكات رقمية، فإن سياسة الإرجاع لدينا مصممة لتكون عادلة وشفافة لجميع العملاء.',
    returnPolicyLastUpdated: 'آخر تحديث: أغسطس 2026',
    rpFreeTrialTitle: 'تجربة مجانية لمدة 14 يوماً',
    rpFreeTrialP1: 'كل منتج من منتجات NineApps يأتي مع تجربة مجانية لمدة 14 يوماً — لا حاجة لبطاقة ائتمان. يمكنك استكشاف جميع المميزات وتقييم ما إذا كان المنتج يلبي احتياجاتك قبل الالتزام بالاشتراك.',
    rpFreeTrialP2: 'إذا قررت أن المنتج لا يناسبك، ما عليك سوى الإلغاء قبل انتهاء التجربة ولن يتم تحصيل أي رسوم.',
    rpFreeTrialP3: 'نشجعك على الاستفادة الكاملة من فترة التجربة لاختبار المنتج بشكل شامل مع فريقك وسير عملك.',
    rpSubscriptionTitle: 'شروط الاشتراك',
    rpSubscriptionP1: 'جميع منتجات NineApps تُحتسب على أساس اشتراك شهري. يبدأ اشتراكك فوراً بعد انتهاء التجربة المجانية (أو فوراً عند الشراء إذا تخطيت التجربة).',
    rpSubscriptionP2: 'الاشتراكات تتجدد تلقائياً في كل دورة فوترة ما لم يتم الإلغاء قبل تاريخ التجديد. ستتلقى رسالة تذكير بالبريد الإلكتروني قبل كل تجديد.',
    rpSubscriptionP3: 'نحتفظ بالحق في تغيير الأسعار مع إشعار مسبق لمدة 30 يوماً. سيتم الاحتفاظ بالأسعار الحالية للمشتركين الحاليين حتى نهاية فترتهم النشطة.',
    rpCancellationTitle: 'كيفية إلغاء اشتراكك',
    rpCancellationP1: 'يمكنك إلغاء اشتراكك في أي وقت من خلال لوحة تحكم حسابك. يسري الإلغاء في نهاية فترة الفوترة الحالية — ستحتفظ بالوصول إلى المنتج حتى ذلك الوقت.',
    rpCancellationP2: 'لا نفرض أي رسوم إلغاء. يمكنك الإلغاء متى تشاء بحرية.',
    rpCancellationStepsTitle: 'خطوات الإلغاء:',
    rpCancellationStep1: 'سجّل الدخول إلى حساب NineApps الخاص بك.',
    rpCancellationStep2: 'انتقل إلى لوحة التحكم ← إعدادات الحساب ← الاشتراكات.',
    rpCancellationStep3: 'اختر المنتج الذي تريد إلغاؤه وأكد عملية الإلغاء.',
    rpRefundTitle: 'سياسة الاسترداد',
    rpRefundP1: 'نقدم استرداداً كاملاً خلال أول 7 أيام من أي اشتراك مدفوع. إذا لم تكن راضياً عن منتج خلال 7 أيام من أول فاتورة، اتصل بفريق الدعم للحصول على استرداد كامل.',
    rpRefundP2: 'بعد أول 7 أيام من فترة الفوترة، يتم تقديم المبالغ المستردة حالة بحالة. نقيّم كل طلب مع مراعاة الظروف والاستخدام.',
    rpRefundP3: 'تتم معالجة المبالغ المستردة إلى طريقة الدفع الأصلية خلال 5-10 أيام عمل. ستتلقى رسالة تأكيد بالبريد الإلكتروني بمجرد بدء عملية الاسترداد.',
    rpRefundP4: 'إذا تم تحصيل رسوم منك بعد الإلغاء، يرجى الاتصال بنا فوراً وسنقوم بمعالجة استرداد المبلغ الخاطئ.',
    rpExceptionsTitle: 'الاستثناءات والعناصر غير المستردة',
    rpException1: 'الخدمات الإضافية أو حزم الدعم المميزة التي تُشراء بشكل منفصل غير مستردة بمجرد تفعيلها.',
    rpException2: 'خطط الاشتراك السنوية (إن توفرت) لها سياسة استرداد منفصلة — يرجى الرجوع إلى الشروط المقدمة عند الشراء.',
    rpException3: 'الائتمانات أو الخصومات الترويجية المطبقة على حسابك غير مستردة ولا يمكن استبدالها بقيمة نقدية.',
    rpException4: 'قد يؤدي تقديم احتجاجات بدون الاتصال أولاً بفريق الدعم إلى تعليق الحساب. نشجعك على التواصل معنا أولاً حتى نتمكن من حل أي مشاكل.',
    rpDataTitle: 'البيانات والحساب بعد الإلغاء',
    rpDataP1: 'بعد الإلغاء، يتم الاحتفاظ ببيانات حسابك لمدة 30 يوماً. خلال هذه الفترة، يمكنك تصدير بياناتك أو إعادة تفعيل اشتراكك للحصول على وصول كامل.',
    rpDataP2: 'بعد 30 يوماً، يتم حذف جميع بيانات الحساب نهائياً من خوادمنا. هذا العملية لا رجعة فيها. نوصي بتصدير بياناتك قبل انتهاء هذه الفترة.',
    rpContactTitle: 'تواصل معنا',
    rpContactP1: 'إذا كانت لديك أي أسئلة حول سياسة الإرجاع والاسترداد هذه أو تحتاج المساعدة في طلب استرداد، يرجى الاتصال بفريق الدعم:',
    rpContactEmail: 'support@nineapps.com',
    // Privacy Policy
    privacyTitle: 'سياسة الخصوصية',
    privacyIntro: 'في NineApps، نلتزم بحماية خصوصيتك وضمان أمان معلوماتك الشخصية. توضح سياسة الخصوصية هذه كيف نجمع بياناتك ونستخدمها ونفصح عنها ونحميها عند استخدامك لمنصتنا.',
    privacyLastUpdated: 'آخر تحديث: أغسطس 2026',
    ppInfoWeCollectTitle: 'المعلومات التي نجمعها',
    ppInfoWeCollectP1: 'نجمع المعلومات التي تقدمها لنا مباشرة عند إنشاء حساب أو الاشتراك في خدماتنا أو التفاعل مع منصتنا.',
    ppInfoWeCollectP2: 'تشمل الأنواع التي قد نجمعها:',
    ppInfoWeCollectList1: 'معلومات الحساب: اسمك وعنوان بريدك الإلكتروني واسم شركتك وكلمة المرور عند التسجيل.',
    ppInfoWeCollectList2: 'معلومات الدفع: تفاصيل الفوترة وبيانات طريقة الدفع التي تُعالج بشكل آمن من خلال معالجي الدفع من أطراف ثالثة.',
    ppInfoWeCollectList3: 'بيانات الاستخدام: معلومات حول كيفية تفاعلك مع منصتنا، بما في ذلك الميزات المستخدمة والصفحات التي تزورها والإجراءات المتخذة ومعلومات الجهاز والمتصفح.',
    ppInfoWeCollectList4: 'الرسائل: أي رسائل ترسلها إلى فريق الدعم أو من خلال نماذج الملاحظات داخل التطبيق.',
    ppHowWeUseTitle: 'كيف نستخدم معلوماتك',
    ppHowWeUseP1: 'نستخدم المعلومات التي نجمعها للأغراض التالية:',
    ppHowWeUseList1: 'لتقديم تشغيل وصيانة خدماتنا وتسليم الميزات التي اشتركت فيها.',
    ppHowWeUseList2: 'لمعالجة المعاملات وإدارة اشتراكك وإرسال معلومات ذات صلة مثل الفواتير وتذكيرات التجديد.',
    ppHowWeUseList3: 'لتخصيص تجربتك وتقديم رؤى مدعومة بالذكاء الاصطناعي مصممة خصيصاً لبيانات عملك.',
    ppHowWeUseList4: 'للتواصل معك بشأن تحديثات المنتج وأمان التنبيهات ورسائل الدعم.',
    ppHowWeUseList5: 'لاكتشاف المشاكل التقنية ومنعها ومعالجتها والحماية ضد النشاط الاحتيالي أو غير المصرح به.',
    ppSharingTitle: 'مشاركة البيانات والكشف عنها',
    ppSharingP1: 'لا نبيع معلوماتك الشخصية. قد نشارك بياناتك فقط في الظروف التالية:',
    ppSharingList1: 'مقدمو الخدمات: نشارك البيانات مع موردين موثوقين من أطراف ثالثة يساعدون في تشغيل منصتنا (الاستضافة ومعالجة الدفع والتحليلات) وملزمين بأحكام سرية صارمة.',
    ppSharingList2: 'المتطلبات القانونية: قد نكشف عن معلوماتك إذا تطلب الأمر بموجب قانون أو تنظيم أو عملية قانونية صالحة، أو لحماية حقوق أو ممتلكات أو سلامة NineApps أو مستخدمينا أو الجمهور.',
    ppSharingList3: 'التحويلات التجارية: في حالة اندماج أو استحواذ أو بيع أصول، قد تُنقل معلوماتك كجزء من تلك المعاملة مع إخطارك.',
    ppSecurityTitle: 'أمان البيانات',
    ppSecurityP1: 'ن implementing تدابير أمان متوافقة مع معايير الصناعة لحماية بياناتك، بما في ذلك التشفير AES-256 عند السكون وTLS 1.3 أثناء النقل والتحكم في الوصول المستند إلى الأدوار والتدقيق الأمني الدوري.',
    ppSecurityP2: 'على الرغم من أن أي طريقة نقل أو تخزين ليست آمنة بنسبة 100٪، إلا أننا نراقب ونحدّث ممارسات الأمان لدينا باستمرار للحفاظ على أعلى مستوى من الحماية لبياناتك.',
    ppRetentionTitle: 'احتفاظ البيانات',
    ppRetentionP1: 'نحتفظ بمعلوماتك الشخصية طالما حسابك نشط أو كما هو ضروري لتقديم خدماتنا. إذا ألغيت اشتراكك، نحتفظ ببياناتك لمدة 30 يوماً للسماح بإعادة التفعيل أو تصدير البيانات.',
    ppRetentionP2: 'بعد 30 يوماً من عدم نشاط الحساب، يتم حذف جميع البيانات الشخصية نهائياً من أنظمتنا. قد تُحتفظ ببعض البيانات المجهولة الهوية أو المجمّعة بشكل غير محدود لأغراض تحليلية.',
    ppYourRightsTitle: 'حقوقك',
    ppYourRightsP1: 'depending على موقعك، قد تكون لديك الحقوق التالية فيما يتعلق ببياناتك الشخصية:',
    ppYourRightsList1: 'الوصول: طلب نسخة من البيانات الشخصية التي نحتفظ بها عنك.',
    ppYourRightsList2: 'التصحيح: طلب تصحيح بيانات غير دقيقة أو غير مكتملة.',
    ppYourRightsList3: 'الحذف: طلب حذف بياناتك الشخصية، مع مراعاة الالتزامات القانونية.',
    ppYourRightsList4: 'النقل: طلب نقل بياناتك إلى خدمة أخرى بتنسيق منظم وقابل للقراءة آلياً.',
    ppCookiesTitle: 'ملفات تعريف الارتباط والتتبع',
    ppCookiesP1: 'نستخدم ملفات تعريف الارتباط والتقنيات المماثلة للحفاظ على جلستك وتذكر تفضيلاتك وتحليل استخدام المنصة لتحسين خدماتنا.',
    ppCookiesP2: 'يمكنك التحكم في إعدادات ملفات تعريف الارتباط من خلال متصفحك. تعطيل ملفات تعريف الارتباط قد يؤثر على وظائف منصتنا.',
    ppChildrenTitle: 'خصوصية الأطفال',
    ppChildrenP1: 'خدماتنا مخصصة للاستخدام التجاري غير موجهة للأفراد الذين تقل أعمارهم عن 18 عاماً. لا نجمع عمداً معلومات شخصية من الأطفال. إذا علمنا بأننا جمعنا بيانات من طفل، سنتخذ خطوات لحذفها فوراً.',
    ppChangesTitle: 'تغييرات على هذه السياسة',
    ppChangesP1: 'قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سنخطرك بأي تغييرات جوهرية من خلال نشر السياسة المحدّثة على هذه الصفحة وحيثما كان ذلك مناسبًا عبر البريد الإلكتروني. نشجعك على مراجعة هذه الصفحة بشكل دوري.',
    ppContactTitle: 'تواصل معنا',
    ppContactP1: 'إذا كانت لديك أي أسئلة أو مخاوف حول سياسة الخصوصية هذه أو ممارسات البيانات لدينا، يرجى التواصل معنا:',
    // Sign In
    welcomeBack: 'مرحباً بعودتك',
    signInSubtitle: 'سجّل الدخول للوصول إلى لوحة التحكم والتطبيقات',
    continueWithGitHub: 'المتابعة بحساب GitHub',
    continueWithGoogle: 'المتابعة بحساب Google',
    orContinueWithEmail: 'أو تابع باستخدام البريد الإلكتروني',
    emailPlaceholder: 'البريد الإلكتروني',
    passwordPlaceholder: 'كلمة المرور',
    forgotPassword: 'نسيت كلمة المرور؟',
    signInButton: 'تسجيل الدخول',
    noAccount: 'ليس لديك حساب؟',
    signUpFree: 'سجّل مجاناً',
    // Sign Up
    createAccount: 'أنشئ حسابك الجديد',
    signUpSubtitle: 'ابدأ تجربتك المجانية لمدة 14 يوماً. لا حاجة لبطاقة ائتمان.',
    fullNamePlaceholder: 'الاسم الكامل',
    signUpButton: 'إنشاء الحساب',
    hasAccount: 'لديك حساب بالفعل؟',
    signInLink: 'سجّل الدخول',
  },
}

// Currency
export const currencyConfig = {
  en: {
    symbol: '$',
    products: {
      contactManager: '19',
      emailCampaigns: '29',
      callTracker: '15',
      salesPipeline: '39',
      dealRoom: '35',
      inventoryControl: '25',
      supplyChain: '45',
      financialSuite: '49',
      hrManagement: '29',
      projectBilling: '35',
    },
  },
  ar: {
    symbol: 'ج.م',
    products: {
      contactManager: '599',
      emailCampaigns: '899',
      callTracker: '449',
      salesPipeline: '1,249',
      dealRoom: '1,099',
      inventoryControl: '799',
      supplyChain: '1,399',
      financialSuite: '1,499',
      hrManagement: '899',
      projectBilling: '1,099',
    },
  },
}

type I18nContextType = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: TranslationKeys
  currency: typeof currencyConfig.en
}

const I18nContext = createContext<I18nContextType | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('ar')

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l)
    document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = l
  }, [])

  const value: I18nContextType = {
    locale,
    setLocale,
    t: translations[locale],
    currency: currencyConfig[locale],
  }

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}
