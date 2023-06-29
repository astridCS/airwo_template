import axios from "axios";
import Container from "../../../components/Container";
import Link from "next/link";
import { useState } from "react";
import Loading from "../../Loading";
import { useNotification } from "../../NotificationProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import Form from "../../../components/auth/Form";

export default function Register() {
  const [name, setName] = useState("");
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
    console.log(email, password, name);

    // Validation du mot de passe
    if (password.length < 6) {
      setError("Le mot de passe doit comporter au moins 6 caractères");
      setLoading(false);
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
      const res = await axios.post("/api/auth/register", {
        email,
        password,
        name,
      });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      if (res.status === 200) {
        toast.success("Enregistrement réussi !", {
          className: 'text-green-500',
        });
      }
      
      router.push("/");
    } catch (err) {
      setError(err.response.data.error);
      console.log(error);
      toast.error("Une erreur s'est produite lors de l'enregistrement !");
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
          label="Register"
          handleClick={(e) => handleSubmit(e)}
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          buttonLabel="Register"
          error={error}
        />
        
        <span className="text-sm font-medium text-gray-500"> Already have an account?
            <Link
            href="/auth/login"
            className="text-sm font-medium text-gray-500">
            <span className='text-sm font-medium text-blue-500 underline'> {"Login"}  </span>
            </Link>
        </span>
      </div>
      <ToastContainer />
    </Container>
  );
}
