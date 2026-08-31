'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Trash2, ShoppingCart } from 'lucide-react'
import { useCart } from '@/lib/cart'
import Image from 'next/image'

export default function CartPanel({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  const { items, removeItem, clearCart, totalPrice } = useCart()

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />

          {/* Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-[#0c0f1a] border-l border-white/[0.06] z-[70] flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.06]">
              <div className="flex items-center gap-3">
                <ShoppingCart className="w-5 h-5 text-indigo-400" />
                <h2 className="text-lg font-bold text-white">Your Cart</h2>
                <span className="px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold">
                  {items.length}
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/[0.06] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingCart className="w-12 h-12 text-gray-600 mb-4" />
                  <p className="text-gray-400 text-sm">Your cart is empty</p>
                  <p className="text-gray-600 text-xs mt-1">Add a subscription plan from the products below</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {items.map((item) => (
                    <motion.div
                      key={item.productId}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] group hover:border-white/[0.1] transition-colors"
                    >
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.gradient} flex items-center justify-center shrink-0`}>
                        <Image
                          src={item.productLogo}
                          alt={item.productName}
                          width={28}
                          height={28}
                          className="rounded-md object-contain"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-white truncate">{item.productName}</p>
                        <p className="text-xs text-gray-500">{item.period}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="text-sm font-bold text-white">{item.price}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.productId)}
                        className="p-1.5 rounded-lg text-gray-500 hover:text-red-400 hover:bg-red-500/10 transition-colors shrink-0"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="px-6 py-5 border-t border-white/[0.06] space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Total</span>
                  <span className="text-xl font-bold text-white">${totalPrice}</span>
                </div>
                <button
                  onClick={clearCart}
                  className="w-full py-2.5 rounded-xl border border-white/[0.1] text-gray-400 text-sm font-medium hover:bg-white/[0.04] hover:text-white transition-all"
                >
                  Clear Cart
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
