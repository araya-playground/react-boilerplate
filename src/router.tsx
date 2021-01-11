import { FC } from "react";
import { RoconRoot, useRoutes, Path } from "rocon/react";
import Home from "./pages/home/home";

const routes = Path().exact({
  action: Home,
});

const Routes: FC = () => {
  return useRoutes(routes);
};

export const AppWithRouter: FC = () => (
  <RoconRoot>
    <Routes />
  </RoconRoot>
);
