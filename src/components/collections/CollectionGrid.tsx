import React from 'react';
import { CollectionItem } from './CollectionItem';
import { collections } from './collectionsData';

export const CollectionGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {collections.map((item, index) => (
        <CollectionItem key={item.id} {...item} index={index} />
      ))}
    </div>
  );
};