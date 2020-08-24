import PropTypes from 'prop-types'
import { getLarge, getSmall } from '../api/api'
import {
  SET_USERS,
  ADD_USER,
  SET_SORT_BY,
  SET_SORT_IS_DESC,
  SET_PAGE,
  SET_PAGE_SIZE,
  SET_ITEMS_COUNT,
  SET_ERROR,
  TOGGLE_IS_FETCHING,
  SET_SELECTED_ID,
  SET_FILTER,
  SET_IS_LARGE,
  TOGGLE_SORT_IS_DESC,
} from './table.actions'

const initial = {
  users: [],
  headers: ['id', 'firstName', 'lastName', 'email', 'phone'],
  sortBy: 'id',
  sortIsDesc: false,
  page: 1,
  pageSize: 20,
  itemsCount: 0,
  isFetching: false,
  hasError: false,
  selectedId: null,
  filterString: '',
  isLarge: null,
}

export const tableReducer = (state = initial, { type, payload }) => {
  const sortUsers = sortUsersCreator(initial.sortBy, initial.sortIsDesc)
  switch (type) {
    case SET_USERS:
      return {
        ...state,
        sortBy: initial.sortBy,
        sortIsDesc: initial.sortIsDesc,
        users: payload.sort(sortUsers),
      }
    case ADD_USER:
      return {
        ...state,
        sortBy: initial.sortBy,
        sortIsDesc: initial.sortIsDesc,
        users: [
          {
            ...payload,
            id: state.users.reduce((s, u) => (u.id > s ? u.id : s), 0) + 1,
            address: {},
          },
          ...state.users.sort(sortUsers),
        ],
      }
    case SET_SORT_BY:
      return {
        ...state,
        sortBy: payload,
        users: state.users.sort(sortUsersCreator(payload, state.sortIsDesc)),
      }
    case SET_SORT_IS_DESC:
      return {
        ...state,
        sortIsDesc: payload,
        users: state.users.sort(sortUsersCreator(state.sortBy, payload)),
      }
    case TOGGLE_SORT_IS_DESC:
      return {
        ...state,
        sortIsDesc: !state.sortIsDesc,
        users: state.users.sort(sortUsersCreator(state.sortBy, !state.sortIsDesc)),
      }
    case SET_PAGE:
      return { ...state, page: payload }
    case SET_ITEMS_COUNT:
      return { ...state, itemsCount: payload }
    case SET_PAGE_SIZE:
      return { ...state, pageSize: payload }
    case SET_ERROR:
      return { ...state, hasError: true }
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: payload }
    case SET_SELECTED_ID:
      return { ...state, selectedId: payload }
    case SET_FILTER:
      return { ...state, filterString: payload }
    case SET_IS_LARGE:
      return { ...state, isLarge: payload }
    default:
      return state
  }
}

const sortUsersCreator = (sortBy, sortIsDesc) => ({ [sortBy]: x }, { [sortBy]: y }) => {
  const sortedNum = typeof x === 'string' ? x.localeCompare(y) : x - y
  if (sortIsDesc) return -sortedNum
  return sortedNum
}
/* action creators */
export const setUsers = payload => ({ type: SET_USERS, payload })
export const addUser = payload => ({ type: ADD_USER, payload })
export const setSortBy = payload => ({ type: SET_SORT_BY, payload })
export const setSortIsDesc = payload => ({ type: SET_SORT_IS_DESC, payload })
export const toggleSortIsDesc = payload => ({ type: TOGGLE_SORT_IS_DESC, payload })
export const setPage = payload => ({ type: SET_PAGE, payload })
export const setPageSize = payload => ({ type: SET_PAGE_SIZE, payload })
export const setItemsCount = payload => ({ type: SET_ITEMS_COUNT, payload })
export const setError = payload => ({ type: SET_ERROR, payload })
export const toggleIsFetching = payload => ({ type: TOGGLE_IS_FETCHING, payload })
export const setSelectedId = payload => ({ type: SET_SELECTED_ID, payload })
export const setFilter = payload => ({ type: SET_FILTER, payload })
export const setIsLarge = payload => ({ type: SET_IS_LARGE, payload })
/* thunks */
export const getUsers = isLarge => async dispatch => {
  const getUsersFromAPI = isLarge ? getLarge : getSmall
  dispatch(toggleIsFetching(true))
  try {
    const availableIds = []
    const usersResponse = await getUsersFromAPI()
    const users = usersResponse.filter(u =>
      availableIds.includes(u.id) ? false : availableIds.push(u.id)
    )
    dispatch(setUsers(users))
    dispatch(setPage(1))
    dispatch(setItemsCount(users.length))
  } catch (e) {
    dispatch(setError())
  } finally {
    dispatch(toggleIsFetching(false))
  }
}

export const userSchema = PropTypes.shape({
  id: PropTypes.number.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  address: PropTypes.shape({
    streetAddress: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zip: PropTypes.string,
  }),
  description: PropTypes.string,
})
