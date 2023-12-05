import { Checkbox } from 'antd';


const CheckToDo = (props) => {
    return (<Checkbox id={props.id} onChange={props.onChange}>{props.text}</Checkbox>);
}

export default CheckToDo;