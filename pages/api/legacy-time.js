export default function handler(req, res) {
  res.status(200).json({
    source: 'pages/api route',
    now: new Date().toISOString(),
    method: req.method
  });
}
