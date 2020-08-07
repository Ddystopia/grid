import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import classNames from './Main.module.css'
import { SelectData } from './SelectData/SelectData'
import { Form } from './Form/Form'
import { Table } from './Table/Table'
import { Pagination } from './Pagination/Pagination'
import { connect } from 'react-redux'
import { getUsers, addUser, setPage, userSchema } from '../../redux/tableReducer'
import {
  getPageSize,
  getPage,
  getUsersSelector,
  getIsLarge,
  getFilteredUsersCount,
} from '../../redux/selectors'

const MainComponent = ({
  users,
  pageSize,
  page,
  itemsCount,
  setPage,
  getUsers,
  addUser,
  isLarge,
}) => {
  useEffect(() => {
    isLarge !== null && getUsers(isLarge)
  }, [getUsers, isLarge])

  const changePage = page => setPage(page)
  return (
    <main className={classNames.main}>
      <section className={classNames.navigate}>
        <Form addUser={addUser} />
        <SelectData />
      </section>
      <section className={classNames.tableSection}>
        <Table users={users} />
        <Pagination
          itemsCount={itemsCount}
          pageSize={pageSize}
          page={page}
          changePage={changePage}
        />
      </section>
    </main>
  )
}
MainComponent.propTypes = {
  users: PropTypes.arrayOf(userSchema),
  pageSize: PropTypes.number,
  page: PropTypes.number,
  itemsCount: PropTypes.number,
  isLarge: PropTypes.bool,
  setPage: PropTypes.func,
  getUsers: PropTypes.func,
  addUser: PropTypes.func,
}

const mapStateToProps = state => ({
  users: getUsersSelector(state),
  pageSize: getPageSize(state),
  page: getPage(state),
  itemsCount: getFilteredUsersCount(state),
  isLarge: getIsLarge(state),
})
export const Main = connect(mapStateToProps, { setPage, getUsers, addUser })(MainComponent)
