import React from 'react';

import CollectionItem from '../collection-item/collection-item.component'
import { CollectionPreviewContainer, TitleContainer, PreviewItemsContainer} from "./collection-preview.styles"

const CollectionPreview = ({ title, items }) => {
  return (
    <CollectionPreviewContainer>
      <TitleContainer>{title.toUpperCase()}</TitleContainer>
      <PreviewItemsContainer>
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewItemsContainer>
    </CollectionPreviewContainer>
  );
};

export default CollectionPreview;
