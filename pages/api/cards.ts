import type { NextApiRequest, NextApiResponse } from 'next'

export interface CardData {
  id: string
  title: string
  description: string
  category: string
  createdAt: string
  updatedAt: string
  imageUrl?: string
}

// Mock data - in a real app, this would come from a database
const mockCards: CardData[] = [
  {
    id: '1',
    title: 'Birthday Card',
    description: 'A beautiful birthday card with colorful balloons and confetti',
    category: 'birthday',
    createdAt: '2023-11-18T10:00:00Z',
    updatedAt: '2023-11-18T10:00:00Z',
    imageUrl: '/images/birthday-card.jpg',
  },
  {
    id: '2',
    title: 'Thank You Card',
    description: 'Elegant thank you card with floral design',
    category: 'thank-you',
    createdAt: '2023-11-18T10:00:00Z',
    updatedAt: '2023-11-18T10:00:00Z',
    imageUrl: '/images/thank-you-card.jpg',
  },
  {
    id: '3',
    title: 'Congratulations Card',
    description: 'Celebrate achievements with this congratulatory card',
    category: 'congratulations',
    createdAt: '2023-11-18T10:00:00Z',
    updatedAt: '2023-11-18T10:00:00Z',
    imageUrl: '/images/congrats-card.jpg',
  },
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    console.log(`API request to /api/cards - Method: ${req.method}`)

    switch (req.method) {
      case 'GET':
        return handleGetCards(req, res)
      case 'POST':
        return handleCreateCard(req, res)
      default:
        return res.status(405).json({
          error: 'Method Not Allowed',
          message: 'Only GET and POST methods are allowed for this endpoint',
        })
    }
  } catch (error) {
    console.error('Error in /api/cards:', error)
    res.status(500).json({
      error: 'Internal Server Error',
      message: 'An unexpected error occurred',
    })
  }
}

function handleGetCards(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { category, limit } = req.query

    let filteredCards = mockCards

    // Filter by category if provided
    if (category && typeof category === 'string') {
      filteredCards = mockCards.filter(card => card.category === category)
    }

    // Limit results if specified
    if (limit && !isNaN(Number(limit))) {
      filteredCards = filteredCards.slice(0, Number(limit))
    }

    // Set cache control headers
    res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=600')

    res.status(200).json({
      success: true,
      data: filteredCards,
      count: filteredCards.length,
      total: mockCards.length,
    })
  } catch (error) {
    console.error('Error in GET /api/cards:', error)
    res.status(500).json({
      error: 'Internal Server Error',
      message: 'Failed to retrieve cards',
    })
  }
}

function handleCreateCard(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { title, description, category } = req.body

    // Basic validation
    if (!title || !description || !category) {
      return res.status(400).json({
        error: 'Bad Request',
        message: 'Title, description, and category are required',
      })
    }

    // Create new card
    const newCard: CardData = {
      id: String(mockCards.length + 1),
      title: title.trim(),
      description: description.trim(),
      category: category.trim(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    // In a real app, you would save this to a database
    mockCards.push(newCard)

    res.status(201).json({
      success: true,
      data: newCard,
      message: 'Card created successfully',
    })
  } catch (error) {
    console.error('Error in POST /api/cards:', error)
    res.status(500).json({
      error: 'Internal Server Error',
      message: 'Failed to create card',
    })
  }
}