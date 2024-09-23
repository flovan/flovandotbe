declare module '*.svg' {
  const content: any
  export default content
}

export type PropsWithClassName<P = unknown> = P & { className?: string }
