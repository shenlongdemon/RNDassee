import * as React from 'react';
import {Image, Text, View} from 'react-native';
import {Col, Grid, Row} from 'react-native-easy-grid';
import * as IMAGE from '../../assets';
import BaseItem from './baseitem';
import IBaseItem from './ibaseitem';
import {FactoryInjection, IBusinessService, Material, PUBLIC_TYPES} from 'business_core_app_react';
import * as Styles from '../../stylesheet';

interface Props extends IBaseItem<Material> {

}

interface State {
}

export default class ProcessItem extends BaseItem<Material, State> {
  private businessService: IBusinessService = FactoryInjection.get<IBusinessService>(PUBLIC_TYPES.IBusinessService);
  
  constructor(props: Props) {
    super(props);
  }
  
  componentDidMount = (): void => {
  
  }
  
  private formatDate(time: number): string {
    return this.businessService.toDateString(time);
  }
  
  private formatTime(time: number): string {
    return this.businessService.toTimeString(time);
  }
  
  render() {
    
    return (
      // @ts-ignore
      <BaseItem {...this.props} >
        <Grid style={{height: 100}}>
          <Col size={1} style={{justifyContent:'center'}}>
            <Image source={IMAGE.material_icon} style={{width: 40, height: 40}}/>
          </Col>
          
          <Col size={5} style={{justifyContent:'center'}}>
            <Text style={[Styles.styleSheet.label, {marginLeft: 10}]}>{this.props.item.name}</Text>
          </Col>
          
          <Col size={2} style={{justifyContent:'center'}}>
            <Image source={{uri: this.businessService.getLinkImage(this.props.item.imageUrl)}} style={{width: 70, height: 70}}/>
          </Col>
          
          <Col size={2} style={{justifyContent:'center'}}>
            
              <Text style={[Styles.styleSheet.label, {alignSelf: 'flex-end'}]}>
                Modified at{'\n'}{this.formatDate(this.props.item.updatedAt)}
              </Text>
           
          </Col>
          
        </Grid>
      </BaseItem>
    );
  }
}
