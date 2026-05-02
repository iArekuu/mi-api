export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
 
  const VALID_KEYS = [
    "KRY-7XQ9-VELTRIX-92A1"
  ];
 
  const key = req.query.key || "";
  const isValid = VALID_KEYS.includes(key.trim());
  res.status(200).json({ valid: isValid });
}
