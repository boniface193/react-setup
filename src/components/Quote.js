import { useState, useEffect } from 'react';

const baseURL = 'https://api.api-ninjas.com/v1/quotes?category=';
const APIKey = 'dlX2UMrDbnNYozWHHJKOHA==Ux8qGrlCMnhM04q8';

function Quotes() {
  const [data, setData] = useState([{ quote: null, author: null, category: null }]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const data = await fetch(`${baseURL}marriage`, { headers: { 'X-Api-Key': APIKey }, ContentType: 'application/json' });
        const res = await data.json();
        setData(res);
      } catch (error) {
        setError(true);
      }
      setIsLoading(false);
    }
    fetchData();
  }, [setData, setIsLoading]);

  if (error) {
    return (<div>an error has occured</div>);
  }
  if (isLoading) {
    return (<div>Please wait a moment...</div>);
  }

  return (
    <section>
      <h4>{data[0].category}</h4>
      <h6>{data[0].author}</h6>
      <aside>{data[0].quote}</aside>
    </section>
  );
}

export default Quotes;
