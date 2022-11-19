import { ExclamationCircleIcon } from "@heroicons/react/24/solid";

const Alert = ({ type, message }) => {
  return (
    <div className={`error error-${type}`}>
      <ExclamationCircleIcon className="error-icon" /> {message}
    </div>
  );
};

export default Alert;
