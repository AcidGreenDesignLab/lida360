import { Router, Request, Response } from 'express';

const router = Router();

// 1. POST /api/contact
router.post('/contact', (req: Request, res: Response) => {
  const { firstName, lastName, email, message } = req.body;
  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  // In a real app, save to database here.
  res.status(201).json({ message: 'Inquiry submitted successfully' });
});

// 2. GET /api/content
router.get('/content', (req: Request, res: Response) => {
  const { type, limit = 10, offset = 0, search } = req.query;
  // Mock response
  res.status(200).json({ data: [], totalCount: 0 });
});

// 3. GET /api/content/:slug
router.get('/content/:slug', (req: Request, res: Response) => {
  const { slug } = req.params;
  // Mock response
  res.status(200).json({ id: 1, title: 'Sample Post', slug });
});

// 4. GET /api/testimonials
router.get('/testimonials', (req: Request, res: Response) => {
  // Mock response
  res.status(200).json([{ id: 1, client_name: 'Jane Doe', quote: 'Great service!' }]);
});

// 5. GET /api/team-members
router.get('/team-members', (req: Request, res: Response) => {
  // Mock response
  res.status(200).json([{ id: 1, name: 'Lida Citroën', title: 'CEO' }]);
});

export default router;