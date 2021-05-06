import React from "react";
import AddNote from "../components/AddNote";
import Navbar from "../components/Navbar";
import Notes from "../components/Notes";
import SearchBar from "../components/SearchBar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <Notes />
    </div>
  );
}
