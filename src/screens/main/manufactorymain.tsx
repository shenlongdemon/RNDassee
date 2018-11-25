import * as React from 'react';
import {Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {Grid, Row, Col} from 'react-native-easy-grid';
import BaseScreen from '../basescreen';
import {Button} from 'react-native-elements';
import * as Styles from '../../stylesheet';
import {ROUTE} from "../routes";
import * as IMAGES from '../../assets';
interface Props {

}

interface State {

}

export default class ManufactoryMain extends BaseScreen<Props, State> {
  constructor(props: Props) {
    super(props);
    this.gotoGoods = this.gotoGoods.bind(this);
    this.gotoProcesses = this.gotoProcesses.bind(this);
    this.scanQRCode = this.scanQRCode.bind(this);
  }
  
  private gotoGoods = async (): Promise<void> => {
    this.navigate(ROUTE.APP.MANUFACTORY.GOODSES.DEFAULT)
  }
  private gotoProcesses = async (): Promise<void> => {
    this.navigate(ROUTE.APP.MANUFACTORY.PROCESSES.DEFAULT)
  }
  private scanQRCode = async (): Promise<void> => {
    this.navigate(ROUTE.APP.MANUFACTORY.SCANQRCODE)
  }
  
  render() {
    return (
      <BaseScreen {...{...this.props}}>
        
        <Grid style={{flex:1}}>
          <Row size={1.7}>
            <Col size={1} style={{justifyContent:'flex-end'}}>
              
              <TouchableOpacity style={[styles.button, {justifyContent:'flex-end'}]} onPress={this.gotoProcesses}>
                <Image style={styles.image} resizeMode={'contain'} source={IMAGES.ico_bluetooth}/>
                <Text style={[Styles.styleSheet.caption, {alignSelf: 'center'}]}>BLUETOOTH</Text>
              </TouchableOpacity>
            </Col>
            <Col size={2} style={{justifyContent:'center'}}>
              {/* --------------- PROCESSES --------------- */}
              <TouchableOpacity style={styles.button} onPress={this.gotoProcesses}>
                <Image style={styles.image} resizeMode={'contain'} source={IMAGES.ico_projects}/>
                <Text style={[Styles.styleSheet.caption, {alignSelf: 'center'}]}>PROCESSES</Text>
              </TouchableOpacity>
            </Col>
            <Col size={1} style={{justifyContent:'flex-end'}}>
              <TouchableOpacity style={[styles.button, {justifyContent:'flex-end'}]} onPress={this.scanQRCode}>
                <Image style={styles.image} resizeMode={'contain'} source={IMAGES.ico_qrcode}/>
                <Text style={[Styles.styleSheet.caption, {alignSelf: 'center'}]}>QRCODE</Text>
              </TouchableOpacity>
            </Col>
          </Row>
          
          
          
          
          <Row style={{ height: 200}}>
            
            <Grid>
              <Col size={1}></Col>
              <Col size={2} style={{justifyContent:'center'}}>
                <Image resizeMode={'contain'} source={IMAGES.ico_circle} style={{height: 200, width: 200, alignSelf: 'center'}} />
              </Col>
              <Col size={1}></Col>
            </Grid>
            
          </Row>
          
          
          <Row size={2}>
            <Col size={1} style={{justifyContent:'flex-start'}}>
    
              <TouchableOpacity style={[styles.button, {justifyContent:'flex-start'}]} onPress={this.gotoGoods}>
                <Image style={styles.image} resizeMode={'contain'} source={IMAGES.ico_goods}/>
                <Text style={[Styles.styleSheet.caption, {alignSelf: 'center'}]}>GOODS</Text>
              </TouchableOpacity>
            </Col>
            <Col size={2} style={{justifyContent:'center'}}>
              {/* --------------- PROCESSES --------------- */}
              <TouchableOpacity style={styles.button} onPress={this.gotoProcesses}>
                <Image style={styles.image} resizeMode={'contain'} source={IMAGES.ico_search}/>
                <Text style={[Styles.styleSheet.caption, {alignSelf: 'center'}]}>SEARCH</Text>
              </TouchableOpacity>
            </Col>
  
            <Col size={1} style={{justifyContent:'flex-start'}}>
    
              <TouchableOpacity style={[styles.button, {justifyContent:'flex-start'}]} onPress={this.gotoGoods}>
                <Image style={styles.image} resizeMode={'contain'} source={IMAGES.ico_profile}/>
                <Text style={[Styles.styleSheet.caption, {alignSelf: 'center'}]}>PROFILE</Text>
              </TouchableOpacity>
            </Col>
          </Row>
          
          <Row style={{ height: 100 }}>
          
          </Row>
        </Grid>
        
        
      </BaseScreen>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 90,
    height: 90,
    alignSelf: 'center'
  },
  image: {
    width: 70,
    height: 70,
    alignSelf: 'center'
  }
});
