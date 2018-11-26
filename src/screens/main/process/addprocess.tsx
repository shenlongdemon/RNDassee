import * as React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import BasesSreen from "../../basescreen";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {
  FactoryInjection,
  IBusinessService,
  Process,
  PUBLIC_TYPES,
  ProcessDetailDto,
  IProcessService, MaterialDetailDto,
  CreateMaterialDto,
  CONSTANTS
} from "business_core_app_react";
import {PARAMS} from "../../../common";
import {Grid, Row, Col} from 'react-native-easy-grid';
import {Button} from 'react-native-elements';
import * as IMAGE from '../../../assets';
import * as Styles from '../../../stylesheet';
import {Jiro, Hoshi} from 'react-native-textinput-effects';

interface Props {
}

interface State {
  name: string;
  description: string,
  image?: any | null,
  bluetooth?: string | null;
}

export default class AddProcess extends BasesSreen<Props, State> {
  static navigationOptions = ({navigation, navigationOptions}) => {
    return {
      headerRight: (
        <Button
          onPress={navigation.getParam(PARAMS.HANDLE_RIGHT_HEADER_BUTTON)}
          title="Save"
          {...Styles.props.btn}
        />
      ),
    };
  };
  private businessService: IBusinessService = FactoryInjection.get<IBusinessService>(PUBLIC_TYPES.IBusinessService);
  private processService: IProcessService = FactoryInjection.get<IProcessService>(PUBLIC_TYPES.IProcessService);
  
  constructor(props: Props) {
    super(props);
    this.componentDidFocus = this.componentDidFocus.bind(this);
    this.createMaterial = this.createMaterial.bind(this);
    this.state = {
      name: CONSTANTS.STR_EMPTY,
      bluetooth: CONSTANTS.STR_EMPTY,
      description: CONSTANTS.STR_EMPTY,
      image: IMAGE.photo
    };
  }
  
  private async createMaterial(): Promise<void> {
    
    
    const image: any = IMAGE.material_icon;
    const bledeviceId: string = CONSTANTS.STR_EMPTY;
    const res: CreateMaterialDto = await this.processService.createMaterial(
      this.state.name, this.state.description, image, bledeviceId
    );
    
    if (res.isSuccess) {
      this.goBack();
    }
    else {
      alert(res.message);
    }
  }
  
  componentDidMount = async (): Promise<void> => {
    const data: any = {};
    data[PARAMS.HANDLE_RIGHT_HEADER_BUTTON] = this.createMaterial;
    this.setSellNavigateParam(data);
  }
  
  private componentDidFocus = async (): Promise<void> => {
  
  }
  
  render() {
    return (
      <BasesSreen {...{...this.props, componentDidFocus: this.componentDidFocus}}>
        <Grid>
          <Row size={1}>
            <Grid>
              <Col size={2} style={{justifyContent: 'center'}}>
                <Text style={Styles.styleSheet.label}>Please tap on frame to pick an image</Text>
              </Col>
              <Col size={1}>
                <TouchableOpacity style={[styles.button, {justifyContent: 'flex-start'}]} onPress={() => {
                }}>
                  <Image style={styles.image} resizeMode={'contain'} source={this.state.image}/>
                </TouchableOpacity>
              </Col>
            </Grid>
          </Row>
          <Row size={1}>
            <Grid>
              <Col>
                <Hoshi
                  {...Styles.props.field}
                  label={'Name'}
                />
              </Col>
            </Grid>
          </Row>
          <Row size={2}>
            <Jiro
              {...Styles.props.rtxt}
              height={200}
              label={'Description'}
              autoCapitalize={'none'}
              autoCorrect={false}
            />
          </Row>
          <Row size={1}>
            <Text style={Styles.styleSheet.label}>Select Bluetooth what will follow this material</Text>
          </Row>
          <Row size={1}></Row>
        </Grid>
      </BasesSreen>
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
    width: 120,
    height: 120,
    alignSelf: 'center'
  },
  image: {
    width: 70,
    height: 70,
    alignSelf: 'center'
  }
});