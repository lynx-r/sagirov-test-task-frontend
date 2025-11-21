import type { OurAdvantage } from '~~/shared/types'

export default defineEventHandler(() => {
  return $fetch<{ records: OurAdvantage[] }>(
    `${process.env.VITE_BACKEND_URL}/admin/api/resources/Advantage/actions/listAll`,
  )
})
