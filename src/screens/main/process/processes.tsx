import * as React from 'react';
import {Grid, Row, Col} from 'react-native-easy-grid';
import BaseScreen from '../../basescreen';
import {Button} from 'react-native-elements';
import {Platform, StyleSheet, Text, View, TextInput, FlatList, Image, TouchableOpacity} from 'react-native';
import {
  FactoryInjection,
  Material,
  IAuthService,
  PUBLIC_TYPES,
  IBusinessService,
  ProcessListDto
} from 'business_core_app_react';
import ProcessItem from '../../../components/listitem/processitem';
import {PARAMS} from "../../../common/index";
import {ROUTE} from "../../routes";
import * as Styles from "../../../stylesheet";
import * as IMAGES from "../../../assets";

interface Props {

}

interface State {
  materials: Material[];
}

export default class ProcessesScreen extends BaseScreen<Props, State> {
  private businessService: IBusinessService = FactoryInjection.get<IBusinessService>(PUBLIC_TYPES.IBusinessService);
  
  constructor(props: Props) {
    super(props);
    this.state = {
      materials: []
    };
    this.clickListItem = this.clickListItem.bind(this);
    this.clickAddProcess = this.clickAddProcess.bind(this);
    this.componentDidFocus = this.componentDidFocus.bind(this);
  }
  
  private clickListItem = (item: Material, index: number): void => {
    const data: any = {};
    data[PARAMS.MATERIAL] = item;
    
    this.navigate(ROUTE.APP.MANUFACTORY.PROCESSES.ITEM.DEFAULT, data)
  }
  
  componentDidFocus = async (): Promise<void> => {
    this.loadProcesses();
  }
  
  private loadProcesses = async (): Promise<void> => {
    const processListDto: ProcessListDto = await this.businessService.getProcesses();
    if (processListDto.isSuccess) {
      this.setState({materials: processListDto.materials});
    }
  }
  
  private clickAddProcess(): void {
    this.navigate(ROUTE.APP.MANUFACTORY.PROCESSES.ADD_iTEM.DEFAULT)
  }
  
  render() {
    return (
      <BaseScreen {...{...this.props, componentDidFocus: this.componentDidFocus}}>
        <FlatList
          style={{flex: 1}}
          data={this.state.materials}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) =>
            <ProcessItem item={item} index={index}
                         onClickHandle={this.clickListItem}/>
          }
          keyExtractor={(item) => item.id}
        />
  
        <TouchableOpacity style={Styles.styleSheet.floatTouchable} onPress={this.clickAddProcess}>
          <Image style={{width: 70, height: 70, alignSelf: 'flex-end'}} resizeMode={'contain'} source={IMAGES.gray_add}/>
        </TouchableOpacity>
      </BaseScreen>
    );
  }
}