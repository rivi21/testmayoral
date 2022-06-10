import Card from "./Card"

const Collection = ({props}:any) => {
  /* console.log(props.users) */
  return (
    <div>
      <ul>
        {props.users.map(user => {
            <Card key={user.id} user={user} />
        })}
      </ul>
    </div>
    
  )
}

export default Collection