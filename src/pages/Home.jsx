import { useEffect, useState } from "react";

function Home() {
  let [data, setData] = useState(0);

  useEffect(() => {
    //component mounted
    console.log("Home mounted");
    //component unmounted
    return () => {
      console.log("Home unmounted");
    };
  }, []);

  return (
    <>
      <div className="mt-24">
        <h1 className="text-center text-2xl font-bold">
          This is home page. Data: {data}
        </h1>
        <div className="text-center">
          <button
            onClick={() => {
              setData(data + 1);
            }}
            className="bg-violet-100 text-violet-700 p-3 mt-3"
          >
            Update Data
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
