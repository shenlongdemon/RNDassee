import * as React from 'react';
import {Text, View} from 'react-native';
import BasesSreen from "../../basescreen";
import {FactoryInjection, IBusinessService, Process, PUBLIC_TYPES, ProcessDetailDto} from "business_core_app_react";
import {PARAMS} from "../../../common";

interface Props {
}

interface State {
    material: Process;
}

export default class ProcessDetail extends BasesSreen<Props, State> {
    private businessService: IBusinessService = FactoryInjection.get<IBusinessService>(PUBLIC_TYPES.IBusinessService);
    constructor(props: Props) {
        super(props);
        this.componentDidFocus = this.componentDidFocus.bind(this);
        const item: Process | null = this.getParam<Process>(PARAMS.PROCESS, null);
        this.state = {material: item!};
        
    }
    
    componentDidMount = async (): Promise<void> => {
    
    }
    private componentDidFocus = async (): Promise<void> => {
        const res: ProcessDetailDto = await this.businessService.getProcessDetail(this.state.material.id);
        if (res.isSuccess) {
            this.setState({process: res.process!});
        }
        else {
        
        }
    }
    render() {
        return (
            <BasesSreen {...{...this.props, componentDidFocus: this.componentDidFocus}}>
                <Text>{this.state.material.id}</Text>
            </BasesSreen>
        );
    }
}