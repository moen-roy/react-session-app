function ComponentE(){
    return (
        <div className="component componentE">
            <Cards text1= "+254" text2= "Kenya line" />
            <Cards text1= "+256" text2= "Uganda line" />
        </div>
    )
    
}
function Cards (props){
        const {text1, text2, text3} = props;

        return (
            <div
               
            >
                <p>{text1} </p>
                <p>{text2} </p>
            </div>
        )
    }
export default ComponentE;