import React, { useState } from "react";
//React-router
import { Route, Switch, useLocation, Redirect } from "react-router-dom";
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
import HeroDetail from "./pages/HeroDetail";

///RENDER///
function App({ token }) {
  //Location - Routing:
  const location = useLocation();
  //console.log(token);
  //State:
  const [teamHero, setTeamHero] = useStateWithLocalStorage("teamHero");
  const [searchValue, setSearchValue] = useState("");
  const [resultSearching, setResultSearching] = useState();
  const [isFull, setIsFull] = useState(false);
  const [isLogged, setIsLogged] = useState(token);
  const [toggleAside, setToggleAside] = useState(true);
  const [resultNull, setResultNull] = useState(false);

  //console.log(isLogged);

  //Use Effect:

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
        setIsFull={setIsFull}
        isFull={isFull}
      />
      <MainStyled>
        <SectionStyled>
          <Switch location={location} key={location.pathname}>
            {isLogged ? (
              <>
                <Route path="/" exact>
                  <Home />
                </Route>

                <Route path="/search" exact>
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
                    resultNull={resultNull}
                    setResultNull={setResultNull}
                  />
                </Route>

                <Route path="/hero-detail/:id">
                  <HeroDetail
                    isFull={isFull}
                    setIsFull={setIsFull}
                    teamHero={teamHero}
                    setTeamHero={setTeamHero}
                  />
                </Route>
              </>
            ) : (
              <>
                <Route path="/">
                  <Redirect to="/login" />
                </Route>
                <Route path="/login" exact>
                  <Login setIsLogged={setIsLogged} />
                </Route>
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
