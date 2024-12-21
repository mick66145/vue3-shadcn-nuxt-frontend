import { useAsyncState } from '@vueuse/core'
import { ref, computed } from 'vue-demi'
import useNotify from './useNotify'
import { useApp } from '@/stores/app'

export default function useCRUD ({
  createFetch,
  createSuccess = '新增成功',
  createFail = '新增失敗',
  isShowCreateSuccess = true,
  isShowCreateFail = true,

  readFetch,
  readSuccess = '讀取成功',
  readFail = '讀取失敗',
  isShowReadSuccess = true,
  isShowReadFail = true,

  updateFetch,
  updateSuccess = '編輯成功',
  updateFail = '編輯失敗',
  isShowUpdateSuccess = true,
  isShowUpdateFail = true,

  deleteFetch,
  deleteSuccess = '刪除成功',
  deleteFail = '刪除失敗',
  isShowDeleteSuccess = true,
  isShowDeleteFail = true,

  readListFetch,
  readListSuccess = '讀取列表成功',
  readListFail = '讀取列表失敗',
  isShowReadListSuccess = true,
  isShowReadListFail = true,

}) {
  const { notify, notifyAPIError } = useNotify()
  const storeApp = useApp()
  const reqCreate = useAsyncState(createFetch, {}, { immediate: false })
  const reqRead = useAsyncState(readFetch, {}, { immediate: false })
  const reqUpdate = useAsyncState(updateFetch, {}, { immediate: false })
  const reqDelete = useAsyncState(deleteFetch, {}, { immediate: false })
  const reqReadList = useAsyncState(readListFetch, {}, { immediate: false })

  const form = ref()

  const callCreateFetch = async (id = null, payload) => {
    storeApp.isLoading = true
    storeApp.isCreate = true
    const res = await reqCreate.execute(0, id, payload)
    if (reqCreate.error.value) {
      storeApp.isLoading = false
      storeApp.isCreate = false
      storeApp.isSubmit = false
      const message = reqCreate.error.value.response.data.error?.message || reqCreate.error.value.response.data.message || JSON.parse(reqCreate.error.value.request.responseText)?.error?.message || reqCreate.error.value
      isShowCreateFail && notifyAPIError({ message })
      return [null, reqCreate.error.value]
    } else {
      isShowCreateSuccess && notify({ message: createSuccess, type: 'positive' })
      storeApp.isLoading = false
      storeApp.isCreate = false
      storeApp.isSubmit = false
      return [res || true, null]
    }
  }

  const callReadFetch = async (id = null, payload = null) => {
    storeApp.isLoading = true
    storeApp.isReading = true
    console.log('🚀 ~ callReadFetch ~ payload', id, payload)
    const res = await reqRead.execute(0, id, payload)
    if (reqRead.error.value) {
      storeApp.isLoading = false
      storeApp.isReading = false
      const message = reqRead.error.value.response.data.error?.message || reqRead.error.value.response.data.message || JSON.parse(reqRead.error.value.request.responseText)?.error?.message || reqRead.error.value
      isShowReadFail && notifyAPIError({ message })
      return [null, reqRead.error.value]
    } else {
      storeApp.isLoading = false
      storeApp.isReading = false
      return [res, null]
    }
  }

  const callUpdateFetch = async (id, payload = null) => {
    storeApp.isLoading = true
    storeApp.isUpdate = true
    const res = await reqUpdate.execute(0, id, payload)
    console.log('🚀 ~ callUpdateFetch ~ res', res)
    if (reqUpdate.error.value) {
      storeApp.isLoading = false
      storeApp.isUpdate = false
      storeApp.isSubmit = false
      const message = reqUpdate.error.value.response.data.error?.message || reqUpdate.error.value.response.data.message || JSON.parse(reqUpdate.error.value.request.responseText)?.error?.message || reqUpdate.error.value
      isShowUpdateFail && notifyAPIError({ message })
      return [null, reqUpdate.error.value]
    } else {
      isShowUpdateSuccess && notify({ message: updateSuccess, type: 'positive' })
      storeApp.isLoading = false
      storeApp.isUpdate = false
      storeApp.isSubmit = false
      return [res || true, null]
    }
  }

  const callDeleteFetch = async (id) => {
    storeApp.isLoading = true
    storeApp.isDelete = true
    const res = await reqDelete.execute(0, id)
    console.log('🚀 ~ callDeleteFetch ~ res', res)
    if (reqDelete.error.value) {
      storeApp.isLoading = false
      storeApp.isDelete = false
      const message = reqDelete.error.value.response.data.error?.message || reqDelete.error.value.response.data.message || JSON.parse(reqDelete.error.value.request.responseText)?.error?.message || reqDelete.error.value
      isShowDeleteFail && notifyAPIError({ message })
      return [null, reqDelete.error.value]
    } else {
      isShowDeleteSuccess && notify({ message: deleteSuccess, type: 'positive' })
      storeApp.isLoading = false
      storeApp.isDelete = false
      return [res || true, null]
    }
  }

  const callReadListFetch = async (id = null, payload = null) => {
    storeApp.isReadingList = true
    console.log('🚀 ~ callReadListFetch ~ payload', payload)
    const res = await reqReadList.execute(0, id, payload)
    if (reqReadList.error.value) {
      storeApp.isReadingList = false
      const message = reqReadList.error.value.response.data.error?.message || reqReadList.error.value.response.data.message || JSON.parse(reqReadList.error.value.request.responseText)?.error?.message || reqReadList.error.value
      isShowReadListFail && notifyAPIError({ message })
      return [null, reqReadList.error.value]
    } else {
      storeApp.isReadingList = false
      return [res, null]
    }
  }

  const isLoading = computed(() => reqCreate.isLoading.value || reqRead.isLoading.value || reqUpdate.isLoading.value || reqDelete.isLoading.value || reqReadList.isLoading.value)
  const isReading = computed(() => reqRead.isLoading.value)
  const isReadingList = computed(() => reqReadList.isLoading.value)
  const isCreate = computed(() => reqCreate.isLoading.value)
  const isUpdate = computed(() => reqUpdate.isLoading.value)
  const isDelete = computed(() => reqDelete.isLoading.value)
  return {
    form,
    isLoading,
    isReading,
    isReadingList,
    isCreate,
    isUpdate,
    isDelete,
    callCreateFetch,
    callReadFetch,
    callUpdateFetch,
    callDeleteFetch,
    callReadListFetch,
  }
}
