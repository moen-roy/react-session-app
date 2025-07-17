function Button(){
    
    const printDate = () => {
        let date = new Date();
        console.log(date)
    };
    const clicked = () => {
        console.log("Button clicked!");
    };
    const AlertTime = () => {
         let date = new Date();
        console.log(date)       

       alert (`todays date is ${date}`);
    };
        return(
        <div>
            <p>
                <button onClick={clicked}>Click me</button>
            </p>
            <p>
                <button onClick={printDate}>Print Date</button>
            </p>
            <p>
                <button onClick={AlertTime}>Alert Time</button>
            </p>
        </div>
    )

}export default Button;