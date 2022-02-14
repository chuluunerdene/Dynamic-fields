import {Switch} from '../Components/Switch'
import { create } from 'react-test-renderer'
import {Input} from "../Components/Elements/Input";
import {Button} from "../Components/Elements/Button";
import {Textarea} from "../Components/Elements/Textarea";


let types = ['text', 'textarea', 'button']


test("Should return input React element", async () => {
    const obj =  {label: "", 'type': types[0]}
    const instance = create(<Switch fields={obj} index={0}/>)
    const element =  await instance.root.findByType(Input)
    expect(element).toBeTruthy()
})

test("Should return button React element", async() => {
    const obj =  {label: "", 'type': types[2]}
    const instance = create(<Switch fields={obj} index={0}/>)
    const element =  await instance.root.findByType(Button)
    expect(element).toBeTruthy()
})

test("Should return textarea React element", async() => {
    const obj =  {label: "", 'type': types[1]}
    const instance = create(<Switch fields={obj} index={0}/>)
    const element = await instance.root.findByType(Textarea)
    expect(element).toBeTruthy()
})
