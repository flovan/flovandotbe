import { PropsWithChildren, useEffect, useRef } from 'react'
import { Link, useTranslation } from '@herob191/gatsby-plugin-react-i18next'

import { joinClassName } from '../../lib/class-name'
import { PropsWithClassName } from '../../types/types'

type StepTabLinkProps = PropsWithChildren<PropsWithClassName<{ href: string }>>

const StepTabLink = ({ href, className, children }: StepTabLinkProps) => (
  <a
    href={href}
    className={joinClassName(
      'max-xs:flex-1 flex rounded-full border border-highlight px-flovan-xs text-flovan-sm font-semibold uppercase tracking-wider no-underline transition-colors aria-selected:bg-highlight',
      className,
    )}
  >
    {children}
  </a>
)

const StepTabs = ({ className }: PropsWithClassName) => {
  const { t } = useTranslation('info')

  const rootElementRef = useRef<HTMLDivElement | null>(null)
  const tabListElementRef = useRef<HTMLUListElement | null>(null)
  const tabElementsRef = useRef<Array<HTMLAnchorElement>>([])
  const panelElementsRef = useRef<Array<HTMLElement>>([])

  const switchTab = (oldTab: HTMLAnchorElement, newTab: HTMLAnchorElement) => {
    newTab.focus()
    newTab.removeAttribute('tabindex')
    newTab.setAttribute('aria-selected', 'true')
    ;(newTab.parentNode as HTMLLIElement).classList.add('active')

    oldTab.removeAttribute('aria-selected')
    oldTab.setAttribute('tabindex', '-1')
    ;(oldTab.parentNode as HTMLLIElement).classList.remove('active')

    const index = tabElementsRef.current.indexOf(newTab)
    const oldIndex = tabElementsRef.current.indexOf(oldTab)

    panelElementsRef.current[oldIndex].hidden = true
    panelElementsRef.current[index].hidden = false
  }

  const handleTabClick = (event: MouseEvent) => {
    event.preventDefault()

    const currentTab = tabElementsRef.current.filter(element =>
      element.hasAttribute('aria-selected'),
    )[0]
    const nextTab = event.currentTarget
    if (
      nextTab === null ||
      currentTab === undefined ||
      event.currentTarget === currentTab
    ) {
      return
    }
    switchTab(currentTab, nextTab as HTMLAnchorElement)
  }

  const handleTabKeyDown = (event: KeyboardEvent) => {
    const eventTarget = event.currentTarget as HTMLAnchorElement
    const index = tabElementsRef.current.indexOf(eventTarget)

    if (
      event.key === 'ArrowLeft' &&
      tabElementsRef.current[index - 1] !== undefined
    ) {
      event.preventDefault()
      switchTab(eventTarget, tabElementsRef.current[index - 1])
    } else if (
      event.key === 'ArrowRight' &&
      tabElementsRef.current[index + 1] !== undefined
    ) {
      event.preventDefault()
      switchTab(eventTarget, tabElementsRef.current[index + 1])
    } else if (event.key === 'ArrowDown') {
      event.preventDefault()
      panelElementsRef.current[index].focus()
    }
  }

  useEffect(() => {
    const rootElement = rootElementRef.current
    const listElement = tabListElementRef.current

    if (rootElement === null || listElement === null) {
      return
    }

    listElement.setAttribute('role', 'tablist')

    Array.from(listElement.querySelectorAll('a') ?? []).forEach(
      (tabElement, index) => {
        tabElementsRef.current.push(tabElement)

        tabElement.setAttribute('role', 'tab')
        tabElement.setAttribute('id', `tab${index + 1}`)
        ;(tabElement.parentNode as HTMLLIElement).setAttribute(
          'role',
          'presentation',
        )

        tabElement.addEventListener('click', handleTabClick)
        tabElement.addEventListener('keydown', handleTabKeyDown)

        if (index > 0) {
          tabElement.setAttribute('tabindex', '-1')
        } else {
          tabElement.setAttribute('aria-selected', 'true')
          ;(tabElement.parentNode as HTMLLIElement).classList.add('active')
        }
      },
    )

    Array.from(rootElement.querySelectorAll('section') ?? []).forEach(
      (panel, index) => {
        panelElementsRef.current.push(panel)

        panel.setAttribute('role', 'tabpanel')
        panel.setAttribute('aria-labelledby', tabElementsRef.current[index].id)

        if (index > 0) {
          panel.setAttribute('tabindex', '-1')
          panel.hidden = true
        }
      },
    )
  }, [])

  return (
    <div ref={rootElementRef} className={className}>
      <ul
        ref={tabListElementRef}
        className="xs:flex-row xs:items-center xs:gap-flovan-xxs mb-flovan-sm flex flex-col items-stretch gap-flovan-xs sm:gap-flovan-xs"
      >
        <li className="flex items-center gap-flovan-xs [&.active]:flex-1">
          <StepTabLink href="#step-1" className="group peer">
            <span>{t('Step 1')}</span>
            <span className="max-xs:block hidden group-aria-selected:block">
              : {t('Chit-chat')}
            </span>
          </StepTabLink>
          <div
            className="xs:block relative hidden h-px flex-1 flex-grow-[0.0001] bg-primary transition-all duration-300 after:absolute after:right-px after:top-1/2 after:h-3 after:w-3 after:-translate-y-1/2 after:rotate-45 after:border after:border-b-0 after:border-l-0 after:border-primary peer-aria-selected:flex-grow sm:peer-[:not([aria-selected])]:after:-translate-x-1/3"
            role="presentation"
            aria-hidden
          />
        </li>
        <li className="flex items-center gap-flovan-xs [&.active]:flex-1">
          <StepTabLink href="#step-2" className="group peer">
            <span>{t('Step 2')}</span>
            <span className="max-xs:block hidden group-aria-selected:block">
              : {t('Handshake')}
            </span>
          </StepTabLink>
          <div
            className="xs:block relative hidden h-px flex-1 flex-grow-[0.0001] bg-primary transition-all duration-300 after:absolute after:right-px after:top-1/2 after:h-3 after:w-3 after:-translate-y-1/2 after:rotate-45 after:border after:border-b-0 after:border-l-0 after:border-primary peer-aria-selected:flex-grow sm:peer-[:not([aria-selected])]:after:-translate-x-1/3"
            role="presentation"
            aria-hidden
          />
        </li>
        <li className="flex items-center gap-flovan-xs [&.active]:flex-1">
          <StepTabLink href="#step-3" className="group peer">
            <span>{t('Step 3')}</span>
            <span className="max-xs:block hidden group-aria-selected:block">
              : {t('Delivery')}
            </span>
          </StepTabLink>
        </li>
      </ul>
      <section id="step-1" className="prose">
        <p>
          {t(
            'Everything starts with clearly defined goals—both yours and those of your potential customers. We can translate those goals into a digital strategy that defines the scope of what needs to be designed and built.',
          )}
        </p>
      </section>
      <section id="step-2" className="prose">
        <p>
          {t(
            'With the strategy in hand, I can draft a quote with a target date on which the realisation will start, and when the delivery of the end result could be. All I need now, is your agreement and any required assets.',
          )}
        </p>
      </section>
      <section id="step-3" className="prose">
        <p>
          {t(
            'Once the production kicks off, an initial design phase will be followed by development, then testing and validation, and finally, the delivery—with an obligatory celebration!',
          )}
        </p>
      </section>
    </div>
  )
}

export default StepTabs
