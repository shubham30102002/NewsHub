import './App.css';
import React, {useState} from 'react';
import NavBar from './Components/NavBar';
import News from './Components/News';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'; // Import the Routes component
import LoadingBar from 'react-top-loading-bar';

const App = ()=> {
  const pageSize = 8;
  const apiKey = process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0)

    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
          color='#f11946'
          height={3}
          progress={progress}
        />

          <Routes> {/* Replace Switch with Routes */}
            <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey}  key = "general" pageSize={pageSize} country="in" category="general" />} />
            <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey}  key = "business" pageSize={pageSize} country="in" category="Business" />} />
            <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey}  key = "entertainment" pageSize={pageSize} country="in" category="Entertainment" />} />
            <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey}  key = "health" pageSize={pageSize}  country="in" category="Health" />} />
            <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey}  key = "science" pageSize={pageSize} country="in" category="Science" />} />
            <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey}  key = "sports" pageSize={pageSize} country="in" category="Sports" />} />
            <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey}  key = "technology" pageSize={pageSize} country="in" category="Technology" />} />
          </Routes>
        </Router>
      </div>
    );
  
}

export default App;