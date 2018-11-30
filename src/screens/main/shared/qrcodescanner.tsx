import * as React from 'react';
import {Grid, Row, Col} from 'react-native-easy-grid';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import BaseScreen from '../../basescreen';
import {Button} from 'react-native-elements';
import * as Styles from '../../../stylesheet/index';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {
  CONSTANTS,
  FactoryInjection,
  IBusinessService,
  PUBLIC_TYPES,
  ObjectOfQRCodeDto,
  ScanQRItemType
} from "business_core_app_react";

interface Props {

}

interface State {
  isProcess: boolean;
}

export default class QRCodeScannerScreen extends BaseScreen<Props, State> {
  private businessService: IBusinessService = FactoryInjection.get<IBusinessService>(PUBLIC_TYPES.IBusinessService);
  
  private scanner!: any;
  
  constructor(props: Props) {
    super(props);
    this.onSuccess = this.onSuccess.bind(this);
    this.state = {isProcess: false};
    
  }

  
  async onSuccess(e) {
    if (!this.state.isProcess && e && e.data !== CONSTANTS.STR_EMPTY) {
      this.setState({isProcess: true});
      const res: ObjectOfQRCodeDto = await this.businessService.getObjectByQRCode(e.data);
      this.setState({isProcess: false});
      if (res.isSuccess && res.object) {
        if (res.object.type === ScanQRItemType.material) {

        }
        else if (res.object.type === ScanQRItemType.product) {

        }
      }
     
    }
    
    setTimeout(() => { this.scanner.reactivate();}, 2000);
  }
  
  render() {
    return (
      <BaseScreen {...{...this.props, isLoading: this.state.isProcess}}>
        <Grid>
          <Row>
            <QRCodeScanner
              ref={(node) => { this.scanner = node }}
              onRead={this.onSuccess}
            />
          </Row>
        </Grid>
      
      </BaseScreen>
    );
  }
}