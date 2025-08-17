import React, { useState, useEffect } from 'react';

export default function FavoriteButton({ recipeId }) {
  const [favorite, setFavorite] = useState(() => {
    const stored = localStorage.getItem('favorites');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorite));
  }, [favorite]);

  const isFav = favorite.includes(recipeId);

  const toggle = () => {
    setFavorite(prev =>
      prev.includes(recipeId)
        ? prev.filter(id => id !== recipeId)
        : [...prev, recipeId]
    );
  };

  return (
    <button aria-label="favorite-toggle" onClick={toggle}>
      {isFav ? '💔 Remove from favorites' : '💜 Add to favorites'}
    </button>
  );
}