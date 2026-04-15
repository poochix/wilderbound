// API Helper

const BASE_URL = "http://localhost:8000"; // Python backend URL

export async function getExperiences() {
  const res = await fetch(`${BASE_URL}/api/experiences`, {
    cache: "no-store",
  });
  return res.json();
}