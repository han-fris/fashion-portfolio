import { PageWrapper } from '../../components/shared/PageWrapper';
import './Portfolio.css';
import { Link } from 'react-router-dom';
import { CollectionPage } from '../CollectionPage/CollectionPage'

export const Portfolio = () => {
  return (
    <PageWrapper>
      <div className="portfolio__container container">
        <h2>Tady je seznam kolekcí</h2>
           <Link to="/collection" className="collection_link" onClick={() => setMenuOpen(false)}>
            Oddity
          </Link>
      </div>
    </PageWrapper>
  );
};
