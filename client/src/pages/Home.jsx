import React from 'react'
import Hero from '../components/Hero/Hero'
import Products from '../components/Products/Products'
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from '../components/TopProducts/TopProducts'



const Home = () => {
    const [orderPopup, setOrderPopup] = React.useState(false);

    const handleOrderPopup = () => {
      setOrderPopup(!orderPopup);
    };
    React.useEffect(() => {
      AOS.init({
        offset: 100,
        duration: 800,
        easing: "ease-in-sine",
        delay: 100,
      });
      AOS.refresh();
    }, []);
  return (
    <div>
        <Hero handleOrderPopup={handleOrderPopup}/>
        <Products handleOrderPopup={handleOrderPopup}/>
        {/* <TopProducts handleOrderPopup={handleOrderPopup}/> */}
    </div>
  )
}

export default Home