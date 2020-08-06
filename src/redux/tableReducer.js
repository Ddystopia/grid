const initial = {
  users: [],
  sortBy: 'id',
  sortIsDesc: false,
  page: 1,
  pageSize: 20,
  itemsCount: 0,
  isFetching: false,
  hasError: false,
}

export const tableReducer = (state = initial, action) => {
  switch (action.type) {
    case '':
      return state
  }
}

export const setUsers = payload => ({ type: '', payload })
export const addUser = payload => ({ type: '', payload })
export const setSortBy = payload => ({ type: '', payload })
export const setSortIsDesc = payload => ({ type: '', payload })
export const setPage = payload => ({ type: '', payload })
export const setPageSize = payload => ({ type: '', payload })
export const setItemsCount = payload => ({ type: '', payload })
export const toggleIsFetching = payload => ({ type: '', payload })
export const setError = payload => ({ type: '', payload })
