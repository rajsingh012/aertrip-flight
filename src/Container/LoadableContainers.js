import { lazy } from "react";

const ListingContainer = lazy(() => import("./ListingContainer"));
const HomeContainer = lazy(() => import("./HomeContainer"));

export { ListingContainer, HomeContainer };
