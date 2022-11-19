import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

const FormAlert = ({ type, message }) => {
  return (
    <div className={`error error-${type}`}>
      <ExclamationCircleIcon className="error-icon" />
      {message}
    </div>
  );
};

export default FormAlert;
