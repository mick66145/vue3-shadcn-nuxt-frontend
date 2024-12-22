import { computed } from 'vue-demi'
import { useRoute } from 'vue-router'
import getPageTitle from '@/utils/get-page-title'

export default function useTitle() {
  const route = useRoute()
  const { $i18n } = useNuxtApp();
  const title = computed(() => getPageTitle(route.meta.title ? $i18n.t(route.meta.title || 'g.system-system-name', route.params.lang) : ''))
  return { title }
}
