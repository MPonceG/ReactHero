

import { useMemo } from 'react';
import { getHeroesByPublisher } from '../helpers'
import { HeroCard } from './index';

export const HeroList = ({publisher}:any) => {

    const heroes = useMemo(() => {
      return getHeroesByPublisher(publisher);
    }, [publisher]); 

    const listItems = heroes.map((hero) =>
        <HeroCard key={hero.id} {...hero} />
      );
  return (
    <div className='row rows-cols-1 row-cols-md-3 g-3'>
      {listItems}
    </div>
  )
}
