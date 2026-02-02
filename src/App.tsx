import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';

import CategoryPage from './pages/CategoryPage';
import CommunityPage from './pages/Community';

function App() {
  return (
    <Router basename="/Tech-Sientific/">
      <div className="min-h-screen bg-navy-900 text-slate-100 flex flex-col font-sans">
        <Header />

        <main className="flex-grow pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<PostDetail />} />
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route path="/community" element={<CommunityPage />} />
            {/* Catch all route for debugging - redirects to home */}
            <Route path="*" element={<Home />} />
            {/* Admin routes can be added later */}
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
