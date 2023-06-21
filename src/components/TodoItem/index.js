// Write your code here
const TodoItem = props => {
  const {textDetails, deleteItem} = props
  const {id, title} = textDetails

  const onDelete = () => {
    deleteItem(id)
  }

  return (
    <li>
      <p>{title}</p>
      <button type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
