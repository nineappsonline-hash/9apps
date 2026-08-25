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
  crmSuite: string
  crmSubtitle: string
  crmDesc: string
  erpPlatform: string
  erpSubtitle: string
  erpDesc: string
  contactManager: string
  contactManagerDesc: string
  emailCampaigns: string
  emailCampaignsDesc: string
  callTracker: string
  callTrackerDesc: string
  salesPipeline: string
  salesPipelineDesc: string
  dealRoom: string
  dealRoomDesc: string
  inventoryControl: string
  inventoryControlDesc: string
  supplyChain: string
  supplyChainDesc: string
  financialSuite: string
  financialSuiteDesc: string
  hrManagement: string
  hrManagementDesc: string
  projectBilling: string
  projectBillingDesc: string
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
  footerCrmSuite: string
  footerErpPlatform: string
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
    productsTitle1: 'Two powerful suites, ',
    productsTitle2: 'one platform',
    productsSubtitle: 'Whether you need to manage customer relationships or streamline operations, our modular products work together seamlessly.',
    crmSuite: 'CRM Suite',
    crmSubtitle: 'Customer Relationship Management',
    crmDesc: 'Build stronger relationships with your customers. Track every interaction, automate follow-ups, and close deals faster with intelligent sales tools.',
    erpPlatform: 'ERP Platform',
    erpSubtitle: 'Enterprise Resource Planning',
    erpDesc: 'Optimize every resource in your organization. From inventory to finance, get complete visibility and control over your business operations.',
    contactManager: 'Contact Manager',
    contactManagerDesc: 'Centralized customer database with smart tagging and relationship mapping.',
    emailCampaigns: 'Email Campaigns',
    emailCampaignsDesc: 'Design, send, and track email campaigns with AI-powered personalization.',
    callTracker: 'Call Tracker',
    callTrackerDesc: 'Log calls, set follow-ups, and analyze conversation patterns automatically.',
    salesPipeline: 'Sales Pipeline',
    salesPipelineDesc: 'Visual pipeline management with drag-and-drop stages and forecasting.',
    dealRoom: 'Deal Room',
    dealRoomDesc: 'Close deals faster with collaborative proposals and e-signature support.',
    inventoryControl: 'Inventory Control',
    inventoryControlDesc: 'Real-time stock tracking, reorder alerts, and multi-warehouse management.',
    supplyChain: 'Supply Chain',
    supplyChainDesc: 'End-to-end supply chain visibility from procurement to delivery.',
    financialSuite: 'Financial Suite',
    financialSuiteDesc: 'Invoicing, expense tracking, budgeting, and financial reporting in one place.',
    hrManagement: 'HR Management',
    hrManagementDesc: 'Employee records, payroll, leave management, and performance reviews.',
    projectBilling: 'Project Billing',
    projectBillingDesc: 'Time tracking, resource allocation, and automated client billing.',
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
    footerCrmSuite: 'CRM Suite',
    footerErpPlatform: 'ERP Platform',
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
    productsTitle1: 'حزمتان قويتان، ',
    productsTitle2: 'منصة واحدة متكاملة',
    productsSubtitle: 'سواء كنت تبحث عن إدارة علاقات العملاء أو تبسيط العمليات التشغيلية، منتجاتنا المرنة تعمل بسلاسة تامة معاً.',
    crmSuite: 'حزمة إدارة علاقات العملاء',
    crmSubtitle: 'إدارة علاقات العملاء',
    crmDesc: 'ابنِ علاقات أقوى وأعمق مع عملائك. تتبّع كل تفاعل، وأتمتة عمليات المتابعة، وأغلق الصفقات بسرعة مع أدوات مبيعات ذكية.',
    erpPlatform: 'منصة إدارة موارد المؤسسات',
    erpSubtitle: 'تخطيط موارد المؤسسات',
    erpDesc: 'حسّن استخدام كل مورد في مؤسستك. من المخزون إلى الإدارة المالية، احصل على رؤية شاملة وتحكم كامل في جميع عملياتك.',
    contactManager: 'إدارة جهات الاتصال',
    contactManagerDesc: 'قاعدة بيانات مركزية للعملاء مع تصنيف ذكي وربط العلاقات تلقائياً.',
    emailCampaigns: 'حملات البريد الإلكتروني',
    emailCampaignsDesc: 'صمّم وأرسل وتتبّع حملات بريد إلكتروني مخصصة بقوة الذكاء الاصطناعي.',
    callTracker: 'تتبع المكالمات الهاتفية',
    callTrackerDesc: 'سجّل المكالمات وحدّد مواعيد المتابعة وحلّل أنماط المحادثات بشكل آلي.',
    salesPipeline: 'خط أنابيب المبيعات',
    salesPipelineDesc: 'إدارة بصرية سريعة مع مراحل قابلة للسحب والإفلات وتنبؤات دقيقة بالمبيعات.',
    dealRoom: 'غرفة الصفقات',
    dealRoomDesc: 'أتمتة إغلاق الصفقات مع عروض أسعار تعاونية ودعم للتوقيع الإلكتروني.',
    inventoryControl: 'إدارة المخزون',
    inventoryControlDesc: 'تتبع المخزون لحظياً وتنبيهات إعادة الطلب وإدارة مستودعات متعددة بسهولة.',
    supplyChain: 'سلسلة التوريد',
    supplyChainDesc: 'رؤية شاملة لسلسلة التوريد بالكامل من مرحلة الشراء وحتى التسليم النهائي.',
    financialSuite: 'الحزمة المالية المتكاملة',
    financialSuiteDesc: 'الفوترة وتسجيل المصروفات وإعداد الميزانية والتقارير المالية الدقيقة في مكان واحد.',
    hrManagement: 'إدارة الموارد البشرية',
    hrManagementDesc: 'إدارة شؤون الموظفين والرواتب والإجازات ومتابعة الأداء بشكل منظم.',
    projectBilling: 'فوترة المشاريع',
    projectBillingDesc: 'تتبع ساعات العمل وتخصيص الموارد وفوترة العملاء بشكل آلي ودقيق.',
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
    footerCrmSuite: 'حزمة إدارة علاقات العملاء',
    footerErpPlatform: 'منصة إدارة موارد المؤسسات',
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
