export default function toggleTheme(currentTheme, setCurrentTheme) {
  const newTheme = currentTheme === "light" ? "dark" : "light";
  setCurrentTheme(newTheme);
  localStorage.setItem("theme", newTheme);
};