import React, { useEffect, useState } from "react";
//React-router
import {
  Route,
  Switch,
  useLocation,
  Redirect,
  useHistory,
} from "react-router-dom";
//utils
import { useStateWithLocalStorage, addRemove, url } from "./utils";

//Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Search from "./pages/Search";
//Styled-components
import styled from "styled-components";
import { SectionStyled } from "./components/styled";
//Components
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import Header from "./components/Header";

///RENDER///
function App() {
  //Location - Routing:
  const location = useLocation();
  let history = useHistory();

  //State:
  const [teamHero, setTeamHero] = useStateWithLocalStorage("teamHero");
  const [searchValue, setSearchValue] = useState("");
  const [resultSearching, setResultSearching] = useState();
  const [isFull, setIsFull] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [toggleAside, setToggleAside] = useState(true);

  //Use Effect:
  useEffect(() => {
    if (localStorage.getItem("TOKEN_LOGIN")) {
      setIsLogged(true);
    }
  }, []);

  return (
    <div className="App">
      <Header
        setToggleAside={setToggleAside}
        toggleAside={toggleAside}
        isLogged={isLogged}
        setIsLogged={setIsLogged}
      />
      <Aside
        toggleAside={toggleAside}
        isLogged={isLogged}
        addRemove={addRemove}
        teamHero={teamHero}
        setTeamHero={setTeamHero}
      />
      <MainStyled>
        <SectionStyled>
          <Switch location={location} key={location.pathname}>
            {isLogged ? (
              <>
                <Route path={"/"} exact>
                  <Home isLogged={isLogged} />
                </Route>

                <Route path="/login">
                  <Redirect to="/" />
                </Route>

                <Route path="/search">
                  <Search
                    isLogged={isLogged}
                    isFull={isFull}
                    setIsFull={setIsFull}
                    resultSearching={resultSearching}
                    setResultSearching={setResultSearching}
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    teamHero={teamHero}
                    setTeamHero={setTeamHero}
                    url={url}
                  />
                </Route>
              </>
            ) : (
              <>
                <Route path="/">
                  <Redirect to="/login" />
                  <Login setIsLogged={setIsLogged} />
                </Route>
                {/*<Route path="/login">
                  <Redirect to="/login" />
                  <Login setIsLogged={setIsLogged} />
                </Route>
                 <Route path="/search">
                  <Redirect to="/login" />
                  <Login setIsLogged={setIsLogged} />
                </Route> */}
              </>
            )}
          </Switch>
        </SectionStyled>
      </MainStyled>
      <Footer />
    </div>
  );

  /* {isLogged ? (
            <Switch location={location} key={location.pathname}>
              <Route path="/">
                <Home />
              </Route>

              <Route path="/search">
                <Search
                  isFull={isFull}
                  setIsFull={setIsFull}
                  resultSearching={resultSearching}
                  setResultSearching={setResultSearching}
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
                  teamHero={teamHero}
                  setTeamHero={setTeamHero}
                  url={url}
                />
              </Route>
            </Switch>
          ) : (
            <Switch location={location} key={location.pathname}>
              <Route path="/">
                <Redirect to="/login" />
              </Route>
              <Route path="/login" exact>
                <Login setIsLogged={setIsLogged} />
              </Route>
            </Switch>
          )} */
}
const MainStyled = styled.main`
  display: flex;
`;
export default App;
