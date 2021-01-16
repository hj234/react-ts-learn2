import React from "react"
import { Button } from "antd"
interface Greeting {
  name: string
  firstName?: string
  lastName?: string
}

const Hello = (props: Greeting) => <Button>Hello {props.name}</Button>

// 函数组件
// const Hello: React.FC<Greeting> = ({
//     name,
//     firstName,
//     lastName,
// }) => <Button>{name}</Button>

Hello.defaultProps = {
  firstName: "",
  lastName: "",
}

export default Hello