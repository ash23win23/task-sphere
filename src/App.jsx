import { useEffect, useState } from "react";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import { TaskCard } from "./components/TaskCard";
import { Loader } from "./components/Loader";
import { ErrorMessage } from "./components/ErrorMessage";
import MainLayout from "./layouts/MainLayout";
import { Tasks } from "./pages/Tasks";
import "./App.css";

function App() {
  return (
    <MainLayout>
      <Tasks />
    </MainLayout>
  );
}

export default App;
