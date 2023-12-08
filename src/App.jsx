import React from 'react';
import Card from './components/Card';
import icon1 from './assets/images/Group2.png'
import icon2 from './assets/images/Group 3.png'
import icon3 from './assets/images/Group 4.png'
import '../sass/main.scss';

function App() {
const $primary = `#e38826`;
const $secondary= `#006970`;
const $tertiray= `#004241`;
const $borderColor=`#FFF`
const data=[
{
  icon:icon1,
  heading:"SEDAN",
  desc:"Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
  btnDesc:"learn more",
  bgColor:$primary,
  border:$borderColor,
},
{
  icon:icon2,
  heading:"SUVs",
  desc:"Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
  btnDesc:"learn more",
  bgColor:$secondary,
  border:$borderColor,
},
{
  icon:icon3,
  heading:"Luxury",
  desc:"Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style. ",
  btnDesc:"learn more",
  bgColor:$tertiray,
  border:$borderColor,
},
]

  return <>
    <section className="card-component">
      <div className="container">
        <div className="row g-0">
          {
            data.map((e,i)=>{
              return <Card data={e} key={i} />
            })
          }
          
        </div>
      </div>
    </section>  
  </>
}

export default App