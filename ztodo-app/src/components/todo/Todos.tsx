import AppCard from '../app/AppCard'
import TodoList from './TodoList'

type Props = {}

export default function Todos({ }: Props) {
  return (
    <>
      <AppCard className='todosWrapper'>
        <TodoList />
      </AppCard>
    </>
  )
}