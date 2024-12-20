import { useState } from "react";
import Counter from "./counter";

const CounterApp = () => {
  const [show, setShow] = useState(true);
  const handleChange = (e) => {
    setShow(e.target.checked);
  };
  return (
    <div>

      {/* mempertahankan state */}
      <Counter/>
      <Counter/>


      {/* reset state dengan mengubah posisi component */}

      {/* {!show && <Counter />}
      {show && <Counter />} */}

      {/* {show ? (
        <div>
          <Counter />
        </div>
      ) : (
        <section>
          <Counter />
        </section>
      )} */}

      {/* mengubah dengan comp lain */}
      {/* {show ? <Counter /> : <p>asdasd</p>} */}

      {/* setiap dirender ulang maka state akan tereset */}



      <input type="checkbox" value={show} onChange={handleChange} />
    </div>
  );
};

export default CounterApp;
