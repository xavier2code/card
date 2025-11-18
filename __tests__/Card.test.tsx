import { render, screen, fireEvent } from '@testing-library/react'
import Card from '../components/Card'

describe('Card Component', () => {
  it('renders with title and description', () => {
    render(
      <Card
        title="Test Title"
        description="Test Description"
      />
    )

    expect(screen.getByText('Test Title')).toBeInTheDocument()
    expect(screen.getByText('Test Description')).toBeInTheDocument()
  })

  it('calls onClick when clicked', () => {
    const mockOnClick = jest.fn()
    render(
      <Card
        title="Test Title"
        description="Test Description"
        onClick={mockOnClick}
      />
    )

    const card = screen.getByRole('button')
    fireEvent.click(card)
    expect(mockOnClick).toHaveBeenCalledTimes(1)
  })

  it('renders as link when href is provided', () => {
    render(
      <Card
        title="Test Title"
        description="Test Description"
        href="/test"
      />
    )

    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/test')
  })

  it('has proper accessibility attributes when clickable', () => {
    const mockOnClick = jest.fn()
    render(
      <Card
        title="Test Title"
        description="Test Description"
        onClick={mockOnClick}
      />
    )

    const card = screen.getByRole('button')
    expect(card).toHaveAttribute('tabIndex', '0')
  })

  it('applies highlight variant classes', () => {
    render(
      <Card
        title="Test Title"
        description="Test Description"
        variant="highlight"
      />
    )

    const card = screen.getByRole('button')
    expect(card).toHaveClass('card-highlight')
  })
})