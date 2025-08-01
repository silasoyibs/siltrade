function Tag(className, children) {
  return <span className={`${className} font-medium`}>{children}</span>;
}

export default Tag;
