// import applicationReducer from "./reduxSlices/applicationSlice";
// import conditionalUsersReducer from "./reduxSlices/conditionalUsersSlice";
import { configureStore } from '@reduxjs/toolkit';
// import subscriptionReducer from "./reduxSlices/subscriptionSlice";
// import blogReducer from "./reduxSlices/blogSlice";
// import overviewReducer from "./reduxSlices/overviewSlice";
// import dashboardFiltersReducer from "./reduxSlices/dashboardFiltersSlice";
// import manageUsersReducer from "./reduxSlices/manageUsersSlice";
// import detailsReducer from "./reduxSlices/detailsSlice";
// import providersReducer from "./reduxSlices/providersSlice";
// import productReducer from "./reduxSlices/productSlice";
// import documentReducer from "./reduxSlices/documentSlice";
// import navigationReducer from "./reduxSlices/navigationSlice"

export const reducer = {
  // application: applicationReducer,
  // subscription: subscriptionReducer,
  // conditionalUsers: conditionalUsersReducer,
  // blog: blogReducer,
  // overview: overviewReducer,
  // dashboardFilters: dashboardFiltersReducer,
  // manageUsers: manageUsersReducer,
  // details: detailsReducer,
  // providers: providersReducer,
  // product: productReducer,
  // navigation: navigationReducer,
  // document: documentReducer
};

const rootReducer = configureStore({
  reducer: reducer,
});

export default rootReducer;
