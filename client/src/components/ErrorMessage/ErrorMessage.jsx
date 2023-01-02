const ErrorMessage = ({ children, ...props }) => {
  return (
    <span
      className={`absolute top-[-2.5rem] right-[0.5rem] rounded-sm bg-red-500 p-2 text-sm font-medium`}
      {...props}
      role="alert"
    >
      {children}
    </span>
  );
};

export default ErrorMessage;
