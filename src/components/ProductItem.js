import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from '../../assets/styles'
import PropTypes from 'prop-types'
import { useNavigation } from '@react-navigation/native'

const ProductItem = ({ product }) => {
  const navigation = useNavigation()
  return (
        <TouchableOpacity onPress={() => {
          navigation.navigate('DetailedProduct', { product })
        }} style={[styles.productItemContainer, styles.shadow]}>
            <Image
                source={{ uri: product.images[0].small }}
                style={styles.productItemImage}
                resizeMode={'contain'}
            />
            <View style={styles.productItemTextsContainer}>
                <Text style={styles.productItemTitle}>{product.title}</Text>
                <Text style={styles.productItemPrice}>${product.price}</Text>
                <Text style={styles.productItemPrice}>Quantity remaining: {product.price}</Text>
            </View>
        </TouchableOpacity>

  )
}

ProductItem.propTypes = {
  product: PropTypes.object
}

export default ProductItem
