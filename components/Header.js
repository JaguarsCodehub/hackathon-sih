import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {FONTS,COLORS} from '../constants/theme'

const Header = ({ containerStyle, title }) => {
  return (
    <View>
        {/* Left */}
        <View
            style={{
                ...containerStyle,
                flexDirection: 'row',
                justifyContent: 'center'
            }}
        >
        <Text style={{
            ...FONTS.h3
        }}>
                {title}
        </Text>
        </View>
    </View>
  )
}

export default Header