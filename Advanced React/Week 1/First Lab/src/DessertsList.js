function DessertsList(props) {
  const data=props.data
  const FilterSort = data.filter((a) => a.calories < 500
  ).sort((a,b) => a.calories - b.calories)

  const DessertMap = FilterSort.map( (DessertItem) => {
    return (<li> 
      {DessertItem.name} - {DessertItem.calories} cal
      </li>)
  })
  return(
    <ul>{DessertMap}</ul> 
  )

}

export default DessertsList;
