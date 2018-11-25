import * as React from 'react';
import {Text, View} from 'react-native';
import BasesSreen from "../../basescreen";
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
      description: CONSTANTS.STR_EMPTY
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
              <Col size={2}>
              
              </Col>
              <Col size={1}></Col>
            </Grid>
          </Row>
          <Row size={1}>
            <Text style={Styles.styleSheet.label}>Name</Text>
          
          </Row>
          <Row size={1}>
            <Text style={Styles.styleSheet.label}>Description</Text>
          </Row>
          <Row size={1}>
          
          </Row>
          <Row size={1}></Row>
          <Row size={1}>
            <Text style={Styles.styleSheet.label}>Select Bluetooth what will follow this material</Text>
          </Row>
          <Row size={1}></Row>
        </Grid>
      </BasesSreen>
    );
  }
}