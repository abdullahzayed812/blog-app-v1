import { Header } from "./Header";
import { Nav } from "./Nav";
import { Home } from "./Home";
import { PostPage } from "./PostPage";
import { NewPost } from "./NewPost";
import { Footer } from "./Footer";
import { About } from "./About";
import { Missing } from "./Missing";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/post" exact>
          <PostPage />
        </Route>
        <Route path="/post/:id">
          <NewPost />
        </Route>
        <Route path="/about" component={About} />
        <Route path="*" component={Missing} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
