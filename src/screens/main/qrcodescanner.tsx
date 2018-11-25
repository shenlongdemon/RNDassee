import * as React from 'react';
import {Grid, Row, Col} from 'react-native-easy-grid';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import BaseScreen from '../basescreen';
import {Button} from 'react-native-elements';
import * as Styles from '../../stylesheet';
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
    this.state = {isProcess: false};
    this.onResult = this.onResult.bind(this);
  }
  
  private onResult = async (result: { data: string }): Promise<void> => {
    alert(result.data);
    if (!this.state.isProcess && result.data !== CONSTANTS.STR_EMPTY) {
      this.setState({isProcess: true});
      const res: ObjectOfQRCodeDto = await this.businessService.getObjectByQRCode(result.data);
      if (res.isSuccess && res.object) {
        if (res.object.type === ScanQRItemType.material) {
        
        }
        else if (res.object.type === ScanQRItemType.product) {
        
        }
      }
      
      
      this.setState({isProcess: false});
    }
    this.scanner.reactivate();
    
  }
  
  render() {
    return (
      <BaseScreen {...{...this.props}}>
        <Grid>
          <Row>
            
            <QRCodeScanner
              ref={(node) => {
                this.scanner = node
              }}
              onRead={this.onResult}
            />
          </Row>
        </Grid>
      
      </BaseScreen>
    );
  }
}