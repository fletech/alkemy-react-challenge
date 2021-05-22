import React, { useEffect, useState } from "react";
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
  const [inputFocused, setFocus] = useState(true);
  const [stats, setStats] = useState({
    strength: 0,
    power: 0,
    speed: 0,
    intelligence: 0,
    combat: 0,
    durability: 0,
  });

  //console.log(isLogged);

  //Use Effect:
  useEffect(() => {
    let keyName = Object.keys(stats);
    let newStats = {
      strength: 0,
      power: 0,
      speed: 0,
      intelligence: 0,
      combat: 0,
      durability: 0,
    };

    keyName.map((key) =>
      teamHero.map(
        (hero) =>
          // console.log(
          //   `${key} de ${hero.name}: ${parseInt(hero.powerstats[key])}`
          // );
          (newStats[key] += parseInt(hero.powerstats[key]))
      )
    );

    setStats(newStats);
  }, [teamHero]);

  //Handlers:

  const inputFocusHandler = (e) => {
    if (e.target.className !== "input-search" && searchValue.length === 0) {
      setFocus(false);
    }
  };

  return (
    <div className="App" onClick={inputFocusHandler}>
      <Header
        isLogged={isLogged}
        setIsLogged={setIsLogged}
        stats={stats}
        setStats={setStats}
        toggleAside={toggleAside}
        setToggleAside={setToggleAside}
        teamHero={teamHero}
      />
      <Aside
        toggleAside={toggleAside}
        setToggleAside={setToggleAside}
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
                  <Home
                    isFull={isFull}
                    setIsFull={setIsFull}
                    teamHero={teamHero}
                    setTeamHero={setTeamHero}
                    stats={stats}
                  />
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
                    inputFocused={inputFocused}
                    setFocus={setFocus}
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
