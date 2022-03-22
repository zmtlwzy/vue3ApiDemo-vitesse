import type { ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void

export interface Fn<T = any, R = T> {
  (...arg: T[]): R
}

export interface ChangeEvent extends Event {
  target: HTMLInputElement
}
