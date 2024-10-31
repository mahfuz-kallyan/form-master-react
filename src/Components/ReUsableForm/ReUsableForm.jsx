

const ReUsableForm = ({formTitle, handleSubmit, submitBtn= 'Submit', children}) => {

const handleLocalSubmit = (e)=>{
    e.preventDefault();
    const data ={
        name: e.target.name.value,
        password: e.target.password.value,
        email: e.target.email.value
    }
    handleSubmit(data)
}    
    return (
        <div>
            {children}
            <form onSubmit={handleLocalSubmit}>
                <input type="text" name="name" />
                <br />
                <input type="email" name="email" id="" />
                <br />
                <input type="password" name="password" />
                <br />
                <input type="submit" value={submitBtn} />
            </form>
        </div>
    );
};

export default ReUsableForm;