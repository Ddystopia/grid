import React from 'react'
import classNames from './Main.module.css'
import { Table } from './Table/Table'
import { Pagination } from './Pagination/Pagination'
import { UserInfo } from './UserInfo/UserInfo'

export const Main = () => {
  return (
    <main className={classNames.main}>
      <section className={classNames.tableSection}>
        <Table users sortIsDesc sortBy />
        <Pagination itemsCount pageSize page changePage />
      </section>
      <UserInfo selectedId />
    </main>
  )
}
