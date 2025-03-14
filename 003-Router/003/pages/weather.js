import React, { useState } from "react";

const weatherDescriptions = {
    0: "Cerah", 1: "Sebagian cerah", 2: "Berawan sedikit", 3: "Berawan",
    45: "Kabut", 48: "Kabut beku", 51: "Gerimis ringan", 53: "Gerimis sedang",
    55: "Gerimis lebat", 61: "Hujan ringan", 63: "Hujan sedang", 65: "Hujan lebat",
    80: "Hujan lokal ringan", 81: "Hujan lokal sedang", 82: "Hujan lokal lebat",
    95: "Badai petir ringan", 96: "Badai petir dengan hujan es", 99: "Badai petir dengan hujan es",
};

const Weather = () => {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchWeather = async () => {
        setLoading(true);
        setError(null);
        
        try {
            // 1. Cari koordinat kota dari API Geocoding
            const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`);
            const geoData = await geoRes.json();
            
            if (!geoData.results || geoData.results.length === 0) {
                setError("Kota tidak ditemukan");
                setLoading(false);
                return;
            }

            const { latitude, longitude } = geoData.results[0];

            // 2. Gunakan koordinat untuk mendapatkan data cuaca
            const weatherRes = await fetch(
                `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
            );
            const weatherData = await weatherRes.json();

            setWeather({
                temperature: weatherData.current_weather.temperature,
                windspeed: weatherData.current_weather.windspeed,
                weathercode: weatherData.current_weather.weathercode,
            });
        } catch (err) {
            setError("Gagal mengambil data cuaca");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>Cek Cuaca</h1>
            <input
                type="text"
                placeholder="Masukkan nama kota"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                style={{
                    padding: "10px",
                    margin: "10px 0",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    width: "200px",
                }}
            />
            <button 
                onClick={fetchWeather}
                style={{
                    padding: "10px 15px",
                    marginLeft: "10px",
                    borderRadius: "5px",
                    backgroundColor: "#007bff",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                }}
            >
                Cek Cuaca
            </button>

            {loading && <p>Memuat data...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}

            {weather && (
                <div style={{
                    marginTop: "20px",
                    padding: "15px",
                    borderRadius: "8px",
                    backgroundColor: "#f3f3f3",
                    display: "inline-block",
                    textAlign: "left",
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                }}>
                    <h2 style={{ margin: "0 0 10px 0" }}>Cuaca di {city}</h2>
                    <p><strong>Suhu:</strong> {weather.temperature}°C</p>
                    <p><strong>Kecepatan Angin:</strong> {weather.windspeed} km/jam</p>
                    <p><strong>Kondisi:</strong> {weatherDescriptions[weather.weathercode] || "Tidak diketahui"}</p>
                </div>
            )}
        </div>
    );
};

export default Weather;
