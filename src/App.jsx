
// import Storage from './components/storage'
import Sidebar from './components/sidebar'
import Navbar from './components/navbar'
import Header from './components/header'
import Learn from './components/learn'
import Features from './components/features'
import Footer from './components/footer'
import './components/cssfile.css'

function App() {
  return (
    <div style={{display:"flex"}} >
      <Sidebar/>
      <div className="mainclass">
        <Navbar/>
        <Header/>
        <Learn/>
        <Features/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
