import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { Footer } from "./components/Footer";
import QuizCard from "./components/QuizCard";
import AboutUs from "./components/AboutUs";
import QuizCardsSection from "./components/QuizCardsSection";
import Dashboard from "./components/Dashboard";
import HeroSection from "./components/HeroSection";
import LLMchallenge from "./components/LLMchallenge";
import Challengemodel from "./components/Challengemodel";
import Resultpage from "./components/Reasultpage"

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/quiz" element={<QuizCardsSection />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/quiz/ai-quiz" element={<QuizCard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/profile" element={<Dashboard />} />
        <Route path="/aichallenge" element={<LLMchallenge />} />
        <Route path="/aichallenge/challengemodel" element={<Challengemodel />} />
        <Route path="/aichallenge/result" element={<Resultpage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
