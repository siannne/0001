// components/ExploreScreen.tsx

import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const items = [
  {
    id: '1',
    title: '허리통증 완화',
    image: require('../assets/thumb2.png'),
    style: { height: 300, width: windowWidth * 0.39 },
  },
  {
    id: '2',
    title: '팔 통증 풀기',
    image: require('../assets/thumb3.png'),
    style: { height: 300, width: windowWidth * 0.52 },
  },
];

export default function ExploreScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* 상단 첫 번째 줄: 이미지 + 텍스트 박스 */}
      <View style={styles.row}>
        {/* 거북목 스트레칭 카드 */}
        <TouchableOpacity style={[styles.card, { width: windowWidth * 0.58, height: 180 }]}>
          <Image source={require('../assets/thumb1.png')} style={styles.image} resizeMode="cover" />
          <View style={styles.overlay}>
            <Text style={styles.text}>거북목 스트레칭</Text>
          </View>
        </TouchableOpacity>

        {/* 텍스트 카드 */}
        <TouchableOpacity style={styles.textCard}>
          <Text style={styles.textCardTitle}>나도 같이</Text>
          <Text style={styles.textCardSub}>스트레칭 하기</Text>
        </TouchableOpacity>
      </View>

      {/* 이미지 카드들 */}
      <View style={styles.grid}>
        {items.map((item) => (
          <TouchableOpacity key={item.id} style={[styles.card, item.style]}>
            <Image source={item.image} style={styles.image} resizeMode="cover" />
            <View style={styles.overlay}>
              <Text style={styles.text}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        ))}

        {/* 앉아서 하는 스트레칭 + 텍스트 카드 */}
        <View style={styles.row}>
          <TouchableOpacity style={[styles.card, { width: windowWidth * 0.58, height: 150 }]}>
            <Image source={require('../assets/thumb4.png')} style={styles.image} resizeMode="cover" />
            <View style={styles.overlay}>
              <Text style={styles.text}>앉아서 하는 스트레칭</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.textCard}>
            <Text style={styles.textCardTitle}>간단하게</Text>
            <Text style={styles.textCardSub}>스트레칭 해요!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  textCard: {
    width: windowWidth * 0.35,
    height: 180,
    backgroundColor: '#e6f0ff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8 ,
  },
  textCardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2a8bff',
  },
  textCardSub: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2a8bff',
    marginTop: 4,
    textAlign: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    justifyContent: 'space-between',
  },
  card: {
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 8,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    bottom: 8,
    left: 8,
    right: 8,
    backgroundColor: 'rgba(0,0,0,0.4)',
    paddingVertical: 4,
    paddingHorizontal: 6,
    borderRadius: 6,
  },
  text: {
    color: '#fff',
    fontSize: 14,
  },
});
