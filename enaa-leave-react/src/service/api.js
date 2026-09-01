const API_URL = "http://127.0.0.1:8000/api";

export const loginUser = async (email, password) => {
    const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email,
            password,
        }),
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Erreur de connexion");
    }

    const user = data.user ?? {
        name: data.name || data.email || "Utilisateur",
        email: data.email || email,
        role: data.role || "Employé",
    };

    localStorage.setItem("token", data.token);

    localStorage.setItem("user", JSON.stringify(user));

    return {
        ...data,
        user,
    };
};