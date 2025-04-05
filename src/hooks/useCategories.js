import React, { useEffect, useState } from 'react'
import api from '../api';

const useCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(function() {
    api.get('categories')
    .then(res => {
        // console.log(res.data)
        setCategories(res.data)
    })
    .catch(err => console.log(err.message))
}, [])

  return categories;
}

export default useCategories;