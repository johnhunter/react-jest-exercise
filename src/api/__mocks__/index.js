const range = n => [...Array(n).keys()];

const fetchArticles = () => {
  return Promise.resolve({
    response: {
      results: range(10).map(i => ({
        webUrl: `http://foo${i}.local/`,
        webTitle: `Some Title ${i}`
      }))
    }
  });
};

export default fetchArticles;
