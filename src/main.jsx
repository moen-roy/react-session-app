import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Default exports
import Component from './Exports/TestComponent'
import Chug from  './Exports/Sample'

// Named exports
import {Content1, Content2, Content3} from './Exports/Named'
import { DisplayCon1, DisplayCon2, DisplayCon3 } from './Exports/Named2'
import FinalComponents from '../MiniProject'
// combined export
import Second, {C1,C3} from './Combined'

import '../style/main.css'

import Buttons from '../Events/Btns'
import Form from '../Events/Form'
import State from '../Hooks/State/SimpleState'

import SimpleState2 from '../Hooks/State/SimpleState2'
import FormState from '../Hooks/State/FormState'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FinalComponents />
    <Buttons />
    <Form />
    <State /> 
    <SimpleState2 />
    <FormState />
    {/* <div>
  <h1>Hello!</h1>
  <p>Welcome to my application. How can i be of assistant?</p>
  <label> Type here please </label>
  <input type="text" placeholder='Description'/>
  </div>
   
    <Component />   
    <Chug />
    <Content1 />
    <Content2 />
    <Content3 />
    <DisplayCon1 />
    <DisplayCon2 />
    <DisplayCon3 />
      <C1 />
    <Second />
      <C3 /> */}
     </StrictMode>,
);

