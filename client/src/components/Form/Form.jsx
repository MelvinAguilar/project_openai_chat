import styles from "../../styles";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import send from "../../assets/images/send.svg";

import { useForm } from "react-hook-form";

const Form = ({ generateMessages, loading }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    generateMessages(data.code);
    reset();
  };

  return (
    <form
      className={`${styles.form} relative border-t-2 border-gray-500 text-white`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <label htmlFor="code" className="sr-only">
        Code
      </label>
      <textarea
        id="code"
        name="code"
        rows="1"
        cols="1"
        placeholder="Type your code here"
        className={`${styles.textarea}`}
        {...register("code", {
          required: {
            value: true,
            message: "Please add your code",
          },
        })}
      />
      <div aria-live="polite" aria-atomic="true">
        {errors.code && <ErrorMessage>{errors.code.message}</ErrorMessage>}
      </div>
      <button
        type="submit"
        aria-label="Send"
        disabled={loading}
        className={`${loading ? "opacity-50" : ""}`}
      >
        <img src={send} alt="" aria-hidden="true" width={24} height={24} />
      </button>
    </form>
  );
};

export default Form;
