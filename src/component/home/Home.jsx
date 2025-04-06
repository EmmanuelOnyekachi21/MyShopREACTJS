import React, { useEffect, useState } from 'react'
import Banner from './Banner'
import ContainerHeader from './ContainerHeader'
import api from '../../api'
import PlaceHolderContainer from '../ui/PlaceHolderContainer'

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(function () {
    setLoading(true)
    api.get('store')
    .then((res) => {
      console.log(res.data);
      setProducts(res.data.results)
      setLoading(false)
    })
    .catch(err => {
      console.log(err.message);
      setLoading(false);
    });
  }, []);

  return (
    <section className="section-intro padding-y-sm">
        <div className="container">
            <Banner />
        </div>
        {
          (
            loading ? <PlaceHolderContainer /> 
            : <ContainerHeader products={products} />
          )
        }
        
    </section>
  )
}

export default Home