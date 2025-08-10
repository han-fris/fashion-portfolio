import { PageWrapper } from '../../components/shared/PageWrapper';
import './CollectionPage.css';
import { Collection } from '../../components/Collection/Collection';

export const CollectionPage = () => {
  return (
    <PageWrapper>
      <div className="collectionPage__container container">
        <h2>Oddity collection</h2>
        <Collection />
      </div>
    </PageWrapper>
  );
};
