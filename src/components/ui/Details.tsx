import { PropsWithChildren, useEffect, useRef, useState } from 'react'

import { joinClassName } from '../../lib/class-name'
import { PropsWithClassName } from '../../types/types'

type DetailsProps = PropsWithChildren<
  PropsWithClassName<{ name?: string; title: string }>
>

const Details = ({ title, children, className, ...props }: DetailsProps) => {
  const detailsElementRef = useRef<HTMLDetailsElement | null>(null)
  const summaryElementRef = useRef<HTMLButtonElement | null>(null)
  const contentElementRef = useRef<HTMLDivElement | null>(null)

  const animation = useRef<Animation | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  const onFinish = (open: boolean) => {
    const detailsElement = detailsElementRef.current

    if (detailsElement === null) {
      return
    }

    animation.current = null

    detailsElement.style.height = 'inherit'
    detailsElement.style.overflow = 'visible'
    detailsElement.open = open

    setIsOpen(open)
  }

  const expand = () => {
    const detailsElement = detailsElementRef.current
    const summaryElement = summaryElementRef.current
    const contentElement = contentElementRef.current

    if (
      detailsElement === null ||
      summaryElement === null ||
      contentElement === null
    ) {
      return
    }

    detailsElement.style.height = `${detailsElement.offsetHeight}px`
    detailsElement.open = true

    window.requestAnimationFrame(() => {
      animation.current?.cancel()

      const start = `${detailsElement.offsetHeight}px`
      const end = `${summaryElement.offsetHeight + contentElement.offsetHeight}px`
      const elementAnimation = detailsElement.animate(
        { height: [start, end] },
        { duration: 300, easing: 'ease-in-out' },
      )

      elementAnimation.onfinish = () => {
        onFinish(true)
      }

      animation.current = elementAnimation
    })
  }

  const collapse = () => {
    const detailsElement = detailsElementRef.current
    const summaryElement = summaryElementRef.current
    const contentElement = contentElementRef.current

    if (
      detailsElement === null ||
      summaryElement === null ||
      contentElement === null
    ) {
      return
    }

    window.requestAnimationFrame(() => {
      animation.current?.cancel()

      const start = `${detailsElement.offsetHeight}px`
      const end = `${summaryElement.offsetHeight}px`
      const elementAnimation = detailsElement.animate(
        { height: [start, end] },
        { duration: 300, easing: 'ease-in-out' },
      )

      elementAnimation.onfinish = () => {
        onFinish(false)
      }

      animation.current = elementAnimation
    })
  }

  const handleClick = (event: MouseEvent) => {
    event.preventDefault()

    const detailsElement = detailsElementRef.current

    if (detailsElement === null) {
      return
    }

    detailsElement.style.overflow = 'hidden'

    if (detailsElement.open) {
      collapse()
    } else {
      expand()
    }
  }

  useEffect(() => {
    const summaryElement = summaryElementRef.current
    if (summaryElement === null) {
      return
    }

    summaryElement.addEventListener('click', handleClick)
    return () => {
      summaryElement.removeEventListener('click', handleClick)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [summaryElementRef.current])

  return (
    <details
      ref={detailsElementRef}
      className={joinClassName(
        'rounded-default border border-highlight',
        className,
      )}
      {...props}
    >
      <summary
        ref={summaryElementRef}
        className="group flex cursor-pointer select-none items-center justify-between p-flovan-sm font-bold"
      >
        <span className="transition-colors group-hover:text-primary">
          {title}
        </span>
        <span className="underline">{isOpen ? 'Close' : 'Read'}</span>
      </summary>
      <div
        ref={contentElementRef}
        className="prose border-t border-on-background p-flovan-sm"
      >
        {children}
      </div>
    </details>
  )
}

export default Details
