'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Code, Key, Webhook, Database, Lock, FileText } from 'lucide-react'
import { useI18n } from '@/lib/i18n'

function EndpointCard({ method, path, description, index }: { method: string; path: string; description: string; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const methodColors: Record<string, string> = {
    GET: 'bg-emerald-500/10 text-emerald-400',
    POST: 'bg-blue-500/10 text-blue-400',
    PUT: 'bg-amber-500/10 text-amber-400',
    DELETE: 'bg-red-500/10 text-red-400',
  }
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 15 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.3, delay: index * 0.04 }} className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
      <span className={`shrink-0 px-2 py-1 rounded text-xs font-mono font-bold ${methodColors[method] || 'bg-gray-500/10 text-gray-400'}`}>{method}</span>
      <div>
        <code className="text-sm text-gray-300 font-mono">{path}</code>
        <p className="text-xs text-gray-500 mt-1">{description}</p>
      </div>
    </motion.div>
  )
}

function DocSection({ icon: Icon, title, children, index }: { icon: React.ElementType; title: string; children: React.ReactNode; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: index * 0.05 }} className="glass-card rounded-2xl p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
          <Icon className="w-5 h-5 text-indigo-400" />
        </div>
        <h2 className="text-xl font-bold gradient-text">{title}</h2>
      </div>
      <div className="space-y-4 text-gray-400 leading-relaxed text-sm">{children}</div>
    </motion.div>
  )
}

