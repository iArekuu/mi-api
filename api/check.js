export default function handler(req, res) {
  const VALID_KEYS = [
    "KRY-7XQ9-VELTRIX-92A1"
  ];
  
  const key = req.query.key;
  const isValid = key && VALID_KEYS.includes(key);
  res.json({ valid: isValid });
}
