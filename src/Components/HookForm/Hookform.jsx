import useInputState from "../Hooks/useInputState";


const Hookform = () => {
    // const [name, handleNameChange] = useInputState('')
    const emailState = useInputState('')

    const handleSubmit =(e)=>{
        console.log(emailState.value);
        e.preventDefault()
    }
    return (
        <div>
             <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleNameChange} type="text" name="name" /> */}
                <br />
                <input {...emailState} type="email" name="email" id="" />
                <br />
                <input type="password" name="password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Hookform;