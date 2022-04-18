import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Search = () => {

    /* Search params o query params / parametro de busqueda
        Se separa de la url con un ?
        Y va en pares de clave=valor
       // ?name=rick&status=alive
    */

    const [personajes, setPersonajes] = useState([])
    const [searchParams, setSeachParams] = useSearchParams({
        query: ''
    })

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character?name=${searchParams.get('query')}`)
        /* &status=${searchParams.get('status')} */
        .then(res => res.json())
        .then(data => {
            setPersonajes(data.results)
        })
    }, [searchParams])

    const handleChange = (e) => {
        setSeachParams({
            query:e.target.value
        })
    }
    
    const handleChangeStatus = (e) => {
        setSeachParams({
            status:e.target.value
        })
    }

    return (
        <div>
            <h1>Search</h1>
            <p>Nombre del personaje:</p>
            <input 
                type='text' 
                onChange={handleChange}
                value={searchParams.get('query')}
            ></input>
            <p>Status del personaje:</p>
            {/* <input 
            type='text'
            onChange={handleChangeStatus}
            value={searchParams.get('status')}
            ></input> */}
            {personajes.map(personaje => <h1>{personaje.name}</h1>)
            }
        </div>
        
    )    
}

export default Search;
