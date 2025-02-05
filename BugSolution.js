import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulate asynchronous data fetching
    setTimeout(() => {
      setData({ name: 'John Doe', age: 30 });
    }, 1000);
  }, []);

  return (
    <div>
      {/* Using optional chaining to safely access data properties */}
      {data?.name} is {data?.age} years old.
    </div>
  );
};
export default MyComponent;