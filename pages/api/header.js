export default function handler(req, res) {
  setTimeout(() => 
  res.status(200).json({ "header": "This Header Was Returned From An API" })
  , 1000);
}
