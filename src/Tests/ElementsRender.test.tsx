import {Switch} from '../Components/Switch'
import { create } from 'react-test-renderer'
import {Input} from "../Components/Elements/Input";
import {Button} from "../Components/Elements/Button";
import {Textarea} from "../Components/Elements/Textarea";


test("Should return input React element", () => {
    const obj =  {label: "Text", 'type': 'text'}
    const instance = create(<Switch fields={obj} index={0}/>)
    // eslint-disable-next-line testing-library/await-async-query
    const element =  instance.root.findByType(Input)
    expect(element).toBeTruthy()
})

test("Should return button React element", () => {
    const obj =  {label: "button", 'type': 'button'}
    const instance = create(<Switch fields={obj} index={0}/>)
    // eslint-disable-next-line testing-library/await-async-query
    const element =  instance.root.findByType(Button)
    expect(element).toBeTruthy()
})

test("Should return textarea React element", () => {
    const obj =  {label: "Text", 'type': 'textarea'}
    const instance = create(<Switch fields={obj} index={0}/>)
    // eslint-disable-next-line testing-library/await-async-query
    const element =  instance.root.findByType(Textarea)
    expect(element).toBeTruthy()
})
