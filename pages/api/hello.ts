// Next.js API route example
import type { NextApiRequest, NextApiResponse } from 'next'

interface ApiResponse {
  name: string
  version: string
  message: string
  endpoints: Record<string, string>
  timestamp: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<ApiResponse>) {
  try {
    // Log the request for debugging
    console.log(`API request to /api/hello - Method: ${req.method}, IP: ${req.headers['x-forwarded-for'] || req.connection.remoteAddress}`)

    // Only allow GET requests
    if (req.method !== 'GET') {
      return res.status(405).json({
        error: 'Method Not Allowed',
        message: 'Only GET method is allowed for this endpoint',
      })
    }

    // Prepare response data
    const responseData: ApiResponse = {
      name: 'Cards API',
      version: '1.0.0',
      message: 'Welcome to the Cards API',
      endpoints: {
        '/api/cards': 'Get all cards',
        '/api/collections': 'Get card collections',
        '/api/templates': 'Get available templates',
        '/api/users': 'User management',
      },
      timestamp: new Date().toISOString(),
    }

    // Set cache control headers for better performance
    res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=600')
    res.setHeader('Content-Type', 'application/json')

    // Send successful response
    res.status(200).json(responseData)
  } catch (error) {
    console.error('Error in /api/hello:', error)

    // Return error response
    res.status(500).json({
      name: 'Cards API',
      version: '1.0.0',
      message: 'Internal Server Error',
      endpoints: {},
      timestamp: new Date().toISOString(),
    })
  }
}