export default function handler(req, res) {
  console.log(req.body)

  setTimeout(() => 
  res.status(200).json({ "body": req.body.input })
  , 1000);
}
