import axios from "axios";
import Container from "../../../components/Container";
import Form from "../../../components/auth/Form";
import Link from "next/link";
import { useState } from "react";
import Loading from "../../Loading";
import Loader from "../../../components/Loader";
import { useNotification } from "../../NotificationProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [emailError, setEmailError] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Validation du mot de passe
    if (password.length < 6) {
      setError("Le mot de passe doit comporter au moins 6 caractères");
      setLoaSding(false);
      return;
    }

    // Validation de l'adresse email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      let emailErrorMessage = "L'adresse e-mail n'est pas valide";
    
      if (!email.includes("@")) {
        emailErrorMessage += " et doit contenir le symbole @";
      }
    
      setError(emailErrorMessage);
      setEmailError(emailErrorMessage);
      setLoading(false);
      return;
    }


    try {
      const res = await axios.post("/api/auth/login", {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      
      if (res.status === 200) {
        toast.success("Connexion réussie,bienvenue sur votre espace personnel!", {
          className: 'text-green-500',
        });
      }
      
      router.push("/");
    } catch (err) {
      setError(err.response.data.error);
      console.log(error);
      toast.error("attention il y a une erreur!");
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <Container className="flex min-h-[calc(100vh-100px)] flex-col max-w-7xl mx-auto px-4">
      <div className="flex-1 flex-grow">
        <Form
          label="Login"
          handleClick={(e) => handleSubmit(e)}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          buttonLabel="Login"
          
           
        />
        {error && <p className="text-red-500">{error}</p>}
        
        <span className="text-sm font-medium text-gray-500">
          Don't have an account yet?{" "}
          <Link href="/auth/register">
            <span className="text-sm font-medium text-blue-500 underline">
              Register
            </span>
          </Link>
        </span>
        <ToastContainer />
      </div>
    </Container>
  );
}
