import * as React from "react";
import { extendTheme, styled } from "@mui/material/styles";
import BarChartIcon from "@mui/icons-material/BarChart";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DescriptionIcon from "@mui/icons-material/Description";
import LayersIcon from "@mui/icons-material/Layers";
import { AppProvider, Navigation, Router } from "@toolpad/core";
import { DashboardLayout } from "@toolpad/core";
import { PageContainer } from "@toolpad/core";
import GradingIcon from "@mui/icons-material/Grading";
import { OrderedList } from "./orders";
import MultiActionAreaCard from "../Home/Components/Card";

const NAVIGATION: Navigation = [
  {
    kind: "header",
    title: "Main items",
  },

  {
    segment: "yangi mashina qo'shish",
    title: "Yangi mashina qo'shish",
    icon: <AddCircleOutlineIcon />,
  },
  {
    segment: "ordered",
    title: "Buyurtma qilinganlar",
    icon: <GradingIcon />,
  },
  {
    kind: "divider",
  },
  {
    kind: "header",
    title: "Analytics",
  },
  {
    segment: "reports",
    title: "Reports",
    icon: <BarChartIcon />,
    children: [
      {
        segment: "sales",
        title: "Sales",
        icon: <DescriptionIcon />,
      },
      {
        segment: "traffic",
        title: "Traffic",
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    segment: "integrations",
    title: "Integrations",
    icon: <LayersIcon />,
  },
];

const demoTheme = extendTheme({
  colorSchemes: { light: true, dark: true },
  colorSchemeSelector: "class",
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function useDemoRouter(initialPath: string): Router {
  const [pathname, setPathname] = React.useState(initialPath);

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path: string | URL) => setPathname(String(path)),
    };
  }, [pathname]);

  return router;
}

const Skeleton = styled("div")<{ height: number }>(({ theme, height }) => ({
  backgroundColor: theme.palette.action.hover,
  borderRadius: theme.shape.borderRadius,
  height,
  content: '" "',
}));

export default function AdminPanel(props: any) {
  const { window } = props;

  const router = useDemoRouter("/dashboard");

  const demoWindow = window ? window() : undefined;

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout
        sx={{
          width: "100%",
        }}
      >
        <PageContainer maxWidth="xl">
          <OrderedList>
            <MultiActionAreaCard />
          </OrderedList>
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}
