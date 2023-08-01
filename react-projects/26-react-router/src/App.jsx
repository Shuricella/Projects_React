import { BrowserRouter, Routes, Route } from 'react-router-dom';

import About from './components/About.jsx';
import Contacts from './components/Contacts.jsx';
import Home from './components/Home.jsx';
import NotFound from './components/NoteFound.jsx';
import MainLayout from './layouts/MainLayout.jsx';
import Courses from './components/Courses.jsx';
import SingleCourse from './components/SingleCourse.jsx';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>

        <Routes>

          <Route clasName="App" path='/' element={<MainLayout />}>
              {/* все ссылки идут относительного корневого компонента <MainLayout /> path='/' */}
              {/* в компоненты, которые должы быть по пути path='/', необходимо прописть свойство index={true} */}
            <Route index={true} element={<Home />} />

            <Route path='about' element={<About />} />
            <Route path='contacts' element={<Contacts />} />
            
            <Route path='courses' element={<Courses />} />
            <Route path='courses/:courseSlug' element={<SingleCourse />} />

            <Route path='*' element={<NotFound />} />
            
          </Route>

        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
