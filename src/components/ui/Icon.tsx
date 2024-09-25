import { type SVGProps } from 'react'

import mergeClassName from '../../lib/merge-class-name'
import { type IconName } from '../../types/icons.generated'

export { IconName }

type IconProps = SVGProps<SVGSVGElement> & { name: IconName }
export function Icon({ name, className, ...props }: IconProps) {
  return (
    <svg className={mergeClassName('fill-current', className)} {...props}>
      <use xlinkHref={`/svg/sprite.svg#${name}`} />
    </svg>
  )
}
