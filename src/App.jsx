import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

// https://newsapi.org/v2/everything?q=tesla&from=2022-08-11&sortBy=publishedAt&apiKey=b3e5d1e8c95949c2b40cb31a71e22ee6

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function getNews() {
      try {
        let request = await fetch("https://newsapi.org/v2/everything?q=tesla&from=2022-08-11&sortBy=publishedAt&apiKey=b3e5d1e8c95949c2b40cb31a71e22ee6");

        let response = await request.json();

        setNews(response.articles);
      } catch (e) {
        console.log(error.message);
      }
    }

    getNews();
  }, []);

  console.log(news);

  return (
    <div className="App">
      <button className="btn btn-primary">Button</button>
      <div className="table-responsive">
        <table className="table table-hover">
          <thead>
            <th>Author</th>
            <th>Title</th>
            <th>Content</th>
            <th>Description</th>
            <th>Published at</th>
          </thead>
          <tbody>
            {news.map((news) => {
              return (
                <tr>
                  <td>{news.author}</td>
                  <td>{news.title}</td>
                  <td>{news.content}</td>
                  <td>{news.description}</td>
                  <td>{news.publishedAt}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
