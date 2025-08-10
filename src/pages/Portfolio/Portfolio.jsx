import { PageWrapper } from '../../components/shared/PageWrapper';
import './Portfolio.css';
import { Collection } from '../../components/Collection/Collection';

export const Portfolio = () => {
  return (
    <PageWrapper>
      <div className="portfolio__container container">
        <h2>Tady je seznam kolekcí</h2>
        <Collection />
      </div>
    </PageWrapper>
  );
};
