import {useState,useReducer} from 'react';
import OneProductData from "./OneProductData";
import OneItemData from "./OneItemData";

const getTotalCost = (state) => {
    let newTotalCost = 0;
    for(let item of state){
        newTotalCost += item.cost;
    }
    return newTotalCost;
}

const getIndexByPid = (state,pid) => {
    for(let i=0;i<state.length;i++){
        if(state[i].pid === pid){
            return i;
        }
    }
    return -1;
}

function useBuycarData() {
    const listData = [
        new OneItemData(new OneProductData('18', '黄焖鸡米饭', '15'), 1),
        new OneItemData(new OneProductData('312', '青椒肉丝盖浇饭', '12'), 1),
        new OneItemData(new OneProductData('76', '酸菜鱼', '45'), 1)
    ];

    const countChange = (state,pid,count) => {
        let index  =  getIndexByPid(state,pid);
        if(index !==-1){
            let newList = state.concat();
            let item  = newList[index];
            item.count = count;
            item.cost = item.price * item.count;
            setCost(getTotalCost(newList));
            return newList;
        }else{
            throw new Error(`useBuycarData:Can't find ${pid} by countChange()`);
        }
    }
    
    const delByPid = (state,pid) => {
        let index  =  getIndexByPid(state,pid);
        if(index !==-1){
            let newList = state.concat();
            newList.splice(index,1);
            setCost(getTotalCost(newList));
            return newList;
        }else{
            throw new Error(`useBuycarData:Can't find ${pid} by delByPid()`);
        }
    }

    const reducer = (state,action) => {
        switch (action.type){
            case 'count':
                return countChange(state,action.pid,action.count);
            case 'del':
                return delByPid(state,action.pid);
            case 'delAll':
                return state; //将来修改成 删除全部相关代码
            case 'add':
                return state; //将来修改成 添加到购物车相关代码
            default:
                throw new Error(`useBuycarData:Can't find ${action.type} action.type`);
        }
    }

    const [cost,setCost] = useState(getTotalCost(listData));
    const [list,dispatch] = useReducer(reducer,listData);

    return [list, cost, dispatch];
}

export default useBuycarData;