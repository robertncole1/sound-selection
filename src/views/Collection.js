import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CollectionCard from '../Components/CollectionCard';
import {
  getCollectionArtists, getCollectionLabels, getCollectionMasters, getCollectionReleases
} from '../helpers/data/axios';

function Collection({ user }) {
  const [releases, setReleases] = useState([]);
  const [artists, setArtists] = useState([]);
  const [labels, setLabels] = useState([]);
  const [masters, setMasters] = useState([]);

  useEffect(() => {
    getCollectionReleases(user)
      .then((releasesArray) => {
        setReleases(releasesArray);
      });
  }, []);

  useEffect(() => {
    getCollectionArtists(user)
      .then((ArtistsArray) => {
        setArtists(ArtistsArray);
      });
  }, []);

  useEffect(() => {
    getCollectionLabels(user)
      .then((LabelsArray) => {
        setLabels(LabelsArray);
      });
  }, []);

  useEffect(() => {
    getCollectionMasters(user)
      .then((MastersArray) => {
        setMasters(MastersArray);
      });
  }, []);

  return (
    <>
      <h2>My Releases</h2>
      <div className='my-search'>
        {releases.map((result) => (
          <CollectionCard
            key={result.firebaseKey}
            firebaseKey={result.firebaseKey}
            title={result.title}
            notes={result.notes}
            country={result.country}
            cover_image={result.cover_image}
            barcode={result.barcode}
            year={result.year}
            format={result.format}
            type={result.type}
            user={user}
            id={result.id}
            releases={releases}
            setReleases={setReleases}
          />
        ))}
        </div>
        <h2>My Artists</h2>
        <div className='my-search'>
        {artists.map((result) => (
          <CollectionCard
            key={result.firebaseKey}
            firebaseKey={result.firebaseKey}
            title={result.title}
            notes={result.notes}
            country={result.country}
            cover_image={result.cover_image}
            barcode={result.barcode}
            year={result.year}
            format={result.format}
            type={result.type}
            id={result.id}
            user={user}
            artists={artists}
            setArtists={setArtists}
          />
        ))}
        </div>
        <h2>My Labels</h2>
        <div className='my-search'>
        {labels.map((result) => (
          <CollectionCard
            key={result.firebaseKey}
            firebaseKey={result.firebaseKey}
            title={result.title}
            notes={result.notes}
            country={result.country}
            cover_image={result.cover_image}
            barcode={result.barcode}
            year={result.year}
            format={result.format}
            type={result.type}
            user={user}
            id={result.id}
            labels={labels}
            setLabels={setLabels}
          />
        ))}
        </div>
        <h2>My Masters</h2>
        <div className='my-search'>
        {masters.map((result) => (
          <CollectionCard
            key={result.firebaseKey}
            firebaseKey={result.firebaseKey}
            title={result.title}
            notes={result.notes}
            country={result.country}
            cover_image={result.cover_image}
            barcode={result.barcode}
            year={result.year}
            user={user}
            format={result.format}
            type={result.type}
            id={result.id}
            masters={masters}
            setMasters={setMasters}
          />
        ))}
        </div>
    </>
  );
}

Collection.propTypes = {
  user: PropTypes.any,
};

export default Collection;