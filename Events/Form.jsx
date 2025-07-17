function Form(){
    const getNameValue= (e)=>{
        console.log(e.target.value);
    };
    const blur= (e)=>{
         console.log(e.target.value);
    }
    return (
        <div>
            <div>
                <label>Name</label>
                <input onChange={getNameValue} type="text" placeholder="Enter your name here"/>
                <labele>Email</labele>
                <input onBlur={blur} type="email" placeholder="Enter your email here" />
                <labele>User Name</labele>
                <input type="text" placeholder="What will tyour user name be?" />
                <lable>phone number</lable>
                <input type="number" placeholder="How can we reach you?" />
            </div>
        </div>
    )
} export default Form;