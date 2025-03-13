type UserProps = {
  data : {
    name : string ,
    email: string,
  }
  updateFieldHandler: (key:string, value:string) => void;
}

const UserForm = ({data, updateFieldHandler} : UserProps) => {
  return (
    <div>
      <div className="form-control">
        <label htmlFor="name">Nome:</label>
        <input 
        type="text" 
        name='name'
        id='name'
        placeholder='Digite seu nome'
        value={data.name || ""}
        onChange={(event) => updateFieldHandler("name", event.target.value)}
        required  />
        <label htmlFor="email">Email:</label>
        
        <input 
        type="email" 
        name='email'
        id='email'
        placeholder='Digite seu email'
        value={data.email || ""}
        onChange={(event) => updateFieldHandler("email", event.target.value)}
        required  />
        
  
      </div>
    </div>
  )
}

export default UserForm