import './App.css';
import AboutPage from './pages/aboutPage/AboutPage';
import MainPage from './pages/mainPage/MainPage';
import UsersPage from './pages/usersPage/UsersPage';


import 'bootstrap/dist/css/bootstrap.min.css';
import PostPage from './pages/postPage/PostPage';
import CreatePostsPage from './pages/createPostsPage/CreatePostsPage';

function App() {
  return (
    <div className='App' >
      <PostPage />
      {/* <CreatePostsPage /> */}
    </div>
  );
}

export default App;
