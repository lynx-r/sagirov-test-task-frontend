import type { MenuItem } from '~~/shared/types'

export default defineEventHandler(() => {
  return $fetch<{ records: MenuItem[] }>(
    `${process.env.VITE_BACKEND_URL}/admin/api/resources/MenuItem/actions/listAll`,
  )
})
