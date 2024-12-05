import Star from "./Star.tsx";

interface StarsProps {
  count: number
}

function Stars({count}: StarsProps) {
  if (count < 1 || count > 5) {
    console.error('Неверное значение рейтинга');
    return;
  }

  return (
    <ul className="card-body-stars u-clearfix">
      {Array(count).fill(null).map((_, index) => (
        <li key={index}>
          <Star />
        </li>
      ))}
    </ul>
  )
}


export default Stars
