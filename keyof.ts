interface ICommonParams {
    level: number,
    startTime: string,
    endTime: string,
    leftItem: number,
    rightItem: number,
    resource_id: string
}

type CommonParamsTypes = keyof ICommonParams

const commonParams: ICommonParams = {
    level: 2,
    startTime: Date.now().toString(),
    endTime: "",
    leftItem: 0,
    rightItem: 0,
    resource_id: ""
}

const setCommonParams = <T extends CommonParamsTypes> (name:T,value:ICommonParams[T]): void => {
    commonParams[name] = value
}

/* 
  或者
  function setCommonParams<T extends keyof ICommonParams> (name:T,value:ICommonParams[T]){
    commonParams[name] = value
} */
