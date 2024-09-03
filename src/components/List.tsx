type Props = {
  id: number;
  title: string;
  year: string;
  link: string;
  onHover: (id: number) => void;
  onUnhover: () => void;
};

export default function List(props: Props) {
  function handleMouseEnter() {
    props.onHover(props.id);
  }
  function handleMouseLeave() {
    props.onUnhover();
  }

  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      <li
        id={props.id.toString()}
        className="text-2xl border-b-2 mx-8 flex justify-between mt-6 pb-6"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <p>{props.title}</p>
        <p>{props.year}</p>
      </li>
    </a>
  );
}
