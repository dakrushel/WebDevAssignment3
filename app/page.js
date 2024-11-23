import Header from "../components/Header.jsx"; 
import Footer from "../components/Footer.jsx"; 
import MovieList from "../components/movieList.js"; 

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* Header Section */}
      <Header />

      {/* Main Content Section */}
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full p-8 sm:p-20">
        <h1 className="text-4xl font-bold text-center sm:text-left">
          Welcome to Internet Movies Rental
        </h1>
        <MovieList />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}                                                                                                                                                                                                                                      import React from "react";
