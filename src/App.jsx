 import React from 'react'
 import Navbar from './components/Navbar'
 import Hero from './components/Hero'
 import { Feature } from './components/Feature'
   import Discount from './components/Discount'
 import FeatureProduct from './components/FeatureProduct'
 import Blogs from './components/Blogs'
 const App = () => {
   return (
    <main>
    <Navbar/>
<Hero/>
<Feature/>

<FeatureProduct/>
 <Discount/>
 <Blogs/>
    </main>
   )
 }
 
 export default App