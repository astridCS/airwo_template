import axios from "axios";
import { useEffect, useState } from "react";
import Container from "../../components/Container";
import Form from "../../components/auth/Form";
import Loading from "../Loading";
import { useNotification } from "../NotificationProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

export default function MeInformation() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/auth/me", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setName(data.user.name);
        setEmail(data.user.email);
        setPassword(data.user.password);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await axios.put(
        "/api/auth/me",
        {
          name,
          email,
          password,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );

      if (res.status === 200) {
        toast.success("Modification réussie", {
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
      router.push("/");
    
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <Container className="flex min-h-[calc(100vh-100px)] flex-col max-w-7xl mx-auto px-4">
      <div className="flex-1 flex-grow">
        <Form
          label="My Profile"
          handleClick={(e) => handleSubmit(e)}
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          buttonLabel="Update"
        />
        <ToastContainer />
      </div>
    </Container>
  );
}
