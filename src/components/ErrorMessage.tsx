import "../styles/ErrorMessage.css";

const ErrorMessage = ({ message }: { message: string }) => {
  return <div className="error-message">{message}</div>;
};

export default ErrorMessage;
