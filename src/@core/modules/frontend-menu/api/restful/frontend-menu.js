import useResource from '@/composables/useResource'
import { FrontendMenuModel } from '@core/modules/frontend-menu/models'

export const FrontendMenuResource = ({
  uri = 'frontend_menu',
}) => {
  console.log(uri)
  const { list, get } = useResource({ uri, listModel: FrontendMenuModel, getModel: FrontendMenuModel })

  return {
    list,
    get,
  }
}