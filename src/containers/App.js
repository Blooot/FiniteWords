import React, { Component } from 'react';
import WordList from '../components/WordList';
// import { render } from "react-dom"; todo: infinite scroll
import { shuffleKanji } from '../kanji';

// import InfiniteScroll from 
// 'react-infinite-scroll-component';


class App extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     error: false,
  //     hasMore: true,
  //     isLoading: false,
  //     shuffleKanji: [],
  //   }
  // }
  

  render() {
    return (
     
    (
       <WordList shuffleKanji={shuffleKanji} />
    )
    );
  }
}

export default App;
