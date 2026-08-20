'use client'

import MouseGlow from './MouseGlow'
import ScrollProgress from './ScrollProgress'
import CustomCursor from './CustomCursor'

export default function ClientEffects() {
  return (
    <>
      <CustomCursor />
      <MouseGlow />
      <ScrollProgress />
    </>
  )
}
