import { cn } from '@/lib/utils'

interface DecorativeElementsProps {
  className?: string
}

export function DecorativePatterns({ className }: DecorativeElementsProps) {
  return (
    <>
      {/* Top Left Pattern */}
      <div className={cn(
        'absolute top-5 left-5 grid grid-cols-2 gap-2.5 z-10',
        className
      )}>
        {[...Array(4)].map((_, i) => (
          <div key={i} className="pattern-circle" />
        ))}
      </div>

      {/* Bottom Right Pattern */}
      <div className={cn(
        'absolute bottom-5 right-5 grid grid-cols-2 gap-2.5 z-10',
        className
      )}>
        {[...Array(4)].map((_, i) => (
          <div key={i} className="pattern-circle" />
        ))}
      </div>
    </>
  )
}

export function FloatingAirplane({ className }: DecorativeElementsProps) {
  return (
    <div className={cn(
      'absolute top-0 right-5 text-primary-400 z-10',
      className
    )}>
      <div className="animate-float">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
        </svg>
      </div>
      {/* Dotted flight path */}
      <div className="absolute top-3 right-8 w-24 h-0.5 opacity-50">
        <div className="w-full h-full bg-gradient-to-r from-primary-400 to-transparent bg-repeat-x" 
             style={{
               backgroundImage: 'repeating-linear-gradient(to right, currentColor 0px, currentColor 4px, transparent 4px, transparent 8px)'
             }} 
        />
      </div>
    </div>
  )
}

export function LandmarkIcons({ className }: DecorativeElementsProps) {
  return (
    <div className={cn(
      'flex justify-center gap-5 mt-5 opacity-70',
      className
    )}>
      <svg className="w-8 h-8 text-primary-200" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
      </svg>
      <svg className="w-8 h-8 text-primary-200" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
      <svg className="w-8 h-8 text-primary-200" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
      </svg>
    </div>
  )
}

export function DecorativeBuildings({ className }: DecorativeElementsProps) {
  return (
    <div className={cn(
      'absolute bottom-0 right-0 flex items-end gap-1 opacity-10',
      className
    )}>
      <div className="w-5 h-10 bg-primary-400 rounded-t-sm" />
      <div className="w-6 h-15 bg-primary-400 rounded-t-sm" />
      <div className="w-4 h-8 bg-primary-400 rounded-t-sm" />
    </div>
  )
}