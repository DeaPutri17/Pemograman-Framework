import React, { useState, useEffect } from "react";

const weatherDescriptions = {
    0: "Cerah",
    1: "Sebagian cerah",
    2: "Berawan sedikit",
    3: "Berawan",
    45: "Kabut",
    48: "Kabut beku",
    51: "Gerimis ringan",
    53: "Gerimis sedang",
    55: "Gerimis lebat",
    61: "Hujan ringan",
    63: "Hujan sedang",
    65: "Hujan lebat",
    71: "Salju ringan",
    73: "Salju sedang",
    75: "Salju lebat",
    80: "Hujan lokal ringan",
    81: "Hujan lokal sedang",
    82: "Hujan lokal lebat",
    95: "Badai petir ringan",
    96: "Badai petir dengan hujan es",
    99: "Badai petir dengan hujan es",
};

const Weather = () => {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await fetch("/api/weather");
                const data = await response.json();
                setWeather(data.current_weather);
            } catch (error) {
                console.error("Gagal mengambil data cuaca", error);
            }
        };

        fetchWeather();
    }, []);

    return (
        <div>
            <h1>Cuaca Saat Ini di Malang</h1>
            {weather ? (
                <div>
                    <p><strong>Suhu:</strong> {weather.temperature}°C</p>
                    <p><strong>Kecepatan Angin:</strong> {weather.windspeed} km/jam</p>
                    <p><strong>Kondisi:</strong> {weatherDescriptions[weather.weathercode] || "Tidak diketahui"}</p>
                </div>
            ) : (
                <p>Memuat data cuaca...</p>
            )}
        </div>
    );
};

export default Weather;
