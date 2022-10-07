import { defineConfig, presetAttributify, presetUno, presetIcons } from 'unocss'
import transformerDirective from '@unocss/transformer-directives'

export default defineConfig({
  presets:[presetAttributify(), presetUno(), presetIcons()],
  transformers: [transformerDirective()]
})
