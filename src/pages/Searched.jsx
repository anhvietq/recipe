import React from 'react';
import {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom';
import styled from 'styled-components';




function Searched() {

    const [searchedRecipes, setSearchedRecipes] = useState ([]);
    let params = useParams();


    const getSearched = async (name) => {
        const data = await fetch (
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
        )
        const recipes = await data.json();
        setSearchedRecipes(recipes.results);
    };

    useEffect (() => {
        getSearched(params.search);
    }, [params.search]);

return (
   <Grid>
        {searchedRecipes.map((item) => {
            return (
                <Card key = {item.id}>
                    <Link to = {'/recipe/' + item.id}> 
                        <img src={item.image} alt="" />
                        <h4>{item.title}</h4>
                    </Link>
                </Card>
            )
        })}
   </Grid>
  
)};

const Grid = styled.div `
    display: grid; 
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1 fr));
    grid-gap: 3rem;
`

const Card = styled.div `
    img{
        border-radius: 2rem;
        width: 40%;
        object-fit: cover;
    }
    a{
        text-decoration: none;
    }
    h4{
        padding: 1rem;
    }
`;

export default Searched;