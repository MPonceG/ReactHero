

import { getHeroesByPublisher } from '../helpers/getHeroesByPublished'

export const HeroList = ({publisher}) => {
    debugger
    const heroes = getHeroesByPublisher(publisher);
    const listItems = heroes.map((heroe) =>
        <li key={heroe.toString()}>
          {heroe.superhero}
        </li>
      );
  return (
    <ul>
        {
            listItems
        }
    </ul>
  )
}
