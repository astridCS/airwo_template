import Container from "../components/Container";
import Loader from "../components/Loader";


const Loading = () => {
  return (
    <Container className="flex min-h-[calc(100vh-100px)] flex-col max-w-7xl mx-auto px-4">
      <Loader />
    </Container>
  );
};

export default Loading;
