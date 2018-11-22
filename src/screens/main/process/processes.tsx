import * as React from 'react';
import {Grid, Row, Col} from 'react-native-easy-grid';
import BaseScreen from '../../basescreen';
import {Button} from 'react-native-elements';
import {Platform, StyleSheet, Text, View, TextInput, FlatList} from 'react-native';
import {
    FactoryInjection,
    Process,
    IAuthService,
    PUBLIC_TYPES,
    IBusinessService,
    ProcessListDto
} from 'business_core_app_react';
import ProcessItem from '../../../components/listitem/processitem';
import {PARAMS} from "../../../common/index";
import {ROUTE} from "../../routes";

interface Props {

}

interface State {
    processes: Process[];
}

export default class ProcessesScreen extends BaseScreen<Props, State> {
    private businessService: IBusinessService = FactoryInjection.get<IBusinessService>(PUBLIC_TYPES.IBusinessService);
    
    constructor(props: Props) {
        super(props);
        this.state = {
            processes: []
        };
        this.clickListItem = this.clickListItem.bind(this);
        this.componentDidFocus = this.componentDidFocus.bind(this);
    }
    
    private clickListItem = (item: Process, index: number): void => {
        const data: any = {};
        data[PARAMS.PROCESS] = item;
    
        this.navigate(ROUTE.APP.MANUFACTORY.PROCESSES.ITEM.DEFAULT, data)
    }
    
    componentDidFocus = async (): Promise<void> => {
        this.loadProcesses();
    }
    
    private loadProcesses = async (): Promise<void> => {
        const processListDto: ProcessListDto = await this.businessService.getProcesses();
        if (processListDto.isSuccess) {
            this.setState({processes: processListDto.processes});
        }
    }
    
    render() {
        return (
            <BaseScreen {...{...this.props, componentDidFocus: this.componentDidFocus}}>
                <FlatList
                    style={{flex: 1}}
                    data={this.state.processes}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item, index}) =>
                        <ProcessItem item={item} index={index}
                                   onClickHandle={this.clickListItem}/>
                    }
                    keyExtractor={(item) => item.id}
                />
            </BaseScreen>
        );
    }
}