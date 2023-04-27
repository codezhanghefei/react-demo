import { useSelector, useDispatch } from 'react-redux'
import { add,subtract, multiply, divide } from '../../stores/calculator';
import { Button, InputNumber } from 'antd';
import { useState } from 'react';

const Calculator = () => {
  const result = useSelector((state: any) => state.calculator.value);
  const [value, setValue] = useState(0);

  const dispatch = useDispatch()

  return (
    <div>
      <div style={{ width: 200 }}>
        <InputNumber value={value} onChange={(val) => setValue(val || 0)} />
      </div>
      <div>
        <Button onClick={() => dispatch(add(value))}>加</Button>
        <Button onClick={() => dispatch(subtract(value))}>减</Button>
        <Button onClick={() => dispatch(multiply(value))}>乘</Button>
        <Button onClick={() => dispatch(divide(value))}>除</Button>
      </div>
      <div>{result}</div>
    </div>
  )
}

export default Calculator;
