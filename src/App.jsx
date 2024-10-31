
import './App.css'
import Grandpa from './Components/Grandpa/Grandpa'
// import ReUsableForm from './Components/ReUsableForm/ReUsableForm'
// import Hookform from './Components/HookForm/Hookform'
// import RefForm from './Components/RefForm/RefForm'
// import SimpleForm from './Components/Simple/SimpleForm'
// import StateFullForm from './Components/StatefullForm/StateFullForm'

function App() {

  // const handleSignUp = (data) => {
  //   console.log(data);

  // }

  // const handleUpdate = (data) => {
  //   console.log(data);
  // }

  return (
    <>

      <h1>Form Master</h1>
      <Grandpa></Grandpa>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFullForm></StateFullForm> */}
      {/* <RefForm></RefForm> */}
      {/* <Hookform></Hookform> */}
      {/* <ReUsableForm handleSubmit={handleSignUp} formTitle={'Sign Up'}>
        <div>
          <h2>Sign Up</h2>
          <p>Please sign up right now</p>
        </div>
      </ReUsableForm>
      <ReUsableForm handleSubmit={handleUpdate} formTitle={'Profile Update'} submitBtn='Update'>
        <div>
          <h2>Update Profile</h2>
          <p>always keep your profile update</p>
        </div>
      </ReUsableForm> */}
    </>
  )
}

export default App
