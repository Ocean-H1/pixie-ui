// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import React, { useEffect, useState } from 'react';
import { ApplyPluginsType } from 'umi';
import { renderClient, RenderClientOpts } from 'F:/oceanh_workspace/Project/pixie-ui/node_modules/.pnpm/@umijs+renderer-react@4.4.6_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@umijs/renderer-react';
import { createHistory } from './core/history';
import { createPluginManager } from './core/plugin';
import { getRoutes } from './core/route';
import type { Location } from 'history';


import { getPluginManager as getDumiPluginManager } from './core/plugin';
import { setPluginManager as setDumiPluginManager } from 'F:/oceanh_workspace/Project/pixie-ui/node_modules/.pnpm/dumi@2.4.18_@babel+core@7.26.10_@swc+helpers@0.5.1_@types+node@20.17.24_@types+react@18.3.18__3rbzvs7fy27yec7umls4oc3uwm/node_modules/dumi/dist/client/theme-api/utils.js';
const publicPath = '/';
const runtimePublicPath = false;

type TestBrowserProps = {
  location?: Partial<Location>;
  historyRef?: React.MutableRefObject<Location>;
};

export function TestBrowser(props: TestBrowserProps) {
  const pluginManager = createPluginManager();
  const [context, setContext] = useState<RenderClientOpts | undefined>(
    undefined
  );
  useEffect(() => {
    const genContext = async () => {
      const { routes, routeComponents } = await getRoutes(pluginManager);
      // allow user to extend routes
      await pluginManager.applyPlugins({
        key: 'patchRoutes',
        type: ApplyPluginsType.event,
        args: {
          routes,
          routeComponents,
        },
      });
      const contextOpts = pluginManager.applyPlugins({
        key: 'modifyContextOpts',
        type: ApplyPluginsType.modify,
        initialValue: {},
      });
      const basename = contextOpts.basename || '/';
      const history = createHistory({
        type: 'memory',
        basename,
      });
      const context = {
        routes,
        routeComponents,
        pluginManager,
        rootElement: contextOpts.rootElement || document.getElementById('root'),
        publicPath,
        runtimePublicPath,
        history,
        basename,
        components: true,
      };
      const modifiedContext = pluginManager.applyPlugins({
        key: 'modifyClientRenderOpts',
        type: ApplyPluginsType.modify,
        initialValue: context,
      });
      return modifiedContext;
    };
    genContext().then((context) => {
      setContext(context);
      if (props.location) {
        context?.history?.push(props.location);
      }
      if (props.historyRef) {
        props.historyRef.current = context?.history;
      }
    });
  }, []);

  if (context === undefined) {
    return <div id="loading" />;
  }

  const Children = renderClient(context);
  return (
    <React.Fragment>
      <Children />
    </React.Fragment>
  );
}
