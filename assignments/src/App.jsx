import MoviesList from './Assignment2';
import UserProfile from './Assignment1';
import './App.css'

function App() {
  const fullMovieList = [
    {
        "id": 1,
        "title": "Home Alone",
        "description": "A boy is left behind to defend his home from robbers while his family is on vacation in Paris",
        "genre": "comedy",
        "show": "false"
    },
    {
        "id": 2,
        "title": "Die Hard",
        "description": "A man reunites with his estranged wife and is attacked by terrorists",
        "genre": "action",
        "show": "false"
    },
    {
        "id": 3,
        "title":"The Santa Clause",
        "description": "A man learns the meaning of Christmas when he accidentally kills Santa and dons his suit, enacting the Santa Clause and becoming the next Santa",
        "genre": "comedy",
        "show": "false"
    },
    {
        "id": 4,
        "title": "A Christmas Story",
        "description": "A boy recalls the events leading up to a past Christmas where he got a bb gun as a gift",
        "genre": "comedy",
        "show": "false"
    }
  ]
  return (
   <div>
    <UserProfile />
    <MoviesList fullMovieList={fullMovieList} />
   </div>
  )
}

export default App;