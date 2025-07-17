import ComponentBased from './ComponentBased';
import ComponentC from './ComponentC';
function ComponentA(){
    return (
        <div className='component'>
              <h1>My project</h1>
            <ComponentBased />
             <ComponentC />
            
        </div>
    )
}
export default ComponentA;