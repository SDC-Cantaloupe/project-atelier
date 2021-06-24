import React from 'react';

class ThumbnailCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: 0,
      end: this.props.imgs.length,
    };
  }

  rotateImgs(e) {
    var button = e.target.className;
    var start = this.state.start;
    if (button.includes('down')) {
      start++;
    } else {
      start--;
    }

    this.setState({
      start
    });
  }
  render() {
    var imgs;

    if (this.props.expanded) {
      imgs = this.props.imgs.slice(this.state.start, this.state.start + 7).map((img, key) => (
        <img
          onClick={(e) => this.props.setMainImg(e, key, img.url)}
          className={`overview-thumbnails-img${this.props.mainImg === img.url ? ' highlight' : ''}`}
          src={'https://static.vecteezy.com/system/resources/thumbnails/000/581/851/small/icon0-vector-104-01.jpg'}
          alt='style image'>
        </img>
      ));
    } else {
      imgs = this.props.imgs.slice(this.state.start, this.state.start + 7).map((img, key) => (
        <img
          onClick={(e) => this.props.setMainImg(e, key, img.url)}
          className={`overview-thumbnails-img${this.props.mainImg === img.url ? ' highlight' : ''}`}
          src={img.thumbnail_url}
          alt='style image'>
        </img>
      ));
    }

    return (
      <div className='overview-thumbnails'>
        {this.state.start !== 0 && <button onClick={(e) => this.rotateImgs(e)}className={'thumbnails-up'}>Up Arrow</button>}
        {imgs}
        {this.state.start + 7 < this.state.end && <button className='thumbnails-down' onClick={(e) => this.rotateImgs(e)}>Down Arrow</button> }
      </div>
    );
  }
}

export default ThumbnailCarousel;