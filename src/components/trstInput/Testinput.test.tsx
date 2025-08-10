import userEvent from '@testing-library/user-event'
import TestInput from './TextInput'
import { render, screen } from '@testing-library/react'

test('TextInput Text', async () => {
  const user = userEvent.setup()
  render(<TestInput />)

  const textElement = screen.getByText('入力した文字：')
  expect(textElement).toBeInTheDocument()

  const inputElement = screen.getByLabelText('Text Input')
  await user.type(inputElement, 'Hello world')
  expect(screen.getByText('入力した文字：Hello world')).toBeInTheDocument()
})
