'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import AnimatedCounter from '@/components/AnimatedCounter'
import TiltCard from '@/components/TiltCard'
import {
  ArrowUpRight,
  ArrowLeft,
  LayoutDashboard,
  Users,
  CreditCard,
  CalendarCheck,
  QrCode,
  TrendingUp,
  BarChart3,
  Trophy,
  UserCog,
  Megaphone,
  Globe,
  Shield,
  Zap,
  CheckCircle,
  DollarSign,
  Clock,
  Smartphone,
  Star,
} from 'lucide-react'

function AnimatedWorkflow() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const steps = [
    { key: 'التسجيل' },
    { key: 'الجدولة' },
    { key: 'الحضور' },
    { key: 'الفوترة' },
    { key: 'الربح' },
  ]

  return (
    <div ref={ref} className="flex items-center justify-center gap-2 sm:gap-3 my-16 flex-wrap">
      {steps.map((step, i) => (
        <div key={step.key} className="flex items-center gap-2 sm:gap-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="px-4 py-2.5 rounded-xl glass-card text-sm font-semibold text-white border border-white/[0.06] relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10">{step.key}</span>
          </motion.div>
          {i < steps.length - 1 && (
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ duration: 0.3, delay: i * 0.15 + 0.1 }}
              className="text-indigo-500/60 text-lg"
            >
              →
            </motion.div>
          )}
        </div>
      ))}
    </div>
  )
}

