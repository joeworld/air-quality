import React, { useEffect, useReducer, useState } from 'react';
import './App.css'
import getJsonData from './data'

const reducerManager = (state,action) => {
  const {payload,type} = action
  switch(type){
    case "setCity":
      return {...state,...payload}
    case "setLangVersion":
      return {...state,...payload}
    default:
      return state
  }
}
const App = () =>{
  const [state,dispatch] = useReducer(reducerManager,{
    city: '',
    lang: 'english'
  });
  const [jsonData,setJsonData] = useState({

  })
  const [cities,setCities] = useState([])

  useEffect(()=>{
    getCitiesList()
  },[jsonData])

  useEffect(()=>{
    resetJsonData()
  },[state.lang])

  const resetJsonData = ()=>{
    const json_data = getJsonData(state.lang)
    setJsonData(json_data)
  }

  const getCitiesList = () => {
    let totalNoOfCity = parseInt(jsonData.total_cities_1_value)
    const cities = []
    for(let i=1; i<=totalNoOfCity;i++){
        cities.push({
          id: i,
          name: jsonData[`compare-tabs_1_city_${i}_name`],
          cigg: jsonData[`compare-tabs_1_city_${i}_cigg`],
          aqi: jsonData[`compare-tabs_1_city_${i}_aqi`],
        })
    }
    setCities(cities)
  }
  if(!jsonData) return null;
  return (
    <>
      <section className="bgimage">
        <div className="container-fluid">
            <h2 
              data-testid="hero-title"
              className="text-center text-white">{jsonData.hero_1_title}</h2>
        </div>
      </section>
      <div className="container-fluid">
        <div className="mt-2">
          <div className="w-25">
            <select
              value={state.lang}
              onChange={(e)=>{
                const lang = e.target.value
                dispatch({
                  type: 'setLangVersion',
                  payload:{
                    lang
                  }
                })
              }}
              data-testid="lang_version"
              className="custom-select"
              id="lang_version"
            >
              <option value="" disabled>Select Lang</option>
              <option value="english">English</option>
              <option value="hindi">Hindi</option>
                
            </select>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-3">
            <div className="list-group" data-testid="article-section">
              <div className="list-group-item list-group-item-action flex-column align-items-start active">
                <div className="d-flex w-100 justify-content-between">
                  <h6 className="mb-1">Author: <span data-testid="article-author">{jsonData['article-info_1_byline']}</span></h6>
                  <small data-testid="article-date">{jsonData['article-info_1_date']}</small>
                </div>
                <div className="d-flex w-100 justify-content-between">
                  <p className="mb-1" >Category: <span data-testid="article-category"><a href={jsonData['article-info_1_category_url']} target="_blank" className="text-white">{jsonData['article-info_1_category']}</a></span></p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <p className="" data-testid="p_1_value">{jsonData.p_1_value}</p>
            <p className="" data-testid="p_2_value">{jsonData.p_2_value}</p>
            <p className="" data-testid="p_3_value">{jsonData.p_3_value}</p>
            <p className="" data-testid="p_4_value">{jsonData.p_4_value}</p>
            <p className="" data-testid="p_5_value">{jsonData.p_5_value}</p>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label className="col-form-label" data-testid='compare-tabs_1_title'>{jsonData['compare-tabs_1_title']}</label><br/>
                  <small data-testid='compare-tabs_1_method'>{jsonData['compare-tabs_1_method']}</small>
                  <select
                    value={state.city}
                    onChange={(e)=>{
                      const city = e.target.value;
                      dispatch({
                        type: 'setCity',
                        payload:{
                          city
                        }
                      })
                    }}
                    data-testid="select_city"
                    className="custom-select"
                    id="cities"
                  >
                    <option value="">{jsonData['compare-tabs_1_title']}</option>
                    {cities.map((city,index)=>{
                      return (
                        <option data-testid="select_city_option" key={index} value={city.id}>{city.name}</option>
                      )
                    })}
                  </select>
                </div>
              </div>
            </div>
            {state.city && 
              (
                <>
                  <span >City: <strong data-testid={`compare-tabs_1_city_${state.city}_name`}>{jsonData[`compare-tabs_1_city_${state.city}_name`]}</strong></span>
                  <hr/>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="">
                        <h4>Cigarettes <small>(<span data-testid={`compare-tabs_1_city_${state.city}_cigg`}>{jsonData[`compare-tabs_1_city_${state.city}_cigg`]}</span>)</small></h4>
                        <div>
                          {
                            Array(parseInt(jsonData[`compare-tabs_1_city_${state.city}_cigg`]))
                            .fill('https://raw.githubusercontent.com/bbc/vj-code-tests/master/airquality/src/img/ciggrette_icon.png')
                            .map((image,index)=>{
                              return (
                                <img key={index} src={image} style={{width:20, height: 45}} alt="cigarette-image"/>
                              )
                            })
                          }
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="">
                        <h4>Particulate Matter</h4>
                        <p>Total: <strong data-testid={`compare-tabs_1_city_${state.city}_aqi`}>{jsonData[`compare-tabs_1_city_${state.city}_aqi`]}</strong></p>
                      </div>
                    </div>
                  </div>

                  <hr/>
                </>
              )
            }
            <p data-testid="p_6_value">{jsonData.p_6_value}</p>
            <p data-testid="p_7_value">{jsonData.p_7_value}</p>
            <p data-testid="p_8_value">{jsonData.p_8_value}</p>
            <p data-testid="p_9_value">{jsonData.p_9_value}</p>
            <p data-testid="p_10_value">{jsonData.p_10_value}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
