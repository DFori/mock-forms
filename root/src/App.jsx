import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Layout, Card, Space, Typography, Spin } from "antd"; // Ensure Layout is imported if used here

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

// Lazy load the micro frontends
const AdminInterface = React.lazy(() => import('adminApp/AdminInterface'));
const PremiumAdjustmentApp = React.lazy(() => {
  return import('PremiumAdjustmentApp/App').then(mod => {
    console.log('Loaded workflow module:', mod);
    // Ensure the default export is what you expect
    if (mod && mod.default) {
      return mod;
    } else {
      console.error('Workflow app module did not have a default export:', mod);
      throw new Error('Workflow app module not properly exported.');
    }
  });
});




// Error Boundary for micro frontends
class MicroFrontendErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Micro frontend error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <h3 className="text-lg font-medium text-red-600 mb-2">
              Unable to load application
            </h3>
            <p className="text-gray-600">
              {this.props.appName} is currently unavailable. Please try again later.
            </p>
            <button 
              onClick={() => window.location.reload()} 
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center h-64">
    <Spin size="large" />
  </div>
);

const App = () => {
  return (
    <Router>
      {/* Add a wrapper div or style the Router itself if needed */}
      <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route 
            path="/admin/*" 
            element={
              <MicroFrontendErrorBoundary appName="Admin Interface">
                <Suspense fallback={<LoadingSpinner />}>
                  <AdminInterface />
                </Suspense>
              </MicroFrontendErrorBoundary>
            } 
          />
          <Route 
            path="/premium-adjustments/*" 
            element={
              <MicroFrontendErrorBoundary appName="Workflow Results">
                <Suspense fallback={<LoadingSpinner />}>
                  <PremiumAdjustmentApp />
                </Suspense>
              </MicroFrontendErrorBoundary>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
};

const LandingPage = () => {
  return (
    <Layout className="min-h-screen w-screen h-screen flex flex-col" style={{ margin: 0, padding: 0 }}>
      <Header className="flex items-center justify-between px-6 bg-white shadow-sm w-full" style={{ margin: 0 }}>
        <div className="text-xl font-bold text-gray-800">JE Applications</div>
      </Header>

      <Content className="flex-grow p-8 bg-gray-50 w-full" style={{ margin: 0 }}>
        <div className="w-full mb-20 mx-auto h-full flex flex-col justify-center">
          <Title level={2} className="text-center mb-8">
            Select Application
          </Title>

          <Space size="large" className="w-full justify-center">
            <Link to="/admin">
              <Card
                hoverable
                className="w-64 h-64 flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-4">👨‍💼</div>
                <Title level={4} className="text-center">
                  Admin Interface
                </Title>
                <p className="text-gray-600 text-center">
                  Manage users and groups
                </p>
              </Card>
            </Link>

            <Link to="/premium-adjustments">
              <Card
                hoverable
                className="w-64 h-64 flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-4">📊</div>
                <Title level={4} className="text-center">
                  Premium Adjustment
                </Title>
                <p className="text-gray-600 text-center">
                  View and manage
                </p>
              </Card>
            </Link>
          </Space>
        </div>
      </Content>

      <Footer className="text-center bg-white w-full" style={{ margin: 0 }}>
        © 2025 Able Forma Project. All rights reserved.
      </Footer>

      {/* <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        html,
        body {
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
          overflow-x: hidden;
        }

        #root {
          width: 100%;
          height: 100%;
          margin: 0;
          padding: 0;
        }

        .ant-layout {
          width: 100% !important;
          max-width: 100% !important;
          margin: 0 !important;
          padding: 0 !important;
        }

        .ant-layout-header {
          width: 100% !important;
          max-width: 100% !important;
          margin: 0 !important;
        }

        .ant-layout-content {
          width: 100% !important;
          max-width: 100% !important;
          margin: 0 !important;
        }

        .ant-layout-footer {
          width: 100% !important;
          max-width: 100% !important;
          margin: 0 !important;
        }
      `}</style> */}
    </Layout>
  );
};

export default App;