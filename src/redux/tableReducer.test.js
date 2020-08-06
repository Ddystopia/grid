import {
  tableReducer,
  setUsers,
  addUser,
  setSortBy,
  setSortIsDesc,
  setPage,
  setPageSize,
  setItemsCount,
  toggleIsFetching,
  setError,
} from './tableReducer'
import { inversions } from '../utils/inversions'

const state = {
  users: [],
  sortBy: 'id',
  sortIsDesc: false,
  page: 1,
  pageSize: 20,
  itemsCount: 0,
  isFetching: false,
  hasError: false,
}
/* has error test */
test('hasError should be true', () => {
  const action = setError()
  const newState = tableReducer(state, action)
  expect(newState.hasError).toBe(true)
})
/* Toggle is fetching tests*/
test('is fetching should be true', () => {
  const action = toggleIsFetching(true)
  const newState = tableReducer(state, action)
  expect(newState.isFetching).toBe(true)
})
test('is fetching should be false', () => {
  const action = toggleIsFetching(false)
  const newState = tableReducer(state, action)
  expect(newState.isFetching).toBe(false)
})
/* pagination tests */
test('page should sets correctly', () => {
  const action = setPage(5)
  const newState = tableReducer(state, action)
  expect(newState.page).toBe(5)
})
test('pageSize should sets correctly', () => {
  const action = setPageSize(5)
  const newState = tableReducer(state, action)
  expect(newState.pageSize).toBe(5)
})
test('itemsCount should sets correctly', () => {
  const action = setItemsCount(5)
  const newState = tableReducer(state, action)
  expect(newState.itemsCount).toBe(5)
})
/* users data tests */
test('users should sets correctly', () => {
  const action = setUsers([{}, {}, {}])
  const newState = tableReducer(state, action)
  expect(newState.users.length).toBe(3)
})
test('user should adds correctly', () => {
  const action = addUser({})
  const newState = tableReducer(state, action)
  expect(newState.users.length).toBe(1)
})
test('sortBy should sets correctly', () => {
  const action = setSortBy('email')
  const newState = tableReducer(state, action)
  expect(newState.sortBy).toBe('email')
})
test('sortIsDesc should adds correctly', () => {
  const action = setSortIsDesc(true)
  const newState = tableReducer(state, action)
  expect(newState.sortIsDesc).toBe(true)
})
/* inversions tests */
test('check inversions with asc numbers', () => expect(inversions([0, 1, 2, 3])).toBe(0))
test('check inversions with desc numbers', () => expect(inversions([3, 2, 1, 0])).toBe(6))
test('check inversions with asc strings', () => expect(inversions(['a', 'b', 'c', 'd'])).toBe(0))
test('check inversions with desc strings', () => expect(inversions(['d', 'c', 'b', 'a'])).toBe(6))
/* sort tests */
test('sort asc by id', () => {
  const state = {
    users: [{ id: 3 }, { id: 1 }, { id: 0 }, { id: 2 }],
    sortBy: 'id',
    sortIsDesc: true,
  }
  const action = setSortIsDesc(false)
  const newState = tableReducer(state, action)
  const usersInversions = inversions(newState.users.map(u => u.id))
  expect(usersInversions).toBe(0)
})
test('sort desc by id', () => {
  const state = {
    users: [{ id: 3 }, { id: 1 }, { id: 0 }, { id: 2 }],
    sortBy: 'id',
    sortIsDesc: false,
  }
  const action = setSortIsDesc(true)
  const newState = tableReducer(state, action)
  const usersInversions = inversions(newState.users.map(u => u.id))
  expect(usersInversions).toBe(6)
})
test('sort asc by email', () => {
  const state = {
    users: [{ email: 'bb@aa.d' }, { email: 'aa@aa.d' }, { email: 'cc@aa.d' }, { email: 'aa@aa.d' }],
    sortBy: 'email',
    sortIsDesc: true,
  }
  const action = setSortIsDesc(false)
  const newState = tableReducer(state, action)
  const usersInversions = inversions(newState.users.map(u => u.email))
  expect(usersInversions).toBe(0)
})
test('sort desc by email', () => {
  const state = {
    users: [{ email: 'bb@aa.d' }, { email: 'aa@aa.d' }, { email: 'cc@aa.d' }, { email: 'aa@aa.d' }],
    sortBy: 'email',
    sortIsDesc: false,
  }
  const action = setSortIsDesc(true)
  const newState = tableReducer(state, action)
  const usersInversions = inversions(newState.users.map(u => u.email))
  expect(usersInversions).toBe(6)
})
