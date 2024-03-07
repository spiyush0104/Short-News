import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';
import styles from '../../Style/styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import axios from 'react-native-axios';
import Swiper from 'react-native-swiper';

const screenWidth = Dimensions.get('window').width;
const Home = () => {
  const [posts, setPosts] = useState([]);
  const [press , setpress] =useState (false);
  const featchData = async () => {
    try {
      const reasponse = await axios.get('http://localhost:3000/posts');
      setPosts(reasponse.data);
      console.log('reasponse===>', reasponse.data);
    } catch (error) {
      console.error(error);
    }
  };
  const handleTouch=()=>{
    setpress(!press)

  }
  useEffect(() => {
    featchData();
  }, []);

  return (
    //  full page container
    //  full page container
    <View style={{flex: 1}}>
      <Swiper
        horizontal={false}
        loop={true}
        showsButtons={false}
        showsPagination={false}>
        {posts.map(post => (
           <TouchableWithoutFeedback onPress={handleTouch}>
          <View style={styles.flex1_color}>
            {/*  main news container */}
            <View
              style={{
                marginTop: hp('8%'),
                backgroundColor: 'black',
                height: hp('80%'),
              }}>
              {/* image section start from here  */}

              <View style={{height: hp('37%'), backgroundColor: 'green'}}>
                <Image
                  style={styles.image}
                  source={{
                    uri: post.image,
                  }}
                />
              </View>
              {/* this section for news */}
              <View
                style={{
                  height: hp('46%'),
                  backgroundColor: '#f5f6fa',
                }}>
                {/* heading container start from here  */}
                <View
                  style={{height: hp('8%'), alignItems: 'center', padding: 7}}>
                  <Text style={{fontSize: 22, fontWeight: '700'}}>
                    {post.heading}
                  </Text>
                </View>
                {/* news section */}
                <View style={{height: hp('38%')}}>
                  <Text
                    style={{
                      fontFamily: 'poppins',
                      fontSize: 21,
                      padding: 10,
                      fontWeight: '300',
                    }}>
                    {post.news}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          </TouchableWithoutFeedback>
        ))}
      </Swiper>

      
      <View
        style={{
          display: 'flex',
          height: hp('10%'),
          flexDirection: 'row',
          backgroundColor: 'white',
        }}>
        {  press &&
        <View style={{flexDirection: "row" }}>
        <TouchableOpacity>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: hp('10%'),
              width: wp('25%'),
            }}>
            <Image
              style={styles.bottomIcon}
              source={require('../../photos/menu-outline.png')}
            />
            <Text style={styles.iconPadding}>Menu</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: hp('10%'),
              width: wp('25%'),
            }}>
            <Image
              style={styles.bottomIcon}
              source={require('../../photos/search-outline.png')}
            />
            <Text style={styles.iconPadding}>Search</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: hp('10%'),
              width: wp('25%'),
            }}>
            <Image
              style={styles.bottomIcon}
              source={require('../../photos/eye-off-outline.png')}
            />
            <Text style={styles.iconPadding}>Unread</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: hp('10%'),
              width: wp('25%'),
            }}>
            <Image
              style={styles.bottomIcon}
              source={require('../../photos/refresh-outline.png')}
            />
            <Text style={styles.iconPadding}>Reload</Text>
          </View>
        </TouchableOpacity>
        </View> 
}
      </View>
    </View>
  );
};

export default Home;