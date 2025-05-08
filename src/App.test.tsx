import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

test('按鈕點擊後出現文字', () => {
  render(<App />)
  const btn = screen.getByText(/點我/i)
  fireEvent.click(btn)
  expect(screen.getByText(/你點了按鈕/i)).toBeInTheDocument()
})