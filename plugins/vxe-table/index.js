import 'xe-utils'
import VxeTable from 'vxe-table'
import VxeUI from 'vxe-pc-ui'
import vxeTableEn from 'vxe-table/lib/locale/lang/en-US'
import vxeTableZhTw from 'vxe-table/lib/locale/lang/zh-TW'
import '@/assets/styles/vender/vxe-table.scss'

VxeUI.setI18n('en', vxeTableEn)
VxeUI.setI18n('zh-TW', vxeTableZhTw)

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(VxeTable).use(VxeUI)
});
