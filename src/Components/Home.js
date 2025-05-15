import { useEffect, useInsertionEffect, useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  function handalClike() {
    navigate('/about')
  }

  // useEffect
  useEffect(() => {
    console.log("useEffect called");

    const id = setInterval(() => {
      console.log('interval run');
    }, 1000);

    return () => {
      clearInterval(id);
      console.log("home unmount and interval clear");
    };
  }, []);


//useLayoutEffect
  useLayoutEffect(() => {
    document.body.style.backgroundColor = 'red';
    console.log("useLayoutEffect called");

    return () => {
      document.body.style.backgroundColor = 'white';
    };
  }, []);


  //useInsertionEffect
  useInsertionEffect(() => {
    console.log("It runs before useLayoutEffect");
    document.body.style.backgroundColor = "white";
    document.body.style.color = "red";
  }, []);

  return (
    <div>
      This is home
      <div>
        <button onClick={handalClike}>Go to about</button>
      </div>
    </div>
  )
}

export default Home


