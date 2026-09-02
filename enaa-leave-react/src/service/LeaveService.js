const API_URL = "http://127.0.0.1:8000/api/soldes-conges";
export const getSoldes = async () => {
  const token = localStorage.getItem("token");

  const response = await fetch(API_URL, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Erreur lors de la récupération des soldes");
  }

  return response.json();
};
