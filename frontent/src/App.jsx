import 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import SignInForm from "./auth/forms/SignInForm";
import SignUpForm from "./auth/forms/SignUpForm";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/shared/Header";
import PostDetails from "./pages/PostDetails";
import Search from "./pages/Search";
import NewsArticles from "./pages/NewsArticles";
import Footer from "./components/shared/Footer"

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/sign-in" element={<SignInForm />} />
        <Route path="/sign-up" element={<SignUpForm />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<Search />} />
        <Route path="/news" element={<NewsArticles />} />
        <Route path="/post/:postSlug" element={<PostDetails />} />
      </Routes>

      <Footer />
      <Toaster />
    </BrowserRouter>
  );
};

export default App;
