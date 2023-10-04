const LogInForm = ({}) => {

  return (
    <> 
      <p>Log in here:</p>
      <form>   
        <input placeholder="Email address" type="text"/>
        <input placeholder="Username" type="text"/>
        <input placeholder="Password" type="password"/>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default LogInForm;