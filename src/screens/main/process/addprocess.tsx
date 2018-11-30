import * as React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View, ImageStyle} from 'react-native';
import BasesSreen from "../../basescreen";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ImagePicker from 'react-native-image-picker';

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
  imageUri?: string,
  imageData: any | null;
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
    this.pickImage = this.pickImage.bind(this);
    this.state = {
      name: CONSTANTS.STR_EMPTY,
      bluetooth: CONSTANTS.STR_EMPTY,
      description: CONSTANTS.STR_EMPTY,
      imageUri: CONSTANTS.STR_EMPTY,
      imageData: null
    };
  }
  
  pickImage = () : void => {
    const options = {
      title: 'Select',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    
    ImagePicker.showImagePicker(options, (response: {
      customButton: string;
      didCancel: boolean;
      error: string;
      data: string;
      uri: string;
      origURL?: string;
      isVertical: boolean;
      width: number;
      height: number;
      fileSize: number;
      type?: string;
      fileName?: string;
      path?: string;
      latitude?: number;
      longitude?: number;
      timestamp?: string;
    }) => {
      console.log('Response = ', response);
    
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
      
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
      
        this.setState({
          imageUri: response.uri,
          imageData: response.data
        });
      }
    });
  }
  
  private async createMaterial(): Promise<void> {
    
    
    const bledeviceId: string = CONSTANTS.STR_EMPTY;
    const res: CreateMaterialDto = await this.processService.createMaterial(
      this.state.name, this.state.description, this.state.imageData, bledeviceId
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
                <TouchableOpacity style={[styles.button, {justifyContent: 'flex-start'}]} onPress={this.pickImage}>
                  <Image resizeMode={'contain'} source={this.state.imageUri === CONSTANTS.STR_EMPTY ? IMAGE.photo : {uri: this.state.imageUri}} style={styles.image as ImageStyle} />
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