import { Checkbox } from 'antd';


const CheckToDo = (props) => {
    return (<Checkbox>{props.text}</Checkbox>);
}

export default CheckToDo;