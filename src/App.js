import './App.css';
<<<<<<< Updated upstream
import AboutPage from './pages/aboutPage/AboutPage';
import MainPage from './pages/mainPage/MainPage';
import UsersPage from './pages/usersPage/UsersPage';

function App() {
  return (
    <div className="App">
      <MainPage />
      <AboutPage />
      <UsersPage />
=======
import 'bootstrap/dist/css/bootstrap.min.css';
import PostPage from './pages/postPage/PostPage';
import CreatePostsPage from './pages/createPostsPage/CreatePostsPage';

function App() {
  return (
    <div className='App' >
      <PostPage />
      {/* <CreatePostsPage /> */}
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
