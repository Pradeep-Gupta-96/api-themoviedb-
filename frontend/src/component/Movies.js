import React, { useState } from 'react'
import { VscHeart } from "react-icons/vsc";
import { FaMailBulk } from "react-icons/fa";
import { BsFillHeartFill } from "react-icons/bs";

const Movies = ({ movie }) => {
    const [favorites, setFavorites] = useState([]);

    const detail = {
        id: movie.id,
        title: movie.title,
        overview: movie.overview,
        release_date: movie.release_date,
        vote_average: movie.vote_average
    }
    // console.log(detail) 


    const forsend = async (e) => {
        e.preventDefault();
        alert("Email successfully send")
        const response = await fetch("http://localhost:4000/sendemail", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({ detail }),
        })
        // console.log(response)

    };

    // for favorites fav movie 
    const addFav = (movie) => {
        let array = favorites;
        let addArray = true;
        array.map((c, i) => {
            if (c == movie.i) {
                array.splice(movie.id, 1)
                addArray = false;
            }
        })
        if (addArray) {
            array.push(movie.i)
        }
        setFavorites([...array])
    }

    return (
        <>
            <div className="col">
                <div className="card" style={{ width: "18rem" }}>
                    <img className="card-img-top" src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} alt={movie.poster_path} />
                    <div className="card-body">
                        <h5 className="card-title">{movie.title}</h5>
                        <h6> release_date : {movie.release_date} </h6>
                        <h6> vote_average : {movie.vote_average} </h6>
                        <h6> vote_count : {movie.vote_count} </h6>
                        <FaMailBulk className='icos' style={{
                            position: 'absolute',
                            bottom: '20px',
                            left: '20px',
                        }}
                            size="30px"
                            color="blue" onClick={forsend} />---||--||---


                        <td>
                            {

                                favorites.includes(movie.i) ? (<BsFillHeartFill className='icos'
                                    style={{
                                        position: 'absolute',
                                        bottom: '20px',
                                        right: '20px',
                                    }}
                                    size="30px"
                                    color="red"
                                    onClick={addFav} />) : (<VscHeart className='icos'
                                        style={{
                                            position: 'absolute',
                                            bottom: '20px',
                                            right: '20px',
                                        }}
                                        size="30px"
                                        color="red"
                                        onClick={addFav} />)
                            }
                        </td>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Movies

