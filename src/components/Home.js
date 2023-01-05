import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios";
import VodList from './VodList';

function Home() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)
  const [years, setYears] = useState();
  const selectRef = useRef();
  const params = useParams();

  const doApi = async () => {
    try {
      setLoading(true)
      let url = `https://www.omdbapi.com/?s=${params.search || "bank"}&y=${years}&apikey=945e0d6`
      const { data } = await axios.get(url);
      console.log(data.Search);
      setData(data.Search);
      console.log(params.search);
      setLoading(false);
    }
    catch (error) {
      console.log(error);
    }
  }

  // Select Box
  let yearSelect = [];
  const yearSelect1 = () => {
    let year = new Date().getFullYear();

    for (let i = 0; i < 30; i++) {
      yearSelect[i] = year - i;
    }
  }
  yearSelect1()

  useEffect(() => {
    doApi();
  }, [params, years])

  return (
    <div>
      <div className="topHome container-fluid bg-gray-800">
        <div className="container-md">

          <div className='p-2 col-8 col-lg-3 col-md-5'>

            <select ref={selectRef} className="form form-select i-center fs-4"
              onChange={() => {
                setYears(selectRef.current.value)
              }} >

              <option>Select Year...</option>
              {yearSelect.map((item => {
                return (
                  <option value={item}>{item}</option>
                )
              }))}
            </select>
          </div>

        </div>
      </div>


      {data ? (<div>

        {loading ? <h1 className='foundCss text-danger font-black text-center mt-2'>Loading...</h1> :

          <div className="container">
            <div className="flex flex-wrap">
              {data.map((item, i) => {
                return (
                  <VodList key={i} item={item} />
                )
              })}
            </div>
          </div>}


      </div>) : (<h1 className='foundCss text-danger font-black text-center mt-2'>Error 404. Movie not found... </h1>)}

    </div>
  )
}

export default Home