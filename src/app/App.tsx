import {
  Component,
  lazy,
  Suspense,
  useEffect,
  type ErrorInfo,
  type ReactNode,
} from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { useLocale } from "@/hooks/useLocale";

const HomePage = lazy(() =>
  import("@/features/home/HomePage").then((module) => ({
    default: module.HomePage,
  })),
);
const AboutPage = lazy(() =>
  import("@/features/about/AboutPage").then((module) => ({
    default: module.AboutPage,
  })),
);
const ServicesPage = lazy(() =>
  import("@/features/services/ServicesPage").then((module) => ({
    default: module.ServicesPage,
  })),
);
const PostsPage = lazy(() =>
  import("@/features/posts/PostsPage").then((module) => ({
    default: module.PostsPage,
  })),
);
const PostPage = lazy(() =>
  import("@/features/posts/PostPage").then((module) => ({
    default: module.PostPage,
  })),
);
const ContactPage = lazy(() =>
  import("@/features/contact/ContactPage").then((module) => ({
    default: module.ContactPage,
  })),
);
const NotFoundPage = lazy(() =>
  import("@/features/not-found/NotFoundPage").then((module) => ({
    default: module.NotFoundPage,
  })),
);

interface ErrorBoundaryState {
  failed: boolean;
}

class AppErrorBoundary extends Component<
  { children: ReactNode },
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { failed: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { failed: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("DIST site render error", error, info.componentStack);
  }

  render() {
    if (this.state.failed) {
      return <FatalError />;
    }
    return this.props.children;
  }
}

function FatalError() {
  const { t } = useLocale();
  return (
    <main className="fatal-error">
      <span className="eyebrow eyebrow--gold">DIST</span>
      <h1>{t("appErrorTitle")}</h1>
      <p>{t("appErrorCopy")}</p>
      <button
        className="button button--primary button--default"
        onClick={() => window.location.reload()}
        type="button"
      >
        {t("reloadPage")}
      </button>
    </main>
  );
}

function RouteScrollReset() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);
  return null;
}

function RouteLoading() {
  const { t } = useLocale();
  return (
    <div aria-live="polite" className="route-loading" role="status">
      <span className="route-loading__line" />
      <span>{t("common.loading")}</span>
    </div>
  );
}

export function App() {
  return (
    <AppErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <RouteScrollReset />
          <Suspense fallback={<RouteLoading />}>
            <Routes>
              <Route element={<SiteLayout />}>
                <Route element={<HomePage />} index />
                <Route element={<AboutPage />} path="about" />
                <Route element={<ServicesPage />} path="services" />
                <Route element={<PostsPage />} path="insights" />
                <Route element={<PostPage />} path="insights/:slug" />
                <Route element={<ContactPage />} path="contact" />
                <Route element={<NotFoundPage />} path="*" />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </QueryClientProvider>
    </AppErrorBoundary>
  );
}
