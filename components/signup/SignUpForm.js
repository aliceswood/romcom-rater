const SignUpForm = ({}) => {

  return (
    <> 
      <form>   
        <input placeholder="Name" type="text"/>
        <input placeholder="Email address" type="text"/>
        <input placeholder="Username" type="text"/>
        <input placeholder="Password" type="password"/>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default SignUpForm;