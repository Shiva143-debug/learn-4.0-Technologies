import CardItem from './components/CardItem'

import './App.css'

const cardsList = [
  {
    id: 1,
    title: 'Data Scientist',
    description:
      'Data scientists gather and analyze large sets of structured and unstructured data',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/data-scientist-img.png',
    className: 'card-1',
  },
  {
    id: 2,
    title: 'IOT Developer',
    description:
      'IoT Developers are professionals who can develop, manage, and monitor IoT devices.',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/iot-developer-img.png',
    className: 'card-2',
  },
  {
    id: 3,
    title: 'VR Developer',
    description:
      'A VR developer creates completely new digital environments that people can see.',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/vr-developer-img.png',
    className: 'card-3',
  },
  {
    id: 4,
    title: 'ML Engineer',
    description:
      'Machine learning engineers feed data into models defined by data scientists.',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/ml-engineer-img.png',
    className: 'card-4',
  },
]

const App = () => (
  <div className="bg-container">
    <h1 className="title">Learn Technologies</h1>
    <p className="m-para">
      Get trained by alumni of IITs and top companies like amazon,microsoft
      intel,Nvida,Qualocomm,etc, Learn Directly from professionals involved in
      product Devolpment.
    </p>
    <div className="main-cards-container">
      <div className="cards">
        <ul>
          {cardsList.map(eachItem => (
            <CardItem cardDetails={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    </div>
  </div>
)

export default App
