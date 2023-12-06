import { Checkbox } from 'antd';


const CheckToDo = (props) => {
    return (<Checkbox className='check-box' id={props.id} onChange={props.onChange}>{props.text}</Checkbox>);
}

export default CheckToDo;