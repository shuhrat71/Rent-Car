export const ROUTE_PATHS = {
  HOME: "/home",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  LOG_IN: "/log-in",
  RENTED: "/rented",
  CARDETIAL: "/cardetial",
};
export const paths = {
  home: "/",
  auth: {
    signIn: "/auth/sign-in",
    signUp: "/auth/sign-up",
    resetPassword: "/auth/reset-password",
  },
  dashboard: {
    overview: "/dashboard",
    account: "/dashboard/account",
    customers: "/dashboard/customers",
    integrations: "/dashboard/integrations",
    settings: "/dashboard/settings",
  },
  errors: { notFound: "/errors/not-found" },
} as const;
