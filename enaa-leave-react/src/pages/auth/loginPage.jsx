import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../service/api"

export default function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const data = await loginUser(email, password);
      console.log("LOGIN :", data);
      const user = data.user;

switch (user.role) {
    case "employe":
      navigate("/employee/dashboard", { replace: true });
        break;

    case "manager":
      navigate("/manager/dashboard", { replace: true });
        break;

    case "rh":
      navigate("/rh/dashboard", { replace: true });
        break;

    default:
        console.error("Rôle inconnu :", user.role);
}
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">

      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-600 text-2xl font-bold text-white">
            E
          </div>

          <h1 className="text-3xl font-bold text-gray-900">
            Bienvenue
          </h1>

          <p className="mt-2 text-gray-500">
            Connectez-vous à votre espace ENNA Leave
          </p>
        </div>

        {/* Card */}
        <div className="rounded-2xl bg-white p-8 shadow-xl">

          <form onSubmit={handleLogin} className="space-y-5">

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Adresse email
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="exemple@enna.dz"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Mot de passe
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
                required
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full rounded-xl bg-green-600 py-3.5 font-semibold text-white transition hover:bg-green-700 active:scale-[0.98]"
            >
              Se connecter
            </button>

          </form>

        </div>

        <p className="mt-6 text-center text-sm text-gray-400">
          © 2026 ENNA Leave
        </p>

      </div>
    </div>
  );
}





