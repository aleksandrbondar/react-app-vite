import { useState } from 'react'
import './Button.css'

interface ButtonProps {
  text: string
  type: "submit" | "reset" | "button" | undefined
  number?: number
  disabled?: boolean
}
function Button(props: ButtonProps): JSX.Element {
  const { text, type, number, disabled } = props
  const [count, setCount] = useState(number ?? 0)

  return (
    <>
      <div>
        <button type={type} className='button' disabled={disabled ?? false} onClick={() => setCount((count) => count + 1)}>
          {text}{count}
        </button>
      </div>
    </>
  )
}

export default Button