function FeatureSection({
  icon: Icon,
  gradient,
  title,
  subtitle,
  description,
  points,
  reversed,
}: {
  icon: React.ElementType
  gradient: string
  title: string
  subtitle: string
  description: string
  points: string[]
  reversed?: boolean
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      <div className="glass-card rounded-3xl p-8 lg:p-10 relative overflow-hidden group hover-lift">
        <div className={`absolute top-0 ${reversed ? 'left-0' : 'right-0'} w-48 h-48 bg-gradient-to-br ${gradient} opacity-[0.07] rounded-full blur-[80px] group-hover:opacity-[0.12] transition-opacity duration-700`} />

        <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-start relative z-10`}>
          <div className="shrink-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2, type: 'spring', stiffness: 200 }}
              className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
            >
              <Icon className="w-7 h-7 text-white" />
            </motion.div>
          </div>

          <div className="flex-1 min-w-0">
            <motion.div
              initial={{ opacity: 0, x: reversed ? -20 : 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <p className="text-xs font-semibold text-indigo-400 tracking-wider uppercase mb-1">{subtitle}</p>
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">{title}</h3>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: reversed ? -20 : 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-gray-400 leading-relaxed mb-5 text-sm"
            >
              {description}
            </motion.p>

            <div className="space-y-2.5">
              {points.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: reversed ? -15 : 15 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.35 + i * 0.05 }}
                  className="flex items-start gap-2.5 group/item"
                >
                  <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0 group-hover/item:scale-110 transition-transform" />
                  <span className="text-sm text-gray-300 leading-relaxed group-hover/item:text-white transition-colors">{point}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function StatCard({ value, suffix, label, icon: Icon }: { value: number; suffix?: string; label: string; icon: React.ElementType }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mx-auto mb-3">
        <Icon className="w-5 h-5 text-indigo-400" />
      </div>
      <div className="text-3xl font-bold text-white mb-1">
        <AnimatedCounter target={value} suffix={suffix || ''} />
      </div>
      <p className="text-xs text-gray-500 font-medium">{label}</p>
    </motion.div>
  )
}

export default function VolleyraPage() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })
  const { scrollYProgress } = useScroll()
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.95])

  const features = [
    {
      icon: LayoutDashboard,
      gradient: 'from-indigo-500 to-purple-500',
      title: 'لوحة التحكم',
      subtitle: 'كل حاجة في مكان واحد',
      description: 'شاشة بتعرفك حال أكاديمتك من أول نظرة — عدد الأعضاء، الدخل الشهري، التكاليف، وصافي الربح، كلها محدّثة لحظة بلحظة. تنبيهات ذكية بتقولك مين عضويته ما اتدفعت، ومين لسه مستني موافقة، ومين الجلسات بتاعته خلصت.',
      points: ['عدد الأعضاء، الدخل، التكاليف، وصافي الربح — دايماً محدّث', 'تنبيهات ذكية للجلسات اللي خلصت والأعضاء المتأخرين والموافقات المعلقة', 'الجلسات الجاية مع مؤشر ربح/خسارة لكل جلسة', 'كل عضو يشوف جلساته المتبقية ومعدل حضوره وحالة دفعه'],
    },
    {
      icon: Users,
      gradient: 'from-cyan-500 to-blue-500',
      title: 'الأعضاء والاشتراكات',
      subtitle: 'كل الأعضاء في مكان واحد',
      description: 'قائمة أعضائك كاملة — بحث وتصفية وفرز وتصفح. حدد خطط العضوية زي ما تحب — كاملة (8 جلسات) أو نصف (4) أو أي عدد. المنصة بتعدّ الجلسات المتبقية لحد ما الحضور يتسجّل، فتعرف دايماً مين نشط ومين محتاج يجدّد ومين وقّف.',
      points: ['خطط عضوية مرونة — حدد عدد الجلسات زي ما يناسب أكاديمتك', 'عدّ تلقائي للجلسات المتبقية مع كل تسجيل حضور', 'حالات واضحة: مدفوع · محتاج تجديد · متأخر', 'قائمة انتظار للتسجيلات الجديدة — الأعضاء بيسجلوا بكود وأنت بتوافق', 'ملف كل عضو فيه كل حاجة: سجل الدفع والحضور والشارات والتقييمات', 'تقرير PDF لأي عضو — للطباعة أو إرساله بالبريد'],
    },
    {
      icon: CreditCard,
      gradient: 'from-violet-500 to-pink-500',
      title: 'المدفوعات والإيصالات',
      subtitle: 'دفع من غير وجع دماغ',
      description: 'سجّل أي دفعة بالمبلغ والخطة والطريقة. بيدعم كاش وكريديت كارد ومحفظة إلكترونية وتحويل بنكي. كل دفعة بتبعتلك إيصال تقدر تطبعه أو تحمله. حالة العضوية بتتحدث تلقائي. وتصدّر كل سجل المدفوعات CSV لمحاسبك.',
      points: ['طرق دفع كتير: كاش، كريديت، محفظة إلكترونية، تحويل بنكي، غير كده', 'إيصال تطبعه أو تحمله لكل دفعة', 'حالة العضوية بتتحدث لوحدها لما الدفعة تتسجّل', 'تصدير سجل المدفوعات CSV للحسابات'],
    },
    {
      icon: CalendarCheck,
      gradient: 'from-emerald-500 to-teal-500',
      title: 'الجدولة الذكية',
      subtitle: 'جدولة من غير تعقيد',
      description: 'تقويم شهري وقائمة كل جلسات التدريب. أنشئ جلسة بالرياضة والمكان والمدرب ومجموعة العمر والمستوى. أداة الجدولة المتكررة بتنشئلك شهر كامل من الجلسات بنقرة واحدة — مثلاً "كل اتنين وأربعاء الساعة 6" وخلاص. توقيتات المدربين بتمنع أي حجز مزدوج.',
      points: ['تقويم شهري وقائمة كل جلسات التدريب', 'جدولة متكررة — شهر كامل بنقرة واحدة', 'توقيتات المدربين بتمنع الحجز المزدوج', 'الجلسات الملغاة بتتخصم تلقائياً من الحسابات المالية', 'تغذية تقويم .ics — الأعضاء بيشتركوا مرة واحدة والتقويم بيفضل محدّث'],
    },
    {
      icon: QrCode,
      gradient: 'from-orange-500 to-red-500',
      title: 'الحضور وتسجيل الدخول',
      subtitle: 'تسجيل حضور في ثانية',
      description: 'اختار جلسة، وبدّل كل عضو حاضر/غائب — كل حاجة بتتوفّر لحظياً. تسجيل دخول بالكود المربّع (QR) — كل عضو ليه كوده، امسحه عند الباب من غير ما حد يستني. فيه كمان ضيوف بيدفعوا لكل جلسة والمبلغ بيتحسب في إيرادات الجلسة تلقائي.',
      points: ['كود QR شخصي لكل عضو — امسح أو اكتب عند الباب من غير زحمة', 'إجراءات جماعية — حدد أعضاء كتير وعلّمهم حاضرين أو غائبين في مرة واحدة', 'ضيوف بيدفعوا لكل جلسة — المبلغ بيتحسب في الإيرادات تلقائي', 'قائمة انتظار لما الجلسة تكتمل مع تتبع الترقية', 'إيرادات/تكاليف/ربح لحظي وأنت لسه بتاخد الحضور'],
    },
    {
      icon: TrendingUp,
      gradient: 'from-yellow-500 to-amber-500',
      title: 'المحرك المالي',
      subtitle: 'الربح بيتحسب لوحده',
      description: 'دي أقوى ميزة. حط رقمين بس — راتب المدرب و سعر الملعب — وهتشوف كل حاجة بتتحسب تلقائي. أول ما تسلّم حضور الجلسة، المنصة بتحسبلك الإيرادات والتكلفة وصافي الربح في الثانية. لا مفاجآت آخر شهر، لا حسابات في دماغك. أرقام واضحة.',
      points: ['تكلفة الجلسة بتتحسب تلقائي من راتب المدرب و سعر الملعب', 'إيرادات الجلسة = مجموع جلسات الأعضاء الحاضرين + مدفوعات الضيوف', 'الربح/الخسارة بيظهر أخضر/أحمر في كل مكان — أول ما الحضور يتسجّل', 'تتبع مصاريف إضافية بالفئة — عشان تشوف الربح الحقيقي', 'الحسابات شغّالة في قاعدة البيانات — دايماً محدّثة ودقيقة'],
    },
    {
      icon: BarChart3,
      gradient: 'from-pink-500 to-rose-500',
      title: 'التقارير والتحليلات',
      subtitle: 'قرارات بالبيانات مش بالحدس',
      description: 'تحللين مخصصة عشان تاخد قرارات صح. رسوم بيانية للدخل مقابل المصاريف، تحليل الاحتفاظ بالأعضاء، أداء المدربين، توقعات الدخل للشه الجايين، ورادار صحة الأعضاء اللي بيقولك مين هيسيبك قبل ما يمشي. صدّر كل حاجة PDF أو CSV.',
      points: ['رسم بياني للدخل مقابل المصاريف مع ملخص شهري ومتوسط الربح للجلسة', 'تحليل الاحتفاظ — نشط، متوقف 30-60 يوم، متوقف أكتر من 60 يوم', 'رادار صحة الأعضاء: سليم / تحت الخطر / مشترك', 'توقع الدخل للشه الجايين بناءً على الاتجاهات القديمة', 'مقارنة أداء المدربين وخريطة حرارية لأوقات الجلسات', 'تقرير PDF بنقرة واحدة وتصدير CSV للمدفوعات'],
    },
    {
      icon: UserCog,
      gradient: 'from-teal-500 to-cyan-500',
      title: 'الفرق والمدربين والأماكن',
      subtitle: 'نظّم فريقك',
      description: 'رتّب أعضاءك في فرق حسب الرياضة ومجموعة العمر والمستوى. دليل المدربين فيه تخصصاتهم ورواتبهم وبتدخل تلقائي في حسابات التكلفة. كتالوج الأماكن فيه سعة كل ملعب/صالة. وكتالوج رياضات — كرة طائرة النهارده وكرة سلة بكرة.',
      points: ['فرق منظمة حسب الرياضة ومجموعة العمر والمستوى', 'دليل المدربين بالتخصصات والرواتب لحساب التكلفة', 'كتالوج الأماكن بمعلومات سعة كل ملعب وصالة', 'كتالوج رياضات لكل أكاديمية — كمّل مع نموك'],
    },
    {
      icon: Trophy,
      gradient: 'from-indigo-500 to-blue-500',
      title: 'البطولات',
      subtitle: 'إدارة المسابقات',
      description: 'أنشئ بطولة لكل رياضة بالتاريخ وتابع حالتها. أدر جدول المباريات كله — الجولات والفرق والنتايج والتواريخ والأماكن. سجل المباريات بيفضل مرتبط بالفرق والمواسم.',
      points: ['أنشئ بطولة لكل رياضة بالتاريخ وتابع حالتها', 'إدارة جدول المباريات كامل: الجولات والفرق والنتايج والتواريخ والأماكن', 'سجل المباريات مرتبط بالفرق والمواسم'],
    },
    {
      icon: Star,
      gradient: 'from-purple-500 to-violet-500',
      title: 'تفاعل الأعضاء',
      subtitle: 'خلي أعضاءك متحمسين',
      description: 'خلي الأعضاء متحمسين والأهل عارفين اللي بيحصل. لوحة إعلانات بتتوصل لكل الأعضاء. معرض صور مرتبط بالجلسات. شارات بتتحصل تلقائي مع كل إنجاز — الخطوة الأولى، المنتظم، المخلص، البطل، الأسطورة. تقييمات اللاعبين — المدرب بيقّيمهم في التقنية والمناورة واللياقة والسلوك.',
      points: ['لوحة إعلانات بتتوصل لكل الأعضاء', 'معرض صور مرتبط بالجلسات والإعلانات', 'شارات إنجاز: الخطوة الأولى (1)، المنتظم (10)، المخلص (25)، البطل (50)، الأسطورة (100)', 'تقييمات اللاعبين — المدرب بيقّيمهم في التقنية والمناورة واللياقة والسلوك', 'تقييمات الجلسات — الأعضاء بيقيّموا الجلسات بنجوم 1-5 مع تعليقات', 'تغذية نشاط حية — كل حاجة بتحصل: انضمامات، دفع، شارات، تسجيلات دخول'],
    },
    {
      icon: Globe,
      gradient: 'from-cyan-500 to-emerald-500',
      title: 'صفحة الأكاديمية العامة',
      subtitle: 'صفحة تسويق جاهزة',
      description: 'كل أكاديمية ليها صفحة عامة اختيارية باسماها. تعرض وصف الأكاديمية والرياضات. الزوار بيبعتوا طلب تجربة وبيدخلوا مباشرة في pipeline في لوحة التحكم — جديد، تم التواصل، اتحول، اترفض. قناة تسويق مجانية جاهزة.',
      points: ['صفحة عامة باسم أكاديمتك تعرض كل حاجة', 'نماذج طلب التجربة بتدخل مباشرة في pipeline', 'قناة تسويق مجانية مدمجة في المنصة'],
    },
    {
      icon: Megaphone,
      gradient: 'from-amber-500 to-orange-500',
      title: 'الإشعارات والتكاملات',
      subtitle: 'تواصل احترافي',
      description: 'إشعارات بريد إلكتروني احترافية. تأكيد الدفع، تذكيرات التجديد لما العضو يخلص جلسات، رسائل ترحيب للأعضاء الجدد، وإشعارات الجلسات الجديدة. وفيه تغذية تقويم شخصية لكل أكاديمية — تقويم الموبايل بيفضل محدّث تلقائي.',
      points: ['رسائل تأكيد الدفع بالمبلغ والجلسات', 'تذكيرات التجديد — بنقرة واحدة من لوحة التحكم', 'رسائل ترحيب للأعضاء الجدد وإشعارات الجلسات الجديدة', 'تغذية تقويم .ics شخصية لكل أكاديمية — مزامنة تلقائية'],
    },
  ]

  const regionItems = [
    { icon: Globe, label: 'عربي وإنجليزي — الاتنين', desc: 'واجهة كاملة من اليمين للشمال' },
    { icon: DollarSign, label: 'جنيه مصري — جاهز', desc: 'من غير ما تظبط حاجة' },
    { icon: Smartphone, label: 'يشتغل على كل حاجة', desc: 'موبايل في الملعب زي اللاب توب في المكتب' },
    { icon: Shield, label: 'وضع داكن في كل مكان', desc: 'واجهة حديثة ومريحة للعين' },
  ]

  const securityPoints = ['بيانات كل أكاديمية معزولة — لا أكاديمية تقدر تشوف بيانات التانية', 'تحكم في الوصول حسب الدور — في قاعدة البيانات والـ routes', 'مزامنة فورية بتقنية Supabase و PostgreSQL', 'مضمون على Vercel + Supabase — من غير ما تتعب في الصيانة', 'نسخ احتياطي تلقائي', 'بنية تحتية جاهزة لمعايير GDPR']

  return (
    <>
      <Navbar />
      <main className="relative min-h-screen">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px]" />
          <div className="particle-dots" />
        </div>

        {/* Hero */}
        <motion.section
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="relative pt-36 pb-16 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-3xl mx-auto text-center" ref={heroRef}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1, type: 'spring', stiffness: 150 }}
                className="mb-8 inline-block"
              >
                <div className="w-28 h-28 rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-indigo-500/15 mx-auto animate-glow">
                  <Image src="/Volleyra.jpeg" alt="Volleyra Logo" width={112} height={112} className="w-full h-full object-cover" />
                </div>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 15 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.15 }} className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                <span className="gradient-text">فوليرا</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 15 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }} className="text-2xl sm:text-3xl font-bold text-indigo-400 mb-6">
                إدارة أكاديميات الرياضة
              </motion.p>

              <motion.p initial={{ opacity: 0, y: 15 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.25 }} className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto mb-4">
                منصة شاملة لإدارة أكاديميات الرياضة — من تسجيل اللاعبين وجداول التدريب لحد تتبع المباريات والتحليلات. فوليرا بتوفر كل اللي المدربين والمديرين محتاجينه عشان يسيروا أكاديمية باحترافية.
              </motion.p>

              <motion.p initial={{ opacity: 0, y: 15 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.3 }} className="text-gray-500 text-base leading-relaxed max-w-xl mx-auto mb-10">
                بتبدل الإكسل وواتساب والدفاتر بمنصة واحدة بتغطي التسجيل والفواتير والحضور والربح — عشان تركز في التدريب مش في الأوراق.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 10 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.35 }} className="flex flex-wrap gap-3 justify-center">
                <a href="https://volley-academy.vercel.app/login" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 hover:-translate-y-0.5">
                  جرّب مجاناً
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <Link href="/#products" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/10 text-gray-300 font-semibold hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300 hover:-translate-y-0.5">
                  <ArrowLeft className="w-4 h-4" />
                  رجوع
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Workflow */}
        <section className="relative px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <AnimatedWorkflow />
              <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.8 }} className="text-center text-gray-500 text-sm -mt-8 mb-4">
                من التسجيل للربح — الدورة الكاملة
              </motion.p>
          </div>
        </section>

        {/* Stats */}
        <section className="relative py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card rounded-2xl p-8 border-gradient">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <StatCard value={12} label="وحدة مميزات" icon={Zap} />
                <StatCard value={100} suffix="%" label="مزامنة فورية" icon={Clock} />
                <StatCard value={2} label="لغتين (عربي + إنجليزي)" icon={Globe} />
                <StatCard value={0} suffix="%" label="رسوم الإعداد" icon={DollarSign} />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="relative py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5 }} className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                <span className="text-white">كل اللي تحتاجه عشان</span>
                <span className="text-shimmer">تسير أكاديمتك</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-xl mx-auto">
                فوليرا بيشتغل على كل دورة حياة الأكاديمية — من لحظة ما العضو يسجل لحد ما تعرف بالظبط أنهي جلسات بتحقق أرباح.
              </p>
            </motion.div>

            <div className="space-y-6">
              {features.map((feature, i) => (
                <FeatureSection key={i} icon={feature.icon} gradient={feature.gradient} title={feature.title} subtitle={feature.subtitle} description={feature.description} points={feature.points} reversed={i % 2 === 1} />
              ))}
            </div>
          </div>
        </section>

        {/* Built for Your Region */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6 }}>
              <div className="glass-card rounded-3xl p-8 lg:p-10 relative overflow-hidden border-gradient">
                <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 rounded-full blur-[100px]" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center shadow-lg">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">مصمم ليك</h3>
                      <p className="text-xs text-cyan-400">عربي من الأول مش مترجم</p>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {regionItems.map((item, i) => (
                      <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-white/[0.08] transition-colors">
                        <item.icon className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0" />
                        <div>
                          <p className="text-sm font-medium text-white">{item.label}</p>
                          <p className="text-xs text-gray-500">{item.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Security */}
        <section className="relative py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6 }}>
              <TiltCard className="h-full">
                <div className="glass-card rounded-3xl p-8 lg:p-10 relative overflow-hidden">
                  <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-[80px]" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">الأمان والموثوقية</h3>
                        <p className="text-xs text-indigo-400">حماية على مستوى الشركات الكبيرة</p>
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {securityPoints.map((point, i) => (
                        <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.05 }} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                          <span className="text-sm text-gray-300">{point}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6 }}>
              <div className="w-20 h-20 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-indigo-500/15 mx-auto mb-8 animate-glow">
                <Image src="/Volleyra.jpeg" alt="Volleyra Logo" width={80} height={80} className="w-full h-full object-cover" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                جاهز تسير أكاديمتك كبيزنس؟
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                جرّب مجاناً النهارده. من غير كريديت كارد. وصول كامل لكل المميزات.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a href="https://volley-academy.vercel.app/login" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold text-lg hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 hover:-translate-y-0.5">
                  جرّب مجاناً
                  <ArrowUpRight className="w-5 h-5" />
                </a>
                <Link href="/solutions/volleyra" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/10 text-gray-300 font-semibold hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300">
                  See Overview
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
