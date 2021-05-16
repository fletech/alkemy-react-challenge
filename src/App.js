import React, { useEffect, useState } from "react";
//React-router
import { Route, Switch, useLocation, Redirect } from "react-router-dom";
//utils
import { useStateWithLocalStorage, addRemove, url } from "./utils";

//Pages
import Search from "./pages/Search";
//Styled-components
import styled from "styled-components";
import { SectionStyled } from "./components/styled";
//Components
import Header from "./components/Header";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import Login from "./pages/Login";

///RENDER///
function App() {
  //Location:
  const location = useLocation();

  //State:
  const [teamHero, setTeamHero] = useStateWithLocalStorage("teamHero");
  const [searchValue, setSearchValue] = useState("");
  const [resultSearching, setResultSearching] = useState();
  const [isFull, setIsFull] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("TOKEN_LOGIN")) {
      setIsLogged(true);
    }
  }, []);
  return (
    <div className="App">
      <Header isLogged={isLogged} setIsLogged={setIsLogged} />
      <Aside
        addRemove={addRemove}
        teamHero={teamHero}
        setTeamHero={setTeamHero}
      />
      <MainStyled>
        <SectionStyled>
          <Switch location={location} key={location.pathname}>
            {!isLogged ? (
              <>
                <Route path="/">
                  <Redirect to="/login" />
                </Route>
                <Route path="/login" exact>
                  <Login setIsLogged={setIsLogged} />
                </Route>
              </>
            ) : (
              <>
                <Route exact path="/login">
                  <Redirect to="/search" />
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
                  />
                </Route>
              </>
            )}
          </Switch>
        </SectionStyled>
      </MainStyled>
      <Footer />
    </div>
  );
}
const MainStyled = styled.main`
  display: flex;
`;
export default App;
