app.sortByIdentifier = (array) => array.sort((first, second) => {
  const a = first.identifier.toUpperCase()
  const b = second.identifier.toUpperCase()
  return (a < b) ? -1 : (a > b) ? 1 : 0
})
