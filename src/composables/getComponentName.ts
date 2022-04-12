export function getComponentName(meta: ImportMeta) {
  const path = meta.url
  if (path)
    return (path as string)?.split(/[\/\\.]/).slice(-2)[0] || ''
  else
    return ''
}
