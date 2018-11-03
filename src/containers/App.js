import React, { Component } from 'react';
import WordList from '../components/WordList';
import { shuffleKanji } from '../kanji';
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from 'react-loader-spinner';
import Header from '../components/Header/Header';


var x = 50;
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      shuffleKanji: shuffleKanji.slice(0, x),
      x: 50
    }
  }

  fetchMoreData = () => {
    // fake asynch api call which loads more kanji cards + adds delay for spinner :^)
    setTimeout(() => {
      this.setState({
        shuffleKanji: shuffleKanji.slice(0, x + 50),
        x: x = x + 50,
      })
    }, 1000);
  };


  render() {
    const { shuffleKanji } = this.state;
    return (
      (
        <div className='tc'>
        <Header/>
          <InfiniteScroll
            dataLength={shuffleKanji.length}
            next={this.fetchMoreData}
            hasMore={true}
            loader={<Loader
              type="Ball-Triangle"
              color="#ffffff"
              height="120"
              width="120"
            />}
          >
            <WordList shuffleKanji={shuffleKanji} />
          </InfiniteScroll>
        </div>
      )
    );
  }
}

export default App;
