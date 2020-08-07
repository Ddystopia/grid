import { createSelector } from 'reselect'
import { filterUsers } from '../utils/filterUsers'

const getAllUsers = state => state.table.users
export const getSortBy = state => state.table.sortBy
export const getSortIsDesc = state => state.table.sortIsDesc
export const getPage = state => state.table.page
export const getPageSize = state => state.table.pageSize
export const getItemsCount = state => state.table.itemsCount
export const getIsFetching = state => state.table.isFetching
export const getIsLarge = state => state.table.isLarge
export const getFilter = state => state.table.filterString
export const getHasError = state => state.table.hasError
export const getSelectedId = state => state.table.selectedId
export const getTableSelectDatas = state => state.table.headers

export const getSelectedUser = createSelector([getAllUsers, getSelectedId], (users, selectedId) => {
  return users.find(u => u.id === selectedId)
})
export const getFilteredUsersCount = createSelector(
  [getAllUsers, getFilter, getTableSelectDatas],
  (users, filter, headers) => filterUsers(users, filter, headers).length
)
export const getUsersSelector = createSelector(
  [getAllUsers, getPage, getPageSize, getFilter, getTableSelectDatas, getSortBy, getSortIsDesc],
  (users, page, pageSize, filter, headers) => {
    const leftUserIndex = (page - 1) * pageSize
    const rightUserIndex = page * pageSize - 1
    return filterUsers(users, filter, headers).slice(leftUserIndex, rightUserIndex + 1)
  }
)
