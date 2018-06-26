import _ from 'underscore'
import axios from 'axios'
import apiMeta from '../apiDetails/apiManifest'

export function runAll (dispatch, payload) {
  for (let i = 0; i < apiMeta.length; i++) {
    makeAPICall(apiMeta[i], dispatch)
  }
}

export function runTest (dispatch, payload) {
  const selectedAPI = _.findWhere(apiMeta, { id: payload.id })
  if (selectedAPI) {
    makeAPICall(selectedAPI, dispatch)
  }
}

function makeAPICall(selectedAPI, dispatch) {
  return axios({
    url: selectedAPI.url,
    method: selectedAPI.method,
    params: selectedAPI.params,
    headers: {
      Cookie: selectedAPI.cookies
    },
    withCredentials: true
  }).then(({data}) => {
    testJSONStructure(selectedAPI.json, data).then(({finalResult, errorResult}) => {
      dispatch({
        type: 'TESTS_RUN',
        payload: {
          id: selectedAPI.id,
          result: {
            finalResult, errorResult
          }
        }
      })
    })
  }).catch((err) => {
    console.log(err)
  })  
}

function testJSONStructure (json, data) {
  return new Promise((resolve, reject) => {
    const finalResult = {}
    const errorResult = []
    const path = []
    parseJSON(json, data, path, finalResult, errorResult)
    resolve({finalResult, errorResult})    
  })
}

function parseJSON (json, data, path, result, errorResult) {
  for (let key in json) {
    // Check if key exists
    const keyExists = data[key] ? true : false
    result[key] = {
      data: data[key],
      found: keyExists,
      path: path
    }

    if (!keyExists) { 
      errorResult.push({
        path: path,
        message: `${key} not found`
      })
      continue
    }

    // Check type
    let typeMatched
    switch (json[key].type) {
      case 'String':
        typeMatched = (typeof data[key] === 'string') ? true : false
        break
      case 'Array':
        typeMatched = Array.isArray(data[key]) ? true : false
        break
      case 'Object':
        typeMatched = (typeof data[key] === 'object') ? true : false
        break
      case 'Number':
        typeMatched = (typeof data[key] === 'number') ? true : false
        break
      case 'Enum':
        const value = data[key]
        const possibleValues = json[key].possibleValues
        if (Array.isArray(possibleValues)) {
          typeMatched = (possibleValues.indexOf(value) !== -1)
        }
        break
      case 'Constant':
        const currentValue = data[key]
        const expectedValue = json[key].expectedValue

        typeMatched = (currentValue === expectedValue)
        break
    }

    result[key] = Object.assign({}, result[key], {
      typeExpected: json[key].type,
      typeMatched: typeMatched
    })

    if (!typeMatched) {
      errorResult.push({
        path: path,
        message: `${key} type not matched`
      })      
    }

    // Iterating through the nested keys if Array
    if ( 
      json[key].type === 'Array' && 
      json[key].value && 
      typeMatched 
    ) {
      result[key].value = []
      for (let i = 0; i < data[key].length; i++) {
        const newPath = path.slice(0)
        newPath.push(`${key}[${i}]`)
        result[key].value[i] = {}

        parseJSON(json[key].value, data[key][i], newPath, result[key].value[i], errorResult)
      }
    }

    // Iterating through the nested keys if Object
    if (
      json[key].type === 'Object' && 
      json[key].value && 
      typeMatched
    ) {
      const newPath = path.slice(0)
      newPath.push(key)
      result[key].value = {}

      parseJSON(json[key].value, data[key], newPath, result[key].value, errorResult)
    }
  }
}
