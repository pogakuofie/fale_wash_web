export default function handler(req, res) {
  res.status(200).json([
    { item: "top", price: 400 },
    { item: "shirt", price: 600 },
    { item: "trouser", price: 500 },
  ]);
}
