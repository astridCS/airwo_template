import PropTypes from "prop-types";

const Input = ({
  label,
  type,
  name,
  autocomplete,
  required,
  pattern,
  className,
  onChange,
  value,
}) => {
  return (
    <label className={className || "flex flex-col gap-1"}>
      {label}
      <input
        type={type}
        name={name}
        onChange={(e) => onChange(e)}
        value={value || ""}
        autoComplete={autocomplete || ""}
        required={!!required}
        pattern={pattern}
        className="border border-gray-300 dark:bg-gray-50 rounded-md p-2 disabled:cursor-not-allowed"
      />
    </label>
  );
};
////  Je définis les types des propriétés attendues par le composant Input.
Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  autocomplete: PropTypes.string,
  required: PropTypes.bool,
  pattern: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};
export default Input;
