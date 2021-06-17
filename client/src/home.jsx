import React from 'react';
import RelatedProducts from './related/relatedProducts.jsx';
import Review from './review/review.jsx';
import ProductOverview from './overview/overview.jsx';
class Home extends React.Component {
  constructor(props) {
    super(props);
    const params = new URLSearchParams(this.props.location.search);
    const id = params.get('product');
    this.state = { id };
  }

  render() {
    console.log(this.state.id)
    return (
      <div>
        <ProductOverview id={this.state.id}/>
        <RelatedProducts />
        <Review id={this.state.id} />
      </div>
    );
  }
}

export default Home;

