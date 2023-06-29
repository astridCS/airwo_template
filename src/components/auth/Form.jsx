import Button from "../Button";
import Input from "../Input";
import PropTypes from "prop-types";

const Form = ({
  label,
  handleClick,
  email,
  setEmail,
  password,
  setPassword,
  name,
  setName,
  buttonLabel,
  error,
  emailError, // Destructure le prop  emailError 
}) => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">{label}</h2>

      {/* Affichage du message d'erreur  */}
      {error && <p className="text-red-500">{error}</p>} 

      <form className="flex flex-col gap-4" data-bitwarden-watching="1">
        {(label === "Register" || label === "My Profile") && (
          <Input
            label="Name"
            type="text"
            name="name"
            autocomplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        )}
        <div className="relative">
          <Input
            label="Email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
          />
          {emailError && (
            <span className="text-red-500 absolute left-0 bottom-[-20px]">
              {emailError}
            </span>
          )}
        </div>
        
        <Input
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autocomplete="current-password"
          required
          pattern=".{6,}"
        />

        <Button
          type="submit"
          label={buttonLabel}
          onClick={(e) => handleClick(e)}
        />
      </form>
    </>
  );
};

// Validation des types des props
Form.propTypes = {
  label: PropTypes.string,
  handleClick: PropTypes.func,
  email: PropTypes.string,
  setEmail: PropTypes.func,
  password: PropTypes.string,
  setPassword: PropTypes.func,
  name: PropTypes.string,
  setName: PropTypes.func,
  buttonLabel: PropTypes.string,
};

export default Form;
