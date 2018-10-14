import React from "react";
import ReactDom from "react-dom";

import axios from "axios";

import { Search } from "./components/Search";

class App extends React.Component {
  constructor() {
    super();
    this.state = { gifUrlList: [] };
  }
  renderImageList(list) {
    const imageList = list.map(url => {
      return (
        <li>
          <img src={url} />
        </li>
      );
    });
    return <ul>{imageList}</ul>;
  }
  render() {
    console.log(this.state.gifUrlList);
    return (
      <div>
        <h1>gif検索するやつ</h1>
        <Search search={this.giphyapi} />
        {this.renderImageList(this.state.gifUrlList)}
      </div>
    );
  }

  giphyapi = title => {
    //リクエスト先のURLを作る
    const search = title;
    const key = "TjTZuEOFWOpvYl98kL6xJQfInMwnpS9z";
    const limit = "10";
    const url = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${key}&limit=${limit}`;

    //axios request
    axios.get(url).then(res => {
      //dataを習得できた
      console.log(res.data);
      const data = res.data.data;

      //img　のsrcに入れるためのURLにアクセスする
      //const imageUrl = data[0].images.downsized.url;
      //0番目だけじゃないものにする
      const imageUrlList = data.map(item => item.images.downsized.url);
      //console.log(imageUrl);
      this.setState({ gifUrlList: imageUrlList });

      //img要素を作って、Bodyに追加（reactではいらないので消）
      //const img = document.createElement("img");
      //img.src = imageUrl;
      //document.body.appendChild(img);
    });
  };
}

ReactDom.render(<App />, document.getElementById("root"));
