import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

import themeOverrides from './naive-ui-theme-overrides.json'

export default defineConfig({
  shortcuts: [
    ['column-layout', 'flex flex-col border border-dashed p-3 my-3'],
  ],
  theme: {
    colors: {
      primary: {
        DEFAULT: themeOverrides.common.primaryColor,
        lighten: themeOverrides.common.primaryColorHover,
        darken: themeOverrides.common.primaryColorPressed,
      },
    },
  },
  rules: [
    [
      /^grid-layout-(\d+)(\/(\d+(.*)))?$/,
      ([, row, , gap, gapUnit]) => {
        return {
          'display': 'grid',
          'grid-gap': `${gap ?? '36'}${gapUnit ? '' : 'px'}`,
          'grid-template-columns': `repeat(${row}, minmax(0, 1fr))`,
        }
      },
      { layer: 'components' },
    ],
    [
      /^flex((-(js|je|jc|jb|ja|jev|as|ae|ac|ab|ast|row|rowr|col|colr)){1,3})$/,
      ([_, keyStr]) => {
        return {
          display: 'flex',
          ...Object.fromEntries(keyStr.split('-').slice(1)
            .map((item) => {
              return handleShortKeys(item)
            })),
        }
      },
      { layer: 'components' },
    ],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: 'prose prose-sm m-auto text-left gap-2'.split(' '),
})

function handleShortKeys(key: string): string[] {
  const J = 'justify-content'
  const A = 'align-items'
  const D = 'flex-direction'
  switch (key) {
    case 'js':
      return [J, 'flex-start']
    case 'je':
      return [J, 'flex-end']
    case 'jc':
      return [J, 'center']
    case 'jb':
      return [J, 'space-between']
    case 'ja':
      return [J, 'space-around']
    case 'jev':
      return [J, 'space-evenly']
    case 'as':
      return [A, 'flex-start']
    case 'ae':
      return [A, 'flex-end']
    case 'ac':
      return [A, 'center']
    case 'ab':
      return [A, 'baseline']
    case 'ast':
      return [A, 'stretch']
    case 'row':
      return [D, 'row']
    case 'rowr':
      return [D, 'row-reverse']
    case 'col':
      return [D, 'column']
    case 'colr':
      return [D, 'column-reverse']
    default:
      return []
  }
}
