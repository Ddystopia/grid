export const inversions = arr =>
  arr
    .map(
      (y, i) =>
        arr.slice(i + 1).filter(x => {
          return typeof x === 'string' ? y.localeCompare(x) > 0 : y > x
        }).length
    )
    .reduce((a, b) => a + b, 0)
