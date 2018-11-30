import * as React from 'react';
import {FlatList, Text, View} from 'react-native';
import {Grid, Row, Col} from 'react-native-easy-grid';

import BasesSreen from "../../basescreen";
import {
  FactoryInjection,
  IBusinessService,
  Material,
  PUBLIC_TYPES,
  ProcessDetailDto,
  IProcessService, MaterialDetailDto,
  Task
} from "business_core_app_react";
import {PARAMS} from "../../../common";
import TaskItem from "../../../components/listitem/taskitem";
import {ROUTE} from "../../routes";

interface Props {
}

interface State {
  material: Material;
  isLoading: boolean;
}

/**
 * Display list of tasks
 */
export default class ProcessDetail extends BasesSreen<Props, State> {
  private businessService: IBusinessService = FactoryInjection.get<IBusinessService>(PUBLIC_TYPES.IBusinessService);
  private processService: IProcessService = FactoryInjection.get<IProcessService>(PUBLIC_TYPES.IProcessService);
  
  constructor(props: Props) {
    super(props);
    this.componentDidFocus = this.componentDidFocus.bind(this);
    const item: Material | null = this.getParam<Material>(PARAMS.ITEM, null);
    item!.tasks = [];
    this.state = {material: item!, isLoading: false};
    
  }
  
  componentWillMount = async (): Promise<void> => {
    await this.loadData();
  }
  
  
  
  
  componentDidMount = async (): Promise<void> => {
  
  }
  
  private loadData = async (): Promise<void> => {
    this.setState({isLoading: true});
    const res: MaterialDetailDto = await this.processService.getMaterialDetail(this.state.material.id);
    this.setState({isLoading: false});
    if (res.isSuccess) {
      this.setState({material: res.material!});
    }
    else {
    
    }
  }
  
  private clickListItem = (item: Task, index: number): void => {
    const data: any = {};
    data[PARAMS.ITEM] = item;
    this.navigate(ROUTE.APP.MANUFACTORY.PROCESSES.ITEM.TASK.DEFAULT, data)
  }
  
  private componentDidFocus = async (): Promise<void> => {
  
  }
  
  render() {
    return (
      <BasesSreen {...{...this.props, isLoading: this.state.isLoading, componentDidFocus: this.componentDidFocus}}>
        <Grid>
          <Row style={{height: 100}}>
          
          </Row>
          <Row>
            <FlatList
              style={{flex: 1}}
              data={this.state.material.tasks}
              showsVerticalScrollIndicator={false}
              renderItem={({item, index}) =>
                <TaskItem item={item} index={index}
                             onClickHandle={this.clickListItem}/>
              }
              keyExtractor={(item) => item.id}
            />
          </Row>
        </Grid>
      </BasesSreen>
    );
  }
}