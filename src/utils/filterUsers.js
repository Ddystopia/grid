export const filterUsers = (users, filter, headers) =>
  users.filter(u =>
    Object.entries(u)
      .filter(([key]) => headers.includes(key))
      .map(([, val]) => val)
      .some(row => new RegExp(filter, 'i').test(row))
  )
