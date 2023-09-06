import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LoadingBlock: React.FC = () => {
  return (
    <div>
      <h3>Loading...</h3>
    </div>
  );
}

const fetchData = async () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [booksData, setBooksData] = useState<any[]>([]);
  const url = `https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=${cardPerPage}&startIndex=0&orderBy=${sort}&key=${API_KEY}`;

  useEffect(() => {
    setIsLoading(true);
    setBooksData([]);
    axios.get(url)
      .then(res => {
        setTotalBook(res.data.totalItems);
        setBooksData(res.data.items);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      {isLoading ? (
        <LoadingBlock />
      ) : (
        // Your data rendering code here
      )}
    </div>
  );
}

export default fetchData;