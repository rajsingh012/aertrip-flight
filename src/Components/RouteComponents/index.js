import React, { Suspense } from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import MasterLayout from "./../masterLayout";
import Loader from "./../Loader/";
import NoData from "./NoDataFound";
const history = createBrowserHistory();

const Root = (props) => {
  const { routes, paths } = props;
  const path = window.location.pathname || "";
  return (
    <MasterLayout>
      <Suspense fallback={<Loader />}>
        <Router history={history}>
          {paths.map((pathMap, i) => {
            if (path in routes) {
              if (pathMap == "/") {
                const Component = routes[path];
                return <Component key={pathMap} {...props} />;
              }
            }
          })}
        </Router>
      </Suspense>
    </MasterLayout>
  );
};

export default Root;
