import React from 'react'
import { View, Text, Image } from 'react-native'
import { useRoute } from '@react-navigation/native'
import styles from '../../assets/styles'

const DetailedProduct = () => {
  const { product } = useRoute().params
  console.log(product)
  return (
    <>
    <Image
        source={{ uri: product.images[0].large }}
        style={styles.productDetailedImage}
        resizeMode={'contain'}
    />
    <View style={styles.productDetailedTextsContainer}>
        <Text style={styles.productDetailedText}>Title: {product.title}</Text>
        <Text style={styles.productDetailedText}>Price: ${product.price}</Text>
        <Text style={styles.productDetailedText}>Quantity remaining: {product.price}</Text>
        <Text style={styles.productDetailedText}>Favorite: {product.favorite ? 'Yes' : 'No'}</Text>
    </View>
    </>
  )
}

export default DetailedProduct
