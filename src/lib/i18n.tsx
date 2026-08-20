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
    badge: 'برمجيات أعمال من الجيل التالي',
    headline1: 'أدِر شركتك',
    headline2: 'بذكاء',
    heroSubtitle: 'حلول CRM و ERP قوية مصممة لتبسيط سير عملك، وزيادة الإنتاجية، ودفع النمو. مبنية للفرق الحديثة.',
    startFreeTrial: 'ابدأ تجربة مجانية',
    watchDemo: 'شاهد العرض',
    activeUsers: 'مستخدم نشط',
    uptime: 'وقت التشغيل',
    integrations: 'تكاملات',
    userRating: 'تقييم المستخدمين',
    // Features
    featuresLabel: 'المميزات',
    featuresTitle1: 'كل ما تحتاجه ل',
    featuresTitle2: 'تنمية أعمالك',
    featuresSubtitle: 'مجموعة شاملة من الأدوات مصممة لتغطية كل جانب من جوانب عمليات شركتك، من المبيعات إلى سلسلة التوريد.',
    feature1Title: 'رؤى مدعومة بالذكاء الاصطناعي',
    feature1Desc: 'استخدم التعلم الآلي لاكتشاف الأنماط المخفية في بيانات أعمالك واتخاذ قرارات أذكى.',
    feature2Title: 'نظرة شاملة 360° على العملاء',
    feature2Desc: 'احصل على صورة كاملة لكل تفاعل مع العميل عبر جميع نقاط الاتصال في لوحة موحدة.',
    feature3Title: 'أتمتة سير العمل',
    feature3Desc: 'أتمتة المهام المتكررة وتصميم مسارات عمل مخصصة تتكيّف مع عمليات شركتك.',
    feature4Title: 'تحليلات في الوقت الحقيقي',
    feature4Desc: 'راقب مؤشرات الأداء الرئيسية وتتبع مقاييس الأداء وإنشاء تقارير عملية مع تصورات جميلة.',
    feature5Title: 'أمان المؤسسات',
    feature5Desc: 'تشفير بمستوى البنوك والتحكم في الوصول القائم على الأدوار والامتثال لمعايير GDPR و SOC 2 و HIPAA.',
    feature6Title: 'سرعة البرق',
    feature6Desc: 'أداء محسّن بأوقات تحميل أقل من ثانية ومزامنة فورية للبيانات عبر الأجهزة.',
    feature7Title: 'نطاق عالمي',
    feature7Desc: 'نشر عبر مناطق متعددة مع ترحيل تلقائي وضمان وقت تشغيل 99.99%.',
    feature8Title: 'إشعارات ذكية',
    feature8Desc: 'تنبيهات وتذكيرات متسقة بالسياق تبقي فريقك متماشياً دون إرهاقهم.',
    feature9Title: 'بنية معمارية معيارية',
    feature9Desc: 'اختر الوحدات التي تحتاجها. توسع من الناشئة إلى المؤسسة دون تغيير المنصات.',
    // Products
    productsLabel: 'المنتجات',
    productsTitle1: 'حزمتان قويتان، ',
    productsTitle2: 'منصة واحدة',
    productsSubtitle: 'سواء كنت بحاجة لإدارة علاقات العملاء أو تبسيط العمليات، فإن منتجاتنا المعيارية تعمل بسلاسة معاً.',
    crmSuite: 'حزمة CRM',
    crmSubtitle: 'إدارة علاقات العملاء',
    crmDesc: 'ابنِ علاقات أقوى مع عملائك. تتبع كل تفاعل، وأتمتة المتابعة، وأغلق الصفقات أسرع مع أدوات المبيعات الذكية.',
    erpPlatform: 'منصة ERP',
    erpSubtitle: 'تخطيط موارد المؤسسات',
    erpDesc: 'حسّن كل مورد في مؤسستك. من المخزون إلى المالية، احصل على رؤية وتحكم كاملين في عمليات شركتك.',
    contactManager: 'مدير جهات الاتصال',
    contactManagerDesc: 'قاعدة بيانات مركزية للعملاء مع تصنيف ذكي ورسم خرائط العلاقات.',
    emailCampaigns: 'حملات البريد الإلكتروني',
    emailCampaignsDesc: 'صمم وأرسل وتتبع حملات البريد الإلكتروني مع تخصيص مدعوم بالذكاء الاصطناعي.',
    callTracker: 'متتبع المكالمات',
    callTrackerDesc: 'سجّل المكالمات وحدد المتابعات وحلل أنماط المحادثات تلقائياً.',
    salesPipeline: 'خط أنابيب المبيعات',
    salesPipelineDesc: 'إدارة بصرية للخط الأنبوب مع مراحل سحب وإفلات وتنبؤات.',
    dealRoom: 'غرفة الصفقات',
    dealRoomDesc: 'أغلق الصفقات أسرع مع عروض تعاونية ودعم التوقيع الإلكتروني.',
    inventoryControl: 'التحكم بالمخزون',
    inventoryControlDesc: 'تتبع المخزون في الوقت الحقيقي وتنبيهات إعادة الطلب وإدارة مستودعات متعددة.',
    supplyChain: 'سلسلة التوريد',
    supplyChainDesc: 'رؤية شاملة لسلسلة التوريد من المشتريات إلى التسليم.',
    financialSuite: 'الحزمة المالية',
    financialSuiteDesc: 'الفوترة وتتبع المصاريف والميزانية والتقارير المالية في مكان واحد.',
    hrManagement: 'إدارة الموارد البشرية',
    hrManagementDesc: 'سجلات الموظفين والرواتب وإدارة الإجازات ومراجعات الأداء.',
    projectBilling: 'فوترة المشاريع',
    projectBillingDesc: 'تتبع الوقت وتخصيص الموارد وفوترة العملاء الآلية.',
    // Pricing
    pricingLabel: 'الأسعار',
    pricingTitle1: 'اختر المنتجات ',
    pricingTitle2: 'التي تحتاجها',
    pricingSubtitle: 'اشترك في المنتجات الفردية التي تناسب عملك. ابدأ مجاناً، ألغِ في أي وقت. جميع المنتجات تشمل تجربة مجانية لمدة 14 يوماً.',
    perMonth: '/شهرياً',
    subscribe: 'اشترك',
    // Testimonials
    testimonialsLabel: 'آراء العملاء',
    testimonialsTitle1: 'محبوبة من ',
    testimonialsTitle2: 'فرق حول العالم',
    testimonialsSubtitle: 'انضم إلى آلاف الشركات التي تثق في NineApps لتشغيل عملياتها.',
    // CTA
    ctaTitle: 'هل أنت مستعد لتحويل أعمالك؟',
    ctaSubtitle: 'ابدأ تجربتك المجانية لمدة 14 يوماً اليوم. لا حاجة لبطاقة ائتمان. وصول كامل لجميع المميزات.',
    ctaPrimary: 'ابدأ مجاناً',
    ctaSecondary: 'تسجيل الدخول للوحة التحكم',
    // Footer
    footerDesc: 'تمكين الشركات بحلول CRM و ERP ذكية. غيّر طريقة إدارة العلاقات والموارد.',
    product: 'المنتج',
    company: 'الشركة',
    resources: 'الموارد',
    legal: 'قانوني',
    copyright: 'جميع الحقوق محفوظة.',
    builtWith: 'صُنع بدقة وشغف',
    // Sign In
    welcomeBack: 'مرحباً بعودتك',
    signInSubtitle: 'سجّل الدخول للوصول إلى لوحة التحكم والتطبيقات',
    continueWithGitHub: 'المتابعة مع GitHub',
    continueWithGoogle: 'المتابعة مع Google',
    orContinueWithEmail: 'أو المتابعة بالبريد الإلكتروني',
    emailPlaceholder: 'البريد الإلكتروني',
    passwordPlaceholder: 'كلمة المرور',
    forgotPassword: 'نسيت كلمة المرور؟',
    signInButton: 'تسجيل الدخول',
    noAccount: 'ليس لديك حساب؟',
    signUpFree: 'سجّل مجاناً',
    // Sign Up
    createAccount: 'أنشئ حسابك',
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
  const [locale, setLocaleState] = useState<Locale>('en')

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
