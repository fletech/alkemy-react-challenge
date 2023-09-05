import React, { useEffect, useState } from "react";
//React-router
import { Route, Switch, useLocation, Redirect } from "react-router-dom";
//utils
import { useStateWithLocalStorage, addRemove, url } from "./utils";

//Pages
import HeroDetail from "./pages/HeroDetail";
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
import Toast from "./components/Toast";
import Nav from "./components/Nav";

///RENDER///
function App({ token }) {
  //Location - Routing:
  const location = useLocation();

  ///////State:
  //custom hooks.
  const [teamHero, setTeamHero] = useStateWithLocalStorage("teamHero", []);
  const [rating, setRating] = useStateWithLocalStorage("rating", {
    highest: 0,
    lowest: 0,
  });
  //useState
  const [inputFocused, setFocus] = useState(true);
  const [isFull, setIsFull] = useState(false);
  const [isLogged, setIsLogged] = useState(token);
  const [resultNull, setResultNull] = useState(false);
  const [resultSearching, setResultSearching] = useState();
  const [searchValue, setSearchValue] = useState("");
  const [stats, setStats] = useState({});
  const [toast, setToast] = useState(false);
  const [toastType, setToastType] = useState({});
  const [toggleAside, setToggleAside] = useState(true);

  //Use Effect:
  useEffect(() => {
    //let keyName = Object.keys(stats);
    let newStats = {
      strength: 0,
      power: 0,
      speed: 0,
      intelligence: 0,
      combat: 0,
      durability: 0,
    };
    let keyName = Object.keys(newStats);
    keyName.map((key) =>
      teamHero.map((hero) => (newStats[key] += parseInt(hero.powerstats[key])))
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
      <Toast toast={toast} toastType={toastType} />
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
        rating={rating}
        setRating={setRating}
        toast={toast}
        setToast={setToast}
        toastType={toastType}
        setToastType={setToastType}
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
                    rating={rating}
                    setRating={setRating}
                    teamHero={teamHero}
                    setTeamHero={setTeamHero}
                    stats={stats}
                    toast={toast}
                    setToast={setToast}
                    toastType={toastType}
                    setToastType={setToastType}
                  />
                </Route>

                <Route path="/search" exact>
                  <Search
                    inputFocused={inputFocused}
                    setFocus={setFocus}
                    isFull={isFull}
                    setIsFull={setIsFull}
                    rating={rating}
                    setRating={setRating}
                    resultNull={resultNull}
                    setResultNull={setResultNull}
                    resultSearching={resultSearching}
                    setResultSearching={setResultSearching}
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    teamHero={teamHero}
                    setTeamHero={setTeamHero}
                    url={url}
                    toast={toast}
                    setToast={setToast}
                    toastType={toastType}
                    setToastType={setToastType}
                  />
                </Route>

                <Route path="/hero-detail/:id">
                  <HeroDetail
                    isFull={isFull}
                    setIsFull={setIsFull}
                    teamHero={teamHero}
                    setTeamHero={setTeamHero}
                    rating={rating}
                    setRating={setRating}
                    toast={toast}
                    setToast={setToast}
                    toastType={toastType}
                    setToastType={setToastType}
                  />
                </Route>
              </>
            ) : (
              <>
                <Route path="/">
                  <Redirect to="/login" />
                </Route>
                <Route path="/login" exact>
                  <Login
                    isLogged={isLogged}
                    setIsLogged={setIsLogged}
                    toast={toast}
                    setToast={setToast}
                    toastType={toastType}
                    setToastType={setToastType}
                  />
                </Route>
              </>
            )}
          </Switch>
        </SectionStyled>
      </MainStyled>
      <Nav
        className="nav-as-footer"
        isLogged={isLogged}
        setIsLogged={setIsLogged}
        teamHero={teamHero}
      />
      <Footer />
    </div>
  );
}
const MainStyled = styled.main`
  display: flex;
`;
export default App;
