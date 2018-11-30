import * as React from 'react';
import {Image, Text, View} from 'react-native';
import {Col, Grid, Row} from 'react-native-easy-grid';
import * as IMAGE from '../../assets';
import BaseItem from './baseitem';
import IBaseItem from './ibaseitem';
import {BLEDevice} from 'business_core_app_react';
import * as Styles from '../../stylesheet';
import {Divider} from 'react-native-elements';
interface Props extends IBaseItem<BLEDevice> {

}

interface State {
  image: any;
}

export default class BLEDeviceItem extends BaseItem<BLEDevice, State> {
  constructor(props: Props) {
    super(props);
    // this.state = {image: {uri: this.props.item.avatar}};
    this.state = {image: IMAGE.profile};
  }
  
  componentDidMount = (): void => {
  }
  
  render() {
    
    return (
      <BaseItem {...this.props} >
        <Grid style={{height: 65}}>
          <Row>
          </Row>
          <Row style={{height: 30}}>
            <Text style={Styles.styleSheet.label}>{this.props.item.name}</Text>
          </Row>
          <Row style={{height: 30, justifyContent: 'flex-end'}}>
            <Text style={[Styles.styleSheet.identifier]}>{this.props.item.id}</Text>
          </Row>
        </Grid>
        <Divider style={{backgroundColor: Styles.color.list.itemDivider}} />
      </BaseItem>
    );
  }
}
