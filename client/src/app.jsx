import React from 'react';
import RelatedProducts from './related/relatedProducts.jsx';
import Review from './review/review.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1 id='test'>Hello World test!</h1>
        <RelatedProducts />
        <Review />
      </div>
    )
  }
}

export default App;

