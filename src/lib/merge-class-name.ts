import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * A helper that combines `clsx` and `tailwind-merge` to allow complex merging of Tailwind class names into
 * a de-duplicated, conflict-free string.
 * @param items A comma-separated list of Tailwind class names, which can also be loaded conditionally.
 *
 * Example:
 * ```
 * <SomeComponent className={mergeClassName(aVariableWithAClassNameString, someBoolean && 'flex', 'items-center')} />
 * ```
 */
export default function mergeClassName<T>(...items: Array<T>): string {
  return twMerge(clsx(items))
}
