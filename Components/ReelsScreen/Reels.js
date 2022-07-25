import { View, Text} from 'react-native'
import React ,{useState}from 'react'
import {SwiperFlatList} from 'react-native-swiper-flatlist'
import { ReelsData } from '../../Data/ReelsData'
import SingleReel from './SingleReel'

export default function Reels() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChangeIndexValue = ({index}) => {
    setCurrentIndex(index);
  };

  return (
    <SwiperFlatList
      vertical={true}
      onChangeIndex={handleChangeIndexValue}
      data={ReelsData}
      renderItem={({item, index}) => (
        <SingleReel item={item} index={index} currentIndex={currentIndex} />
      )}
      keyExtractor={(item, index) => index}
    />
  );
}