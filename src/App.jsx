import { useEffect, useState } from 'react'
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import Loader from './components/Loader/Loader';
import ImageGallery from './components/ImageGallery/ImageGallery';
import { getPhotos } from './services/api';
import SearchBar from './components/SearchBar/SearchBar';

function App() {

  const [images, setImages] = useState(null);
  const [isLoaiding, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false)
  const [searchQuery, setSearchQuery] = useState(null)

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const data = await getPhotos()
      setImages(data.images)
      } catch (err) { 
        setIsError(true)
      }
      finally { 
        setIsLoading(false);
      }
      
    }
    fetchData()
  }, [])
  
  useEffect(() => {
    if (searchQuery === null)
      return;
async function fetchDataByQuesry() {
      try {
        setIsLoading(true);
        const data = await getPhotos()
      setImages(data.images)
      } catch (err) { 
        setIsError(true)
      }
      finally { 
        setIsLoading(false);
      }
      
    }
    fetchDataByQuesry()
    
  }, [searchQuery])

  const onSetSearchQuery = (query) => {
    setSearchQuery(query);
  }

  return (
    <div>
      <h2>Gallery</h2>
      <SearchBar onSetSearchQuery={ onSetSearchQuery} />
      {isError && <ErrorMessage/>}
      {isLoaiding && <Loader />} 
      <ImageGallery images={images } />

      
    </div>
  )
}

export default App
