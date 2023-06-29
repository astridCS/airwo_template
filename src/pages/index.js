import React, { useState } from "react";
import SearchInput from "../components/SearchInput";
import PlaceList from "../components/Places/PlaceList";
import Container from "../components/Container";
import ReactDOM from "react-dom";


export default function Home() {
  const [search, setSearch] = useState("");
  return (
    <Container className="flex min-h-[calc(100vh-100px)] flex-col items-center">
      <SearchInput search={search} setSearch={setSearch} />
      <PlaceList search={search}/>
    </Container>
  );
}
