'use client'

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react'

export interface CartItem {
  productId: string
  productName: string
  productLogo: string
  price: string
  period: string
  gradient: string
}

interface CartContextType {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (productId: string) => void
  clearCart: () => void
  isInCart: (productId: string) => boolean
  totalPrice: string
}

const CartContext = createContext<CartContextType | undefined>(undefined)

const CART_KEY = 'nineapps-cart'

function parsePrice(price: string): number {
  return parseFloat(price.replace(/[^0-9.]/g, ''))
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    try {
      const stored = localStorage.getItem(CART_KEY)
      if (stored) setItems(JSON.parse(stored))
    } catch {}
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem(CART_KEY, JSON.stringify(items))
    }
  }, [items, mounted])

  const addItem = useCallback((item: CartItem) => {
    setItems(prev => {
      if (prev.some(i => i.productId === item.productId)) return prev
      return [...prev, item]
    })
  }, [])

  const removeItem = useCallback((productId: string) => {
    setItems(prev => prev.filter(i => i.productId !== productId))
  }, [])

  const clearCart = useCallback(() => {
    setItems([])
  }, [])

  const isInCart = useCallback((productId: string) => {
    return items.some(i => i.productId === productId)
  }, [items])

  const totalPrice = items.reduce((sum, item) => sum + parsePrice(item.price), 0).toFixed(0)

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, clearCart, isInCart, totalPrice }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within CartProvider')
  return context
}
