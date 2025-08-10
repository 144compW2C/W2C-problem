import { useState } from 'react'

export default function TestInput() {
  const [text, setText] = useState('')

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        aria-label="Text Input"
      />
      <p>入力した文字：{text}</p>
    </div>
  )
}
