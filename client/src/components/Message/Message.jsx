import { useState } from "react";
import bot from "../../assets/images/bot.svg";
import user from "../../assets/images/user.svg";
import { useRef, useEffect } from "react";
import styles from "../../styles";

const Message = ({ message, type, id, loading }) => {
  const [text, setText] = useState("");
  const ref = useRef(null);

  let interval = {};
  useEffect(() => {
    if (loading) {
      ref.current.textContent = "";

      interval = setInterval(() => {
        ref.current.textContent += ".";

        if (ref.current.textContent === "....") ref.current.textContent = ".";
      }, 200);
    } else {
      if (type === "bot") {
        ref.current.textContent = "";
        typeText(ref, message);
      }
    }
    return () => {
      clearInterval(interval);
    };
  }, [loading]);

  const typeText = (ref, text) => {
    if (loading) return;
    let index = 0;

    let newInterval = setInterval(() => {
      if (index === text.length - 1) clearInterval(newInterval);

      ref.current.textContent += text[index];

      index++;
    }, 20);
  };

  return (
    <div
      className={`${
        type === "bot" ? "bg-[#40414F]" : ""
      } w-full flex-1 p-[0.9375rem]`}
      aria-live="polite"
      aria-atomic="true"
    >
      <div className={`${styles.chat}`}>
        <div
          className={`${styles.profile} ${
            type === "bot" ? "bg-[#10a37f]" : "bg-[#5436DA]"
          }`}
        >
          <img src={type === "bot" ? bot : user} alt={type} />
        </div>
        <div className={`${styles.message}`} id={id}>
          <p ref={ref}>{type === "bot" ? text : message}</p>
        </div>
      </div>
    </div>
  );
};

export default Message;
