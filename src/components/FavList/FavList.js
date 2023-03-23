
import { useEffect, useState } from "react";
import Row from 'react-bootstrap/Row';
import FavMovList from "./FavMovList.js";

export default function FavList() {

    const [favArr, setFavArr] = useState([]);
    const sendReq = async () => {
        const serverURL =  `https://movies-library-coral.vercel.app/favorite`;

        const response = await fetch(serverURL);
        const data = await response.json();
        console.log(data)
        setFavArr(data);
    }

    const takeNewArr = (newArr) => {
        setFavArr(newArr);
    }
    

    useEffect(() => {
        sendReq();
    }, [])
    return (
        <div>
          <Row xs={1} md={4} className="g-4 my-4">
            {favArr.map((e) => {
              return (
                <div key ={e.id}>
                  <FavMovList movies={e} takeNewArr={takeNewArr}/>
                </div>
              )
            })}
          </Row>
        </div>
      )
    
}