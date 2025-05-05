import "./MuiSwitch.css"; // Make sure to import your CSS

export default function ThemeToggler({ onChange, checked }) {
  return (
    <div className="switch-container" onClick={() => onChange(!checked)}>
      <div
        className={`material-symbols-outlined icon ${
          checked ? "icon-dark" : "icon-light"
        }`}
      >
        {checked ? "dark_mode" : "light_mode"}
      </div>
    </div>
  );
}
