import * as React from "react";
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
import { CarDetail } from "../Rented";
import Header from "../Header";

const NAVIGATION: Navigation = [
  {
    kind: "header",
    title: "Main items",
  },
  {
    segment: "ordered",
    title: "Buyurtma qilinganlar",
    icon: <GradingIcon />,
  },

  {
    segment: "yangi mashina qo'shish",
    title: "Yangi mashina qo'shish",
    icon: <AddCircleOutlineIcon />,
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

export default function AdminPanel(props: any) {
  const { window } = props;

  const router = useDemoRouter("/dashboard");

  const demoWindow = window ? window() : undefined;

  const renderContent = () => {
    switch (router.pathname) {
      case "/ordered": // "Buyurtma qilinganlar"
        return (
          <OrderedList>
            <CarDetail />
          </OrderedList>
        );
      case "/Buyurtma qilinganlar":
        return <MultiActionAreaCard />;
      case "/Yangi mashina qo'shish":
        return <Header></Header>;
      default:
        return;
    }
  };

  return (
    <AppProvider navigation={NAVIGATION} router={router} window={demoWindow}>
      <DashboardLayout
        sx={{
          width: "100%",
        }}
      >
        <PageContainer maxWidth="xl">{renderContent()}</PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}
