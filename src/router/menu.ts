import type { RouteRecordRaw } from 'vue-router'
import { camelCase, cloneDeep } from 'lodash-es'
import type { MenuOption } from 'naive-ui'
import { renderLink } from './render'
import { routes } from '.'
import { listToTree, treeMap } from '~/utils/treeHelper'
export const getNaiveMenuList = (r = routes) => {
  const dr = cloneDeep(r) as RouteRecordRaw[]
  const genRawMenuList = dr.map((item) => {
    const _item = {} as MenuOption
    const { path } = item
    const realItem = item?.children?.[0]
    const name = realItem?.name as string
    if (name && name !== 'all' && name !== 'index')
      _item.path = path

    _item.id = name as string
    const pArr = name?.split('-')

    if (realItem?.meta)
      _item.meta = realItem.meta

    if (pArr.length > 1)
      _item.pid = pArr.slice(0, pArr.length - 1).join('-')

    return _item
  }).filter((item) => {
    return Reflect.get(item, 'path')
  }).sort((a, b) => {
    return (a?.meta?.menuOrderNo || 0) - (b?.meta?.menuOrderNo || 0)
  })
  return treeMap(listToTree(genRawMenuList), {
    conversion: (item) => {
      const title = item?.meta?.menuTitle || camelCase(item.id.split('-').pop())
      return {
        label: item?.meta?.isWrapper ? title : renderLink(item.path, title),
        key: item.id,
      }
    },
  })
}
