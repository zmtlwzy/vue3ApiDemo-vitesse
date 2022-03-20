import type { App, Directive, DirectiveBinding } from 'vue'
import { isNumber } from 'lodash-es'

const mounted = (el: HTMLElement, binding: DirectiveBinding<any>) => {
  console.log(el, 'el')
  console.log(binding, 'binding')
  const style = el.style
  style.position = 'fixed'
  style.top = `${el.offsetTop}px`
  const s = (binding.arg || 'left')
  // @ts-expect-error: ignore
  style[s] = `${binding.value}px` as string
}

const updated = (el: HTMLElement, binding: DirectiveBinding) => {
  const style = el.style
  const s = binding.arg || 'left'
  style.left = ''
  style.right = ''
  const val = Number(binding.value)
  if (isNumber(val))
    Reflect.set(style, s, `${binding.value}px`)
}

export const pinDirective: Directive = {
  mounted,
  updated,
}

export function setupPinDirective(app: App) {
  app.directive('pin', pinDirective)
}
