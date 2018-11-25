import * as React from 'react';
import {Text, View} from 'react-native';
import BasesSreen from "../../basescreen";
import {
  FactoryInjection,
  IBusinessService,
  Process,
  PUBLIC_TYPES,
  ProcessDetailDto,
  IProcessService, MaterialDetailDto
} from "business_core_app_react";
import {PARAMS} from "../../../common";

interface Props {
}

interface State {
  material: Process;
}

export default class ProcessDetail extends BasesSreen<Props, State> {
  private businessService: IBusinessService = FactoryInjection.get<IBusinessService>(PUBLIC_TYPES.IBusinessService);
  private processService: IProcessService = FactoryInjection.get<IProcessService>(PUBLIC_TYPES.IProcessService);
  
  constructor(props: Props) {
    super(props);
    this.componentDidFocus = this.componentDidFocus.bind(this);
    const item: Process | null = this.getParam<Process>(PARAMS.MATERIAL, null);
    this.state = {material: item!};
    
  }
  
  componentDidMount = async (): Promise<void> => {
    
  }
  
  private componentDidFocus = async (): Promise<void> => {
    const res: MaterialDetailDto = await this.processService.getMaterialDetail(this.state.material.id);
    if (res.isSuccess) {
      this.setState({material: res.material!});
    }
    else {
      this.goBack();
    }
  }
  
  render() {
    return (
      <BasesSreen {...{...this.props, componentDidFocus: this.componentDidFocus}}>
      
      </BasesSreen>
    );
  }
}