import React, { Component } from 'react';
import { Image, ImageBackground, Text, Alert, ToastAndroid, TouchableOpacity, View, Linking } from 'react-native';
import { Icon, Label } from 'native-base'
import { ImageStyle } from '../../styles/image_style'
import { ContainerStyle } from '../../styles/container_style';
import { InputStyle } from '../../styles/input_style';
import { LabelStyle } from '../../styles/label_style';
import { ButtonStyle } from '../../styles/button_style';
import { ScrollView } from 'react-native-gesture-handler';

export default class DashboardScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  initiateCallOrSms() {
    Alert.alert(
      'Notice',
      'Communication Module',
      [
        { text: 'Cancel', onPress: () => console.log('OK Pressed'), style: 'cancel' },
        { text: 'Call', onPress: () => Linking.openURL('tel:') },
        { text: 'SMS', onPress: () => Linking.openURL(`sms:?addresses=null&body=`) }
      ]
    )
  }

  render() {
    return (
      <View style={ContainerStyle.content}>
        <Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />
        <View style={ContainerStyle.seals}>
          <Image style={ImageStyle.seal} source={require('../../assets/dost_seal.png')}></Image>
          <Image style={ImageStyle.seal} source={require('../../assets/dynaslope_seal.png')}></Image>
          <Image style={ImageStyle.seal} source={require('../../assets/leon_seal.png')}></Image>
          <Image style={ImageStyle.seal} source={require('../../assets/mar_seal.png')}></Image>
        </View>
        <View style={ContainerStyle.dashboard_content}>
          <Text style={[LabelStyle.large_label, LabelStyle.branding]}>Community Based Early Warning Information for Landslides</Text>
          <View style={ContainerStyle.weather_container}>
            <Text style={[LabelStyle.medium_label]}>Weather update: Clear skies</Text>
            <Text style={[LabelStyle.medium_label]}>Date time: August 16, 2019 04:00 PM</Text>
          </View>
          <View style={ContainerStyle.dashboard_menu}>
            <View style={ContainerStyle.menu_row}>
              <View style={[ContainerStyle.menu_container]}>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate("CommunityRiskAssessment") }}>
                  <Image style={ImageStyle.seal} source={require('../../assets/menu/cra.png')}></Image>
                </TouchableOpacity>
                <Text style={[LabelStyle.small_label, LabelStyle.brand]}>Community{"\n"}Risk Assessment</Text>
              </View>
              <View style={[ContainerStyle.menu_container]}>
                <TouchableOpacity onPress={() => { this.initiateCallOrSms() }}>
                  <Image style={ImageStyle.seal} source={require('../../assets/menu/call_n_text.png')}></Image>
                </TouchableOpacity>
                <Text style={[LabelStyle.small_label, LabelStyle.brand]}>Call and Text</Text>
              </View>
              <View style={[ContainerStyle.menu_container]}>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate("AlertGeneration") }}>
                  <Image style={ImageStyle.seal} source={require('../../assets/menu/alert_gen.png')}></Image>
                </TouchableOpacity>
                <Text style={[LabelStyle.small_label, LabelStyle.brand]}>Alert{"\n"}Generation</Text>
              </View>
            </View>
            <View style={ContainerStyle.menu_row}>
              <View style={[ContainerStyle.menu_container]}>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate("DataAnalysis") }}>
                  <Image style={ImageStyle.seal} source={require('../../assets/menu/data_analysis.png')}></Image>
                </TouchableOpacity>
                <Text style={[LabelStyle.small_label, LabelStyle.brand]}>Data{"\n"}Analysis</Text>
              </View>
              <View style={[ContainerStyle.menu_container]}>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate("GroundData") }}>
                  <Image style={ImageStyle.seal} source={require('../../assets/menu/ground_data.png')}></Image>
                </TouchableOpacity>
                <Text style={[LabelStyle.small_label, LabelStyle.brand]}>Ground Data</Text>
              </View>
              <View style={[ContainerStyle.menu_container]}>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate("SensorData") }}>
                  <Image style={ImageStyle.seal} source={require('../../assets/menu/sensor_data.png')}></Image>
                </TouchableOpacity>
                <Text style={[LabelStyle.small_label, LabelStyle.brand]}>Sensor Data</Text>
              </View>
            </View>
            <View style={ContainerStyle.menu_row}>
              <View style={[ContainerStyle.menu_container]}>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate("Maintenance") }}>
                  <Image style={ImageStyle.seal} source={require('../../assets/menu/maintenance.png')}></Image>
                </TouchableOpacity>
                <Text style={[LabelStyle.small_label, LabelStyle.brand]}>Maintenance</Text>
              </View>
              <View style={[ContainerStyle.menu_container]}>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate("Events") }}>
                  <Image style={ImageStyle.seal} source={require('../../assets/menu/events.png')}></Image>
                </TouchableOpacity>
                <Text style={[LabelStyle.small_label, LabelStyle.brand]}>Events</Text>
              </View>
              <View style={[ContainerStyle.menu_container]}>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate("DataSync") }}>
                  <Image style={ImageStyle.seal} source={require('../../assets/menu/data_sync.png')}></Image>
                </TouchableOpacity>
                <Text style={[LabelStyle.small_label, LabelStyle.brand]}>Data Sync</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
