import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {deleteAndUpdate, getDataInfo} from '../redux-toolkit/dataInfoReducer';
import Tools from "../components/Tools";
import SimpleList from "../list/SimpleList";
import Justinfo from "../list/justinfo";


import './Home.css';

import {
    MyNewContext
} from './mycontexts';

function Home() {

    const [activeState, setActiveState] = useState('all');
    const dispatch = useDispatch();
    const data = useSelector(state => state.dataInfo.data);
    const loading = useSelector(state => state.dataInfo.loading);
    const error = useSelector(state => state.dataInfo.error);

    useEffect(() => {
        dispatch(getDataInfo());
    }, [dispatch]);


    const pagerefresh = () => {
        getDataInfo(dispatch);
    }

    const listchange = (evt) => {
        const value = evt.target.value;
        setActiveState(value);

    }

    const listdelete = (item) => {
        dispatch(deleteAndUpdate(item.id))
    }

    const labelclick = (arg) => {
        setActiveState(arg);
    }

    const handleAdd = (item) => {
        // setData([item, ...data]);
    }


    const newList = data.filter((item) => {
        if(activeState === 'all') {
            return true;
        }
        if(activeState === 'active') {
            return item.isActive === true;
        }
        if(activeState === 'non-active'){
            return item.isActive === false;
        }
        return false;   
    });

    return (
        (
            <div>

                {
                    loading && <div className="loading"> Loading ... </div>
                }
                {
                    error && <div className="error"> {error} </div>
                }
                <MyNewContext.Provider value={100}>
                        <Tools labelValue={activeState} onAction={listchange} count={data.length} onRefresh={pagerefresh}>
                            <SimpleList onLabelClick={handleLabelClick} data={newList} onAction={handleDelete} />
                        </Tools>
                </MyNewContext.Provider>
            </div>
        )
    );
    
}  

export default Home; 