export default function ApiPage() {
  const { locale } = useI18n()
  const isAr = locale === 'ar'

  const endpoints = [
    { method: 'GET', path: '/api/v1/contacts', description: isAr ? 'عرض جميع جهات الاتصال في مساحة العمل بتاعتك' : 'List all contacts in your workspace' },
    { method: 'POST', path: '/api/v1/contacts', description: isAr ? 'إنشاء جهة اتصال جديدة' : 'Create a new contact' },
    { method: 'GET', path: '/api/v1/contacts/:id', description: isAr ? 'استرجاع جهة اتصال محددة بالمعرف' : 'Retrieve a specific contact by ID' },
    { method: 'PUT', path: '/api/v1/contacts/:id', description: isAr ? 'تحديث جهة اتصال موجودة' : 'Update an existing contact' },
    { method: 'DELETE', path: '/api/v1/contacts/:id', description: isAr ? 'حذف جهة اتصال' : 'Delete a contact' },
    { method: 'GET', path: '/api/v1/deals', description: isAr ? 'عرض جميع الصفقات في خط المبيعات' : 'List all deals in the pipeline' },
    { method: 'POST', path: '/api/v1/deals', description: isAr ? 'إنشاء صفقة جديدة' : 'Create a new deal' },
    { method: 'GET', path: '/api/v1/campaigns', description: isAr ? 'عرض جميع حملات البريد الإلكتروني' : 'List all email campaigns' },
    { method: 'POST', path: '/api/v1/campaigns', description: isAr ? 'إنشاء حملة بريد إلكتروني جديدة' : 'Create a new email campaign' },
    { method: 'GET', path: '/api/v1/inventory', description: isAr ? 'عرض جميع عناصر المخزون' : 'List all inventory items' },
    { method: 'GET', path: '/api/v1/invoices', description: isAr ? 'عرض جميع الفواتير' : 'List all invoices' },
    { method: 'POST', path: '/api/v1/invoices', description: isAr ? 'إنشاء فاتورة جديدة' : 'Create a new invoice' },
  ]

  return (
    <>
      <Navbar />
      <main className="relative min-h-screen">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px]" />
        </div>

        <section className="relative pt-36 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6"><span className="gradient-text">{isAr ? 'مرجع API' : 'API Reference'}</span></h1>
              <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
                {isAr ? 'ادمج NineApps في تطبيقاتك مع واجهة برمجة تطبيقات RESTful. وصول كامل لجهات الاتصال والصفقات والحملات والمخزون والمزيد.' : 'Integrate NineApps into your applications with our RESTful API. Full access to contacts, deals, campaigns, inventory, and more.'}
              </p>
            </motion.div>
          </div>
        </section>

        <section className="relative pb-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-6">
            <DocSection icon={Key} title={isAr ? 'المصادقة' : 'Authentication'} index={0}>
              <p>{isAr ? 'جميع طلبات API تتطلب المصادقة عبر مفتاح API. ضع مفتاحك في header المصادقة:' : 'All API requests require authentication via an API key. Include your key in the Authorization header:'}</p>
              <div className="rounded-lg bg-black/40 border border-white/[0.06] p-4 font-mono text-xs text-gray-300 overflow-x-auto">
                Authorization: Bearer YOUR_API_KEY
              </div>
              <p>{isAr ? 'تقدر تنشئ وتدير مفاتيح API من لوحة التحكم بتاعتك في NineApps تحت إعدادات الحساب ← مفاتيح API.' : 'You can generate and manage your API keys from your NineApps dashboard under Account Settings &rarr; API Keys.'}</p>
            </DocSection>

            <DocSection icon={Code} title={isAr ? 'الرابط الأساسي' : 'Base URL'} index={1}>
              <p>{isAr ? 'جميع طلبات API لازم تتعمل على:' : 'All API requests should be made to:'}</p>
              <div className="rounded-lg bg-black/40 border border-white/[0.06] p-4 font-mono text-xs text-gray-300">
                https://api.nineapps.com/api/v1
              </div>
              <p>{isAr ? 'جميع الطلبات لازم تتعمل عبر HTTPS. الطلبات اللي بتيجي عن طريق HTTP العادي هتترفض.' : 'All requests must be made over HTTPS. Requests made over plain HTTP will be rejected.'}</p>
            </DocSection>

            <DocSection icon={FileText} title={isAr ? 'نقاط النهاية' : 'Endpoints'} index={2}>
              <p className="mb-4">{isAr ? 'oints API المتاحة مرتّبة حسب المورد:' : 'Below are the available API endpoints organized by resource:'}</p>
              <div className="space-y-2">
                {endpoints.map((ep, i) => (
                  <EndpointCard key={`${ep.method}-${ep.path}`} {...ep} index={i} />
                ))}
              </div>
            </DocSection>

            <DocSection icon={Database} title={isAr ? 'صيغة الاستجابة' : 'Response Format'} index={3}>
              <p>{isAr ? 'جميع الاستجابات بترجع بصيغة JSON. استجابة النجاح النموذجية بتبقى كده:' : 'All responses are returned in JSON format. A typical successful response looks like:'}</p>
              <div className="rounded-lg bg-black/40 border border-white/[0.06] p-4 font-mono text-xs text-gray-300 overflow-x-auto">
{`{
  "status": "success",
  "data": { ... },
  "meta": {
    "page": 1,
    "per_page": 25,
    "total": 142
  }
}`}
              </div>
              <p>{isAr ? "استجابات الخطأ بتبين حالة 'error' ورسالة بتشرح إيه اللي حصل غلط." : 'Error responses include a status of &quot;error&quot; and a message explaining what went wrong.'}</p>
            </DocSection>

            <DocSection icon={Webhook} title={isAr ? 'حدود الطلبات' : 'Rate Limits'} index={4}>
              <p>{isAr ? 'طلبات API ليها حد عشان نضمن استخدام عادل:' : 'API requests are rate-limited to ensure fair usage:'}</p>
              <ul className="space-y-1.5 list-disc list-inside text-sm">
                <li><strong className="text-gray-300">{isAr ? 'الخطة المجانية:' : 'Free tier:'}</strong> {isAr ? '100 طلب في الدقيقة' : '100 requests per minute'}</li>
                <li><strong className="text-gray-300">{isAr ? 'الخطة الاحترافية:' : 'Pro tier:'}</strong> {isAr ? '1,000 طلب في الدقيقة' : '1,000 requests per minute'}</li>
                <li><strong className="text-gray-300">{isAr ? 'المؤسسات:' : 'Enterprise:'}</strong> {isAr ? 'حدود مخصصة متاحة' : 'Custom limits available'}</li>
              </ul>
              <p>{isAr ? 'معلومات حدود الطلبات موجودة في headers الاستجابة: X-RateLimit-Limit و X-RateLimit-Remaining و X-RateLimit-Reset.' : 'Rate limit information is included in response headers: X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset.'}</p>
            </DocSection>

            <DocSection icon={Lock} title="Webhooks" index={5}>
              <p>{isAr ? 'اشترك في الأحداث الفورية من حسابك في NineApps. Webhooks بتبعت طلبات HTTP POST للرابط الليحدده لما الأحداث بتحصل.' : 'Subscribe to real-time events from your NineApps account. Webhooks send HTTP POST requests to your specified URL when events occur.'}</p>
              <p>{isAr ? 'الأحداث المدعومة تشمل: contact.created و contact.updated و deal.created و deal.stage_changed و invoice.created و invoice.paid والمزيد.' : 'Supported events include: contact.created, contact.updated, deal.created, deal.stage_changed, invoice.created, invoice.paid, and more.'}</p>
              <p>{isAr ? 'اعمل إعدادات Webhooks من لوحة التحكم تحت إعدادات الحساب ← Webhooks.' : 'Configure webhooks from your dashboard under Account Settings &rarr; Webhooks.'}</p>
            </DocSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
