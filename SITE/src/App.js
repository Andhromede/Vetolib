import './App.css';
import React, { Suspense } from "react";
import BaseView from "./pages/BaseView";
import LoadingSpinner from "./components/LoadingSpinner";
import { BrowserRouter as Router, Switch, Route, Routes, Link } from "react-router-dom";


const HomeView = React.lazy(() => import("./pages/HomeView"));
const TestView = React.lazy(() => import("./pages/TestView"));
const ErrorView = React.lazy(() => import("./pages/ErrorView"));


const App = () => {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<BaseView/>}>

                        <Route index element={<Suspense fallback={<LoadingSpinner/>} >
                                                                      <HomeView/>
                                                                  </Suspense>
                                                                  }
                        />

                        <Route path="/home" element={<Suspense fallback={<LoadingSpinner/>} >
                                                                              <HomeView/>
                                                                          </Suspense>
                                                                          }
                        />

                        <Route path="/test" element={<Suspense fallback={<LoadingSpinner/>} >
                                                                              <TestView/>
                                                                          </Suspense>
                                                                          }
                        />
                    </Route>

                    <Route path="*" index element={<Suspense fallback={<LoadingSpinner/>} >
                                                                          <ErrorView/>
                                                                      </Suspense>
                                                                      }
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;