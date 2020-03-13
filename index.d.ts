import { Component, FC, ReactNode } from 'react';
import * as H from 'history';

interface IAnyFn {
  (...args: any): any;
}

export const ROUTER_MODULE: '$$CONCENT_ROUTER';

type CRProps = {
  callUrlChangedOnInit?: boolean,
  connected?: (History: H.History) => void,
};
export class ConnectRouter extends Component<CRProps, {}> {}

type LinkProps = {
  className: string,
  style: { [key: string]: any },
  to: string,
  onClick: (to: string) => void,
};

export const Link: FC<LinkProps>;

export declare const history: {
  block: H.History['block'],
  createHref: H.History['createHref'],
  go: H.History['go'],
  goBack: H.History['goBack'],
  goForward: H.History['goForward'],
  listen: H.History['listen'],
  push: H.History['push'],
  replace: H.History['replace'],
  getRouterHistory: () => H.History
};

export function createHistoryProxy(history: H.History, callUrlChangedOnInit?: boolean): void;
export function configRouterModule(moduleName?: string): void;
export interface IRouterState<T extends any = any> {
  hash: string,
  key: string,
  pathname: string,
  search: string,
  state: T,
}

export interface IOnUrlChangedCb {
  (param: any, action: H.Action, history: H.History): void;
}


declare type DefaultExport = {
  ROUTER_MODULE: typeof ROUTER_MODULE,
  ConnectRouter: typeof ConnectRouter,
  Link: typeof Link,
  history: typeof history,
  createHistoryProxy: typeof createHistoryProxy,
  configRouterModule: typeof configRouterModule,
  IRouterState: IRouterState,
  IOnUrlChangedCb: IOnUrlChangedCb,
}

declare let defaultExport: DefaultExport;
export default defaultExport;
