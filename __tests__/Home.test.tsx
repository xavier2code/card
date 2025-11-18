import { render, screen } from '@testing-library/react'
import Home from '../pages/index'

// Mock the Card component
jest.mock('../components/Card', () => ({
  __esModule: true,
  default: ({ title, description }: { title: string; description: string }) => (
    <div data-testid="mock-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  ),
}))

describe('Home', () => {
  it('renders the main heading', () => {
    render(<Home />)
    const heading = screen.getByText(/Welcome to Cards/i)
    expect(heading).toBeInTheDocument()
  })

  it('renders the description text', () => {
    render(<Home />)
    const description = screen.getByText(/Get started by creating your first card collection/i)
    expect(description).toBeInTheDocument()
  })

  it('renders all main sections', () => {
    render(<Home />)
    const createCardLink = screen.getByText(/Create Cards/i)
    const manageCollectionsLink = screen.getByText(/Manage Collections/i)
    const shareLink = screen.getByText(/Share/i)
    const templatesLink = screen.getByText(/Templates/i)

    expect(createCardLink).toBeInTheDocument()
    expect(manageCollectionsLink).toBeInTheDocument()
    expect(shareLink).toBeInTheDocument()
    expect(templatesLink).toBeInTheDocument()
  })

  it('has proper accessibility attributes', () => {
    render(<Home />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
  })
})