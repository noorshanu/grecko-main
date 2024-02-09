function Title({ children, className }) {
  return (
    <h1
      className={` font-potta uppercase ${className}`}
    >
      {children}
    </h1>
  );
}

export default Title;
