import { FaExclamationTriangle } from "react-icons/fa";
import Container from "../components/Container";

export default function Page_404() {
  return (
    <Container className="flex min-h-[calc(100vh-100px)] items-center justify-center flex-col max-w-7xl mx-auto px-4">
      <h1 className="text-3xl font-extrabold mt-4 text-gray-500 sm:text-4xl">
        <FaExclamationTriangle className="inline-block mr-2 text-red-500" />
        404
      </h1>
      <p className="mt-4 text-2xl text-red-500">
        {" Error! This page could not be found."}
      </p>
    </Container>
  );
}
