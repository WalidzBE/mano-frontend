import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, View } from 'react-native'
import styles from '../../assets/styles'
import ProductItem from '../components/ProductItem'
import ProductsService from '../services/Products'

const Products = (props) => {
  const [products, setProducts] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    ProductsService.getWhatsNew().then((response) => {
      if (response.data.success) {
        setProducts(response.data.data.items)
        setLoading(false)
      }
    })
  }, [])

  if (loading) {
    return (
        <View style={styles.activityIndicatorContainer}>
            <ActivityIndicator></ActivityIndicator>
        </View>
    )
  }

  return (
        <FlatList
        keyExtractor={(item) => item.id}
        style={{ flex: 1, width: '100%' }}
        data={products}
        renderItem={({ item }) => <ProductItem product={item}/>}>

        </FlatList>
  )
}

export default Products
