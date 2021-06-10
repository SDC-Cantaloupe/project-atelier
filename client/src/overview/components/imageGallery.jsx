import React from 'react';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainImg: this.props.photos[0].url,
      currentIndex: 0,
      thumbnailImgs: this.props.photos,
      currentImg: null,
      firstImg: this.props.photos[0].url,
      lastImg: this.props.photos[this.props.photos.length - 1].url,
      enlarge: false

    };

    this.setMainImage = this.setMainImg.bind(this);
    this.enlarge = this.enlargeImg.bind(this);
  }

  setMainImg(e, i) {
    e.preventDefault();
    var mainImg = e.target.src || this.props.photos[i].url;
    this.setState({
      mainImg,
      currentIndex: i
    })
  }

  enlargeImg() {
    var enlarge = !this.state.enlarge;
    this.setState({
      enlarge
    }, console.log(this.state.enlarge));
  }
//need state for first and last picture
//display right arrow on fist img
//display left arrow on last img
//display both other wise


  render() {
    return (
      <div className='overview-image-gallery' data-testid='image-gallery'>
        <img className={`overview-image-gallery-mainImg${this.state.enlarge ? '-enlarge' : ''}`} src={this.state.mainImg} width='400' height='600'></img>
        <div className='overview-thumbnails'>
          {this.state.thumbnailImgs.slice(0, 7).map((img, key) => (
            <img onClick={(e) => this.setMainImg(e, key)} className={`overview-thumbnails-img${this.state.mainImg === img.url ? '-highlight' : ''}`}src={img.url} width='100' height='100'></img>
          ))}
        </div>
        <button onClick={(e) => this.setMainImage(e, this.state.currentIndex - 1)}className='overview-image-gallery-left-arrow'>L</button>
        <button onClick={(e) => this.setMainImage(e, this.state.currentIndex + 1)} className='overview-image-gallery-right-arrow'>R </button>
        <button onClick={() => this.enlargeImg()} >Make Bigger</button>
      </div>
    );
  }
}

export default ImageGallery;