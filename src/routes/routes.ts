import React from "react";
import { NoLazy } from '../lazyload/pages';
import {ShoppingPage} from '../02.-Component-Patterns/pages/ShoppingPage'
type JSXComponent = ()=> JSX.Element;

interface Route{
     path: string;
     Component: JSXComponent| React.LazyExoticComponent<JSXComponent>;
     name: string; 
     children?: Route[];
}
 
export const routes:Route[] = [
    { 
        path: '/home',
        Component: ShoppingPage,
        name: 'shopping page'
    },
    {
        path:'/',
        Component: NoLazy,
        name:' No Lazy',    
    }

]; 