type HeaderProps = {
  image: string;
  title: string;
};

export const Header = (props: HeaderProps) => {
  let { title, image } = props;
  return <p>{title}</p>;
};
