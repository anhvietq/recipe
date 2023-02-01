import { useEffect, useState } from "react";
import styled from "styled-components";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import "@splidejs/splide/css";
import {Link} from 'react-router-dom';



function Popular() {

  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  },[]);
/*[] acts as an empty array to tell it to run 
when the component gets mounted*/
  const getPopular = async ()=> {

    const check = localStorage.getItem('popular');
    //check is used to see if popular picks are saved in local storage
    if(check){
      setPopular(JSON.parse(check));
    /*if there are, the fetching is discarded, take it back,
    PARSE it from a string back to an array*/
    } else {
      const api = await fetch (
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
      );
      const data = await api.json ();
    //if there's nothing, then it needed to be set and fetching the api

      localStorage.setItem('popular', JSON.stringify(data.recipes)); 
      //in local storage, only strings can be saved
      setPopular(data.recipes);
      console.log(data.recipes);
    }

  };

  return (
  <div>
        <Wrapper>
        <h3>Popular Picks</h3>
        <Splide options={{
          perPage: 4,
          pagination: false, //get rid of the slide dots
          drag: 'free',
          gap: '5rem',
        }}>
        {popular.map((recipe) => {
          return (
          <SplideSlide key = {recipe.id}>
            <Card>
              <Link to = {'/recipe/' + recipe.id}>
              <p>{recipe.title}</p>
              <img src={recipe.image} alt={recipe.title} />
              <Gradient/>
              </Link>
            </Card>
            </SplideSlide>
          );
        })}
        </Splide>
       </Wrapper>
  </div>
  )
}

const Wrapper = styled.div`
  margin: 4rem 0rem ;
`;

const Card = styled.div`
  min-height: 25rem ;
  border-radius: 2rem;  
  overflow: hidden;
  position: relative;

img {
  border-radius: 2rem;
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
p {
  position: absolute;
  z-index: 10;
  left: 50%;
  bottom: 0%;
  transform: translate(-50%, 0%);
  color: white;
  width: 100%,
  text-align: center;
  font-weight: 600;
  font-size: 1rem;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
}
`;

const Gradient = styled.div `
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));

`


export default Popular;

//@47:49