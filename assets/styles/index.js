import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  productItemContainer: {
    flexDirection: 'row',
    width: '90%',
    height: 100,
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  },
  productItemTitle: {
    fontSize: 16
  },
  productItemImage: { height: '100%', aspectRatio: 1 },
  activityIndicatorContainer: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center'
  },
  productItemTextsContainer: {
    flex: 1,
    height: '100%'

  },
  productDetailedImage: { width: '100%', aspectRatio: 1 },
  productDetailedTextsContainer: {
    margin: 10
  },
  productDetailedText: {
    fontSize: 16
  }
})

export default styles
