import React from "react";
import { useState, useEffect, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from './UserContext';
import { ChakraProvider } from '@chakra-ui/react';
import PersonalizedFallback from "./components/PersonalizedFallback/PersonalizedFallback";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const LazyAsk = React.lazy(() => import('./components/Ask/Ask'));
const LazyRegister = React.lazy(() => import('./components/Register/Register'));
const LazyLogin = React.lazy(() => import('./components/Login/Login'));
const LazyHome = React.lazy(() => import('./components/Home/Home'));
const LazySearchResults = React.lazy(() => import('./components/SearchResults/SearchResults'));
const LazyQuestionDetails = React.lazy(() => import('./components/QuestionDetails/QuestionDetails'));
const LazyUserProfile = React.lazy(() => import('./components/UserProfile/UserProfile'));

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const [user, setUser] = useState(() => {
    // Retrieve the user data from storage or set it to null if not found
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });
  
  const updateUser = (newUser) => {
    setUser(newUser);
  };

  useEffect(() => {
    // Save the user data to storage whenever the user state changes
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  const handleSetSearchQuery = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="app">
      <ChakraProvider>
        <UserContext.Provider value={{ user, updateUser }}>
          <BrowserRouter>
            <main>
              <Routes>
                <Route 
                  path="/register" 
                  element={
                    <Suspense fallback={<PersonalizedFallback />}>
                      <LazyRegister />
                    </Suspense>
                  }
                />
                <Route 
                  path="/login" 
                  element={
                    <Suspense fallback={<PersonalizedFallback />}>
                      <LazyLogin />
                    </Suspense>
                  } 
                />
                <Route 
                  path="/home" 
                  element={
                    <Suspense fallback={<PersonalizedFallback />}>
                      <LazyHome handleSetSearchQuery={handleSetSearchQuery} />
                    </Suspense>
                  } 
                />
                <Route 
                  path="/search" 
                  element={
                    <Suspense fallback={<PersonalizedFallback />}>
                      <LazySearchResults searchQuery={searchQuery} handleSetSearchQuery={handleSetSearchQuery} />
                    </Suspense>
                  } 
                />
                <Route 
                  path="/ask" 
                  element={
                    <Suspense fallback={<PersonalizedFallback />}>
                      <LazyAsk handleSetSearchQuery={handleSetSearchQuery} />
                    </Suspense>
                  } />
                <Route 
                  path="/question/:id" 
                  element={
                    <Suspense fallback={<PersonalizedFallback />}>
                      <LazyQuestionDetails handleSetSearchQuery={handleSetSearchQuery} />
                    </Suspense>
                  } 
                />
                <Route 
                  path="/user/:id" 
                  element={
                    <Suspense fallback={<PersonalizedFallback />}>
                      <LazyUserProfile handleSetSearchQuery={handleSetSearchQuery} />
                    </Suspense>
                  } 
                />
              </Routes>
            </main>
          </BrowserRouter>
        </UserContext.Provider>
      </ChakraProvider>
    </div>
  );
}