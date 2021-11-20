import React,{ lazy } from "react";
import { NoLazy } from '../lazyload/pages';
type JSXComponent = ()=> JSX.Element;

interface Route{
     path: string;
     Component: JSXComponent| React.LazyExoticComponent<JSXComponent>;
     name: string; 
     children?: Route[];
}
 



export const routes:Route[] = [
    { 
        path: '/lazy',
        Component:lazy(()=> import(/* webpackChunkName: "layout" */ '../lazyload/layout/Layout')),
        name: 'Lazy page 1'
    },
    {
        path:'/',
        Component: NoLazy,
        name:' No Lazy',    
    }

]; 