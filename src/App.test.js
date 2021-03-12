import { 
  render,
  cleanup,
  fireEvent,
 } from '@testing-library/react';
import App from './App';
import getJsonData from './data';


afterEach(cleanup)

describe('App | English Version',()=>{
  let json_data;
  let getByTestId;
  let getAllByTestId;
  beforeEach(()=>{
    json_data = getJsonData('english')
    const {getByTestId:getById,getAllByTestId:getAllById} = render(<App />)
    const selectLang = getById('lang_version') 
    fireEvent.change(selectLang,{ target: { value: 'english' } })
    getByTestId = getById
    getAllByTestId = getAllById
  })
  test('should have an article section',()=>{
    const artitcleSection = getByTestId('article-section')
    expect(artitcleSection).toBeTruthy()
  })
  test('article section should have article info',()=>{
    const articleAuthor = getByTestId('article-author')
    const articleDate = getByTestId('article-date')
    const articleCategory = getByTestId('article-category')
    expect(articleAuthor.textContent).toBe(json_data[`article-info_1_byline`])
    expect(articleDate.textContent).toBe(json_data[`article-info_1_date`])
    expect(articleCategory.textContent).toBe(json_data[`article-info_1_category`])
  })
  test('should have hero-title',()=>{
    const heroTitle = getByTestId('hero-title')
    expect(heroTitle.textContent).toBe(json_data.hero_1_title)
  })
  test('should have compare-tabs_1_title and match value',()=>{
    const element = getByTestId('compare-tabs_1_title')
    expect(element.textContent).toBe(json_data['compare-tabs_1_title'])
  })
  test('should have compare-tabs_1_method and match value',()=>{
    const element = getByTestId('compare-tabs_1_method')
    expect(element.textContent).toBe(json_data['compare-tabs_1_method'])
  })
  test('should have p_1_value paragraph and match value',()=>{
    const paragraph = getByTestId('p_1_value')
    expect(paragraph.textContent).toBe(json_data.p_1_value)
  })
  test('should have p_2_value paragraph and match value',()=>{
    const paragraph = getByTestId('p_2_value')
    expect(paragraph.textContent).toBe(json_data.p_2_value)
  })
  test('should have p_3_value paragraph and match value',()=>{
    const paragraph = getByTestId('p_3_value')
    expect(paragraph.textContent).toBe(json_data.p_3_value)
  })
  test('should have p_4_value paragraph and match value',()=>{
    const paragraph = getByTestId('p_4_value')
    expect(paragraph.textContent).toBe(json_data.p_4_value)
  })
  test('should have p_5_value paragraph and match value',()=>{
    const paragraph = getByTestId('p_5_value')
    expect(paragraph.textContent).toBe(json_data.p_5_value)
  })
  test('should have p_6_value paragraph and match value',()=>{
    const paragraph = getByTestId('p_6_value')
    expect(paragraph.textContent).toBe(json_data.p_6_value)
  })
  test('should have p_7_value paragraph and match value',()=>{
    const paragraph = getByTestId('p_7_value')
    expect(paragraph.textContent).toBe(json_data.p_7_value)
  })
  test('should have p_8_value paragraph and match value',()=>{
    const paragraph = getByTestId('p_8_value')
    expect(paragraph.textContent).toBe(json_data.p_8_value)
  })
  test('should have p_9_value paragraph and match value',()=>{
    const paragraph = getByTestId('p_9_value')
    expect(paragraph.textContent).toBe(json_data.p_9_value)
  })
  test('should have p_10_value paragraph and match value',()=>{
    const paragraph = getByTestId('p_10_value')
    expect(paragraph.textContent).toBe(json_data.p_10_value)
  })

  test('city list should match what is json file value-by-value and index',()=>{
    const citiesOption = getAllByTestId('select_city_option') 
    // check the first item in list is same with content in json data
    expect(citiesOption[0].textContent).toBe(json_data[`compare-tabs_1_city_${1}_name`])

    /**
     * TODO
     *  Test for other items in list
     */

     // check the last item in list is same with content in json data
     expect(citiesOption[citiesOption.length - 1].textContent).toBe(json_data[`compare-tabs_1_city_${citiesOption.length}_name`])
  })

  test('should display cigarettes once city is selected',()=>{
    const citiesOption = getByTestId('select_city')

    // get the first item from json
    const cityOneValue = 1
    const cityOneName = json_data['compare-tabs_1_city_1_name']
    const cityOneTotalCigg = json_data['compare-tabs_1_city_1_cigg']
    const cityOneTotalPM = json_data['compare-tabs_1_city_1_aqi']
    fireEvent.change(citiesOption,{ target: { value: cityOneValue } })

    const nameTabDisplay = getByTestId(`compare-tabs_1_city_1_name`)
    const ciggTabDisplay = getByTestId(`compare-tabs_1_city_1_cigg`)
    const aqiTabDisplay = getByTestId(`compare-tabs_1_city_1_aqi`)

    expect(nameTabDisplay.textContent).toBe(cityOneName)
    expect(ciggTabDisplay.textContent).toBe(cityOneTotalCigg)
    expect(aqiTabDisplay.textContent).toBe(cityOneTotalPM)
    //
  })
})

