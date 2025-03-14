export default async function handler(req, res) {
    const lat = req.query.lat || "-7.9839"; // Default: Malang
    const lon = req.query.lon || "112.6213";
    
    const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
    
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "Gagal mengambil data cuaca" });
    }
}
