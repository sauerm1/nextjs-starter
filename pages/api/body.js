export default function handler(req, res) {
  setTimeout(() => res.status(200).json({ body: req.body.input }), 1000);
}
