"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = (0, express_1.Router)();
// 1. POST /api/contact
router.post('/contact', function (req, res) {
    var _a = req.body, firstName = _a.firstName, lastName = _a.lastName, email = _a.email, message = _a.message;
    if (!firstName || !lastName || !email || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    // In a real app, save to database here.
    res.status(201).json({ message: 'Inquiry submitted successfully' });
});
// 2. GET /api/content
router.get('/content', function (req, res) {
    var _a = req.query, type = _a.type, _b = _a.limit, limit = _b === void 0 ? 10 : _b, _c = _a.offset, offset = _c === void 0 ? 0 : _c, search = _a.search;
    // Mock response
    res.status(200).json({ data: [], totalCount: 0 });
});
// 3. GET /api/content/:slug
router.get('/content/:slug', function (req, res) {
    var slug = req.params.slug;
    // Mock response
    res.status(200).json({ id: 1, title: 'Sample Post', slug: slug });
});
// 4. GET /api/testimonials
router.get('/testimonials', function (req, res) {
    // Mock response
    res.status(200).json([{ id: 1, client_name: 'Jane Doe', quote: 'Great service!' }]);
});
// 5. GET /api/team-members
router.get('/team-members', function (req, res) {
    // Mock response
    res.status(200).json([{ id: 1, name: 'Lida Citroën', title: 'CEO' }]);
});
exports.default = router;
