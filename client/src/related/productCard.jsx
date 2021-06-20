import React from 'react';
import StarRating from '../review/starRating.jsx';
import SalePrice from './salePrice.jsx';


class ProductCard extends React.Component {

  render() {
    var iconSrc, onIconClick;
    if (this.props.cardType === 'related') {
      iconSrc = 'https://cdn3.iconfinder.com/data/icons/sympletts-free-sampler/128/star-512.png';
    } else {
      iconSrc = 'https://i.dlpng.com/static/png/6978437_preview.png';
    }
    return (
      <div className="related_productCard">
        <img className='related_productCardImage' src={this.props.productInfo.image || 'https://static.thenounproject.com/png/1103191-200.png'} onClick={(event) => {
          event.preventDefault();
          this.props.handleCardClick(this.props.productInfo.id);
        }}></img>
        <img className='related_icon' src={iconSrc} onClick={(event) => {
          var comparisonProd = {
            name: this.props.productInfo.name,
            features: this.props.productInfo.features
          };
          this.props.onStarClick(comparisonProd);
          event.preventDefault();
        }}></img>
        <div className='related_details' onClick={(event) => {
          event.preventDefault();
          this.props.handleCardClick(this.props.productInfo.id);
        }}>
          <p>{this.props.productInfo.category}</p>
          <p>{this.props.productInfo.name}</p>
          <SalePrice original_price={this.props.productInfo.original_price} sale_price={this.props.productInfo.sale_price} />
          <StarRating rating={this.props.productInfo.avgReview} />
        </div>
      </div>
    );
  }
}

export default ProductCard;