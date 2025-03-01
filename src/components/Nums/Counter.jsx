import "./Counter.css";
import { useEffect, useRef, useState } from "react";

function Counter({ value }) {
  let begin = useRef(false);
  const [fade, setFade] = useState(false);
  let inter = useRef(null);
  const [cValue, setCValue] = useState(0);

  useEffect(() => {
    function runAnim() {
      if (!begin.current && window.scrollY >= 2350) {
        begin.current = true;
        inter.current = setInterval(() => {
          setCValue((val) => {
            if (val >= value) clearInterval(inter.current);
            return Math.min(
              val >= value - (value * 1) / 10
                ? val + (value * 1) / 10 / 75
                : val + (value - (value * 1) / 10) / (1000 / 30),
              value
            );
          });
        }, 30);
      }
      if (window.scrollY >= 2222) {
        setFade(true);
      }
    }
    document.addEventListener("scroll", runAnim);
    return () => document.removeEventListener("scroll", runAnim);
  }, [value]);

  return (
    <div
      style={{
        width: "20%",
        aspectRatio: "1",
        marginTop: "400px",
        marginBottom: "400px",
      }}
    >
      <div
        className={`
                    position-relative
                    text-center
                    ${fade ? "ctrs" : ""}
                    `}
        style={{
          width: "100%",
          aspectRatio: 1,
          fontSize: "85px",
          border: "10px rgb(51 65 85) solid",
          borderRadius: "50%",
          backgroundColor: "white",
          fontWeight: "bold",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="ctr"
          style={{
            transition: "1s",
            position: "absolute",
            top: "70%",
            opacity: "0.1",
          }}
        >
          {Math.round(cValue)}
        </div>
      </div>
      <div
        style={{
          fontSize: "40px",
          color: "white",
        }}
      >
        Songs
      </div>
    </div>
  );
}

export default Counter;