describe('App | Hindi Version',()=>{
  let json_data;
  let getByTestId;
  let getAllByTestId;
  beforeEach(()=>{
    json_data = getJsonData('hindi')
    const {getByTestId:getById,getAllByTestId:getAllById} = render(<App />)
    const selectLang = getById('lang_version') 
    fireEvent.change(selectLang,{ target: { value: 'hindi' } })
    getByTestId = getById
    getAllByTestId = getAllById
  })
  test('should have an article section',()=>{
    const artitcleSection = getByTestId('article-section')
    expect(artitcleSection).toBeTruthy()
  })
  test('article section should have article info',()=>{
    const articleAuthor = getByTestId('article-author')
    const articleDate = getByTestId('article-date')
    const articleCategory = getByTestId('article-category')
    expect(articleAuthor.textContent).toBe(json_data[`article-info_1_byline`])
    expect(articleDate.textContent).toBe(json_data[`article-info_1_date`])
    expect(articleCategory.textContent).toBe(json_data[`article-info_1_category`])
  })
  test('should have hero-title',()=>{
    const heroTitle = getByTestId('hero-title')
    expect(heroTitle.textContent).toBe(json_data.hero_1_title)
  })
  test('should have compare-tabs_1_title and match value',()=>{
    const element = getByTestId('compare-tabs_1_title')
    expect(element.textContent).toBe(json_data['compare-tabs_1_title'])
  })
  test('should have compare-tabs_1_method and match value',()=>{
    const element = getByTestId('compare-tabs_1_method')
    expect(element.textContent).toBe(json_data['compare-tabs_1_method'])
  })
  test('should have p_1_value paragraph and match value',()=>{
    const paragraph = getByTestId('p_1_value')
    expect(paragraph.textContent).toBe(json_data.p_1_value)
  })
  test('should have p_2_value paragraph and match value',()=>{
    const paragraph = getByTestId('p_2_value')
    expect(paragraph.textContent).toBe(json_data.p_2_value)
  })
  test('should have p_3_value paragraph and match value',()=>{
    const paragraph = getByTestId('p_3_value')
    expect(paragraph.textContent).toBe(json_data.p_3_value)
  })
  test('should have p_4_value paragraph and match value',()=>{
    const paragraph = getByTestId('p_4_value')
    expect(paragraph.textContent).toBe(json_data.p_4_value)
  })
  test('should have p_5_value paragraph and match value',()=>{
    const paragraph = getByTestId('p_5_value')
    expect(paragraph.textContent).toBe(json_data.p_5_value)
  })
  test('should have p_6_value paragraph and match value',()=>{
    const paragraph = getByTestId('p_6_value')
    expect(paragraph.textContent).toBe(json_data.p_6_value)
  })
  test('should have p_7_value paragraph and match value',()=>{
    const paragraph = getByTestId('p_7_value')
    expect(paragraph.textContent).toBe(json_data.p_7_value)
  })
  test('should have p_8_value paragraph and match value',()=>{
    const paragraph = getByTestId('p_8_value')
    expect(paragraph.textContent).toBe(json_data.p_8_value)
  })
  test('should have p_9_value paragraph and match value',()=>{
    const paragraph = getByTestId('p_9_value')
    expect(paragraph.textContent).toBe(json_data.p_9_value)
  })
  test('should have p_10_value paragraph and match value',()=>{
    const paragraph = getByTestId('p_10_value')
    expect(paragraph.textContent).toBe(json_data.p_10_value)
  })
  test('city list should match what is json file value-by-value and index',()=>{
    const citiesOption = getAllByTestId('select_city_option') 
    // check the first item in list is same with content in json data
    expect(citiesOption[0].textContent).toBe(json_data[`compare-tabs_1_city_${1}_name`])

    /**
     * TODO
     *  Test for other items in list
     */

     // check the last item in list is same with content in json data
     expect(citiesOption[citiesOption.length - 1].textContent).toBe(json_data[`compare-tabs_1_city_${citiesOption.length}_name`])
  })
  test('should display cigarettes once city is selected',()=>{
    const citiesOption = getByTestId('select_city')

    // get the first item from json
    const cityOneValue = 1
    const cityOneName = json_data['compare-tabs_1_city_1_name']
    const cityOneTotalCigg = json_data['compare-tabs_1_city_1_cigg']
    const cityOneTotalPM = json_data['compare-tabs_1_city_1_aqi']
    fireEvent.change(citiesOption,{ target: { value: cityOneValue } })

    const nameTabDisplay = getByTestId(`compare-tabs_1_city_1_name`)
    const ciggTabDisplay = getByTestId(`compare-tabs_1_city_1_cigg`)
    const aqiTabDisplay = getByTestId(`compare-tabs_1_city_1_aqi`)

    expect(nameTabDisplay.textContent).toBe(cityOneName)
    expect(ciggTabDisplay.textContent).toBe(cityOneTotalCigg)
    expect(aqiTabDisplay.textContent).toBe(cityOneTotalPM)
    //
  })
})