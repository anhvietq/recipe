import Pages from "./pages/Pages";
import Category from "./components/Category";
import {BrowserRouter, Link} from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import {SiCodechef} from 'react-icons/si';
import {AiFillHome} from 'react-icons/ai';



function App() {
  return (
    <div className="App">
    <SiCodechef size={100} style={{position: 'absolute', marginLeft:'750', marginTop: '25'}}/>
    <Header>Chef's Kiss</Header>
    <BrowserRouter>
    <Nav>
      <Home to = {'/'}>
      <AiFillHome size={30}/>
      </Home>
    </Nav> 
        <Search/>
        <Category/>
        <Pages/>
    </BrowserRouter>
    </div>
  );
}
//{'/'} is to homepage
const Header = styled.div`
  position: absolute;
  margin-left: 46.5rem;
  margin-top: 8rem;
  font-size: 1.5rem;
  font-family: 'Lobster Two', cursive
`
const Home = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem; 
  font-weight: 400,
  font-family: 'Lobster Two', cursive;
`
const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex:
  justify-content: flex-start;
  align-items: center;

  svg {
    font-size: 2rem;
  }
`

export default App